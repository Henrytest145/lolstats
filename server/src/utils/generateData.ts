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

// createServer("la2", "americas");
// getServers();