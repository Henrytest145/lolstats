import prisma from "../db/config";

const deleteChampions = async () => {
    await prisma.champion.deleteMany({});
    console.log('Todos los campeones han sido eliminados');
};

deleteChampions();
