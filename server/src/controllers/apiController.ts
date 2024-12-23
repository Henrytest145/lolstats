import { Request, Response } from "express";
import prisma from "../db/config";
import { User } from "../types/riotApi";
import { error } from "console";

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
    console.log(regionData.region);
    console.log("Procede a hacer el fetch");
    
        const result = await fetch(`https://${regionData.region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagName}?api_key=${process.env.RIOT_KEY}`);
        if (!result.ok) {
            throw new Error("Servidor no encontrado.");
        }
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