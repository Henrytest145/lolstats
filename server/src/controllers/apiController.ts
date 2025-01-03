import { Request, Response } from "express";
import prisma from "../db/config";
import { User } from "../types/riotApi";
import { Games, Game } from "../types/riotApi";
import { sleep, makeRequest } from "../utils/utils";
import { log } from "console";
interface data1 {
    puuid:string
    gameName:string
    tagLine:string
}

interface data2 {
    id: string
    accountId: string
    puuid: string
    profileIconId: number
    revisionDate: number
    summonerLevel: number
}

async function getGamesIds (puuid:string,  server:string, queue:string, page:string ) {
    console.log(puuid, server, queue, page);
    const region = await prisma.server.findFirst({where:{
        name:{
            equals: server
        }
    }});
    try {
        let url = `https://${region?.region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?`;
        if (queue) {
            url += `queue=${queue}&`;
        }
        if (page) {
            const start = (parseInt(page)*2)-1;
            const count = parseInt(page)*2;
            console.log(start, count);
            
            url += `start=${start}&count=${count}&`;
        }
        if (url.endsWith('&')) {
            url = url.slice(0, -1);
          }
        if (url.endsWith('?')) {
            url += `start=0&count=2`;
          }
        const response = await fetch(`${url}&api_key=${process.env.RIOT_KEY}`);
        const data = await response.json();
        return data;
    } catch (error:any) {
        console.log('Error en el fetch gamesIds en apiController.ts: ', error.message);
        return
    }
}

export const getUser = async (req:Request,res:Response) => {
    try {
        const user: User = {
            id: "",
            accountId: "",
            gameName: "",
            profileIconId: 0,
            puuid: "",
            revisionDate: 0,
            summonerLevel:0,
            tagName:""
        }
        const { username } = req.params;
        const {tagName} = req.params;
        const {server} = req.params;
        console.log(username, tagName, server);
        
        const regionData = await prisma.server.findFirst({where:{
            name:{
                equals: server
            }
        },
        select:{
            region: true
        }
    });
    if (!regionData) {
        throw new Error("Server not found");
    }    
        const result = await fetch(`https://${regionData.region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagName}?api_key=${process.env.RIOT_KEY}`);
        const data:data1 = await result.json();
        console.log('info obtenida: ', data);
        user.puuid = data.puuid;
        user.gameName = data.gameName;
        user.tagName = data.tagLine;
        const result2 = await fetch(`https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${data.puuid}?api_key=${process.env.RIOT_KEY}`);
        if (!result2.ok) {
            throw new Error("Servidor no encontrado.");
        }
        const data2:data2 = await result2.json();
        user.id = data2.id;
        user.accountId = data2.accountId;
        user.profileIconId = data2.profileIconId;
        user.revisionDate = data2.revisionDate;
        user.summonerLevel = data2.summonerLevel;
        console.log('info obtenida: ', data2);
        res.status(200).json({data: user});
        
        
    } catch (error:unknown) {
        if (error instanceof Error) {
            console.log('Error en el getUser controller: ', error.message);
            res.status(500).json({message:"Error en el servidor"});
            
        } else {
            console.log('Error en el getUser controller: ', error);
            res.status(500).json({message:"Error desconocido en el servidor"});
        }
    }
}

export const getGames = async (req:Request,res:Response) => {
    console.log('EJECUTANDO RUTA GETGAMESDATA');
    
    try {
        let {puuid, server, queue, page} = req.params;
        const region = await prisma.server.findFirst({where:{
            name:{
                equals: server
            }
        }});
        const gameIdsResponse = await getGamesIds(puuid,server,queue,page);
        console.log("RESPUESTA: ", gameIdsResponse);
        if (!gameIdsResponse) {
            throw new Error("Servidor no encontrado.");
        }
        const games:Games = await Promise.all(gameIdsResponse.map(async (gameId:string, index:number) => {                        
            console.time(`fetch: ${index}`);                        
            const url = `https://${region?.region}.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${process.env.RIOT_KEY}`;
            console.log('URL: ', url);
            
            const gameResponse = await makeRequest(url);
            await sleep(100);
            console.timeEnd(`fetch: ${index}`);            
            return gameResponse.info;     
        }));
       console.log('Juegos obtenidos: ', games);
       
        res.status(200).json({games: games});
    } catch (error:any) {
        console.log('Error en el getGames controller: ', error.message);
        res.status(500).json({message:"Error en el servidor"});
    }
}

export const getRanks = async (req:Request,res:Response) => {
    try {
        console.log('Ejecutando getRanks');
        const {id, region} = req.params;
        const url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.RIOT_KEY}`;
        const data = await makeRequest(url);
        res.status(200).json(data);
    } catch (error:any) {
        console.log('Error en el getRanks controller: ', error.message);
        
    }
}