-- CreateEnum
CREATE TYPE "Region" AS ENUM ('americas', 'asia', 'europe', 'sea');

-- CreateTable
CREATE TABLE "Summoner" (
    "puuId" TEXT NOT NULL,
    "gameName" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "updateDate" TIMESTAMP(3) NOT NULL,
    "iconId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "rankFlex" TEXT NOT NULL,
    "rankSolo" TEXT NOT NULL,

    CONSTRAINT "Summoner_pkey" PRIMARY KEY ("puuId")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "win" BOOLEAN NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" TEXT NOT NULL,
    "baron" INTEGER NOT NULL,
    "champion" INTEGER NOT NULL,
    "dragon" INTEGER NOT NULL,
    "horde" INTEGER NOT NULL,
    "hinibitor" INTEGER NOT NULL,
    "riftHerald" INTEGER NOT NULL,
    "tower" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ban" (
    "id" TEXT NOT NULL,
    "championId" INTEGER NOT NULL,
    "pickTurn" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "Ban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL,
    "dateEnd" TIMESTAMP(3) NOT NULL,
    "gameType" TEXT NOT NULL,
    "gameMode" TEXT NOT NULL,
    "gameDuration" INTEGER NOT NULL,
    "mapId" INTEGER NOT NULL,
    "server" TEXT NOT NULL,
    "queueId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameStat" (
    "id" TEXT NOT NULL,
    "gamePosition" INTEGER NOT NULL,
    "championLevel" INTEGER NOT NULL,
    "championId" INTEGER NOT NULL,
    "championName" TEXT NOT NULL,
    "deaths" INTEGER NOT NULL,
    "kills" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "lane" TEXT NOT NULL,
    "item0" INTEGER NOT NULL,
    "item1" INTEGER NOT NULL,
    "item2" INTEGER NOT NULL,
    "item3" INTEGER NOT NULL,
    "item4" INTEGER NOT NULL,
    "item5" INTEGER NOT NULL,
    "item6" INTEGER NOT NULL,
    "profileIcon" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "win" BOOLEAN NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "GameStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "championId" INTEGER NOT NULL,
    "championName" TEXT NOT NULL,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SummonerChampion" (
    "id" TEXT NOT NULL,
    "summonerId" TEXT NOT NULL,
    "championId" TEXT NOT NULL,

    CONSTRAINT "SummonerChampion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" "Region" NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameSummoners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_GameSummoners_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_GameSummoners_B_index" ON "_GameSummoners"("B");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ban" ADD CONSTRAINT "Ban_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameStat" ADD CONSTRAINT "GameStat_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SummonerChampion" ADD CONSTRAINT "SummonerChampion_summonerId_fkey" FOREIGN KEY ("summonerId") REFERENCES "Summoner"("puuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SummonerChampion" ADD CONSTRAINT "SummonerChampion_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSummoners" ADD CONSTRAINT "_GameSummoners_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameSummoners" ADD CONSTRAINT "_GameSummoners_B_fkey" FOREIGN KEY ("B") REFERENCES "Summoner"("puuId") ON DELETE CASCADE ON UPDATE CASCADE;
