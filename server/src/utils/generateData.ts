import { Region } from "@prisma/client";
import prisma from "../db/config";

const servers = [
    "br1",
    "eun1",
    "euw1",
    "jp1",
    "kr",
    "la1",
    "la2",
    "na1",
    "oc1",
    "tr1",
    "ru",
    "ph2",
    "sg2",
    "th2",
    "tw2",
    "vn2"
]

const leagues = [
    "challenger",
    "grandmaster",
    "master",
    "diamond",
    "platinum",
    "gold",
    "silver",
    "bronze",
    "iron"
]

const getServers = async () => {
    const servers = await prisma.server.findMany();
    console.log(servers);
    return
}

const createServer = async (name:string, region:Region) => {
    await prisma.server.create({data:{
        name:name,
        region: region
    }})

    console.log("creado");
    return

}

// createServer("na1", "americas");
// getServers();

const generateLeagues = async () => {
    for (let i = 0; i < leagues.length; i++) {
        await prisma.catalogoLigas.create({data:{
            nombre: leagues[i],
        }})
    }
}
// generateLeagues();

const generateLeaguesDivisions = async (liga:number, division:number) => {
    await prisma.liga.create({data:{
        catalogoLigaId: liga,
        division: division,
    }});
}