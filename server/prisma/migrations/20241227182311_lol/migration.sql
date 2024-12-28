-- CreateEnum
CREATE TYPE "Region" AS ENUM ('americas', 'asia', 'europe', 'sea');

-- CreateTable
CREATE TABLE "Summoner" (
    "puuid" TEXT NOT NULL,
    "id" TEXT,
    "accountId" BIGINT,
    "profileIconId" BIGINT,
    "summonerLevel" BIGINT,
    "revisionDate" BIGINT,

    CONSTRAINT "Summoner_pkey" PRIMARY KEY ("puuid")
);

-- CreateTable
CREATE TABLE "ChampionStats" (
    "id" SERIAL NOT NULL,
    "hp" DECIMAL(65,30),
    "hpperlevel" DECIMAL(65,30),
    "mp" DECIMAL(65,30),
    "mpperlevel" DECIMAL(65,30),
    "movespeed" DECIMAL(65,30),
    "armor" DECIMAL(65,30),
    "armorperlevel" DECIMAL(65,30),
    "spellblock" DECIMAL(65,30),
    "spellblockperlevel" DECIMAL(65,30),
    "attackrange" DECIMAL(65,30),
    "hpregen" DECIMAL(65,30),
    "hpregenperlevel" DECIMAL(65,30),
    "mpregen" DECIMAL(65,30),
    "mpregenperlevel" DECIMAL(65,30),
    "crit" DECIMAL(65,30),
    "critperlevel" DECIMAL(65,30),
    "attackdamage" DECIMAL(65,30),
    "attackdamageperlevel" DECIMAL(65,30),
    "attackspeedperlevel" DECIMAL(65,30),
    "attackspeed" DECIMAL(65,30),
    "championid" TEXT NOT NULL,

    CONSTRAINT "ChampionStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "key" INTEGER,
    "name" TEXT,
    "title" TEXT,
    "type" TEXT,
    "lore" TEXT,
    "blurb" TEXT,
    "full" TEXT,
    "sprite" TEXT,
    "x" INTEGER,
    "y" INTEGER,
    "w" INTEGER,
    "h" INTEGER,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liga" (
    "id" SERIAL NOT NULL,
    "catalogoLigaId" INTEGER NOT NULL,
    "division" INTEGER NOT NULL,

    CONSTRAINT "Liga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Elo" (
    "jugadorId" TEXT NOT NULL,
    "tipoPartida" TEXT,
    "ligaId" INTEGER,
    "division" INTEGER,
    "points" INTEGER,

    CONSTRAINT "Elo_pkey" PRIMARY KEY ("jugadorId")
);

-- CreateTable
CREATE TABLE "CatalogoLigas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "CatalogoLigas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionImage" (
    "id" SERIAL NOT NULL,
    "num" INTEGER,
    "name" TEXT,
    "chromas" BOOLEAN,
    "type" TEXT,
    "championId" TEXT NOT NULL,

    CONSTRAINT "ChampionImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tips" (
    "id" BIGSERIAL NOT NULL,
    "content" TEXT,
    "enemyTip" BOOLEAN,
    "championId" TEXT NOT NULL,

    CONSTRAINT "Tips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionOverview" (
    "id" SERIAL NOT NULL,
    "attack" INTEGER,
    "defense" INTEGER,
    "magic" INTEGER,
    "difficulty" INTEGER,
    "championId" TEXT NOT NULL,

    CONSTRAINT "ChampionOverview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionSpells" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "tooltip" TEXT,
    "maxrank" INTEGER,
    "cooldownburn" TEXT,
    "costburn" INTEGER,
    "costtype" TEXT,
    "maxammo" TEXT,
    "rangeburn" TEXT,
    "championId" TEXT NOT NULL,

    CONSTRAINT "ChampionSpells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellImage" (
    "id" SERIAL NOT NULL,
    "full" TEXT,
    "sprite" TEXT,
    "group" TEXT,
    "x" INTEGER,
    "y" INTEGER,
    "w" INTEGER,
    "z" INTEGER,
    "resource" TEXT,
    "championIdSpell" TEXT NOT NULL,

    CONSTRAINT "SpellImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionPassive" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "championId" TEXT NOT NULL,

    CONSTRAINT "ChampionPassive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChampionsPlayed" (
    "playerId" TEXT NOT NULL,
    "championId" TEXT NOT NULL,

    CONSTRAINT "ChampionsPlayed_pkey" PRIMARY KEY ("playerId","championId")
);

-- CreateTable
CREATE TABLE "ChampionsMastery" (
    "playerId" TEXT NOT NULL,
    "championKey" INTEGER NOT NULL,
    "championLevel" BIGINT,
    "championPoints" BIGINT,
    "lastPlayTime" BIGINT,
    "championPointsSinceLastLevel" BIGINT,
    "championPointsUntilNextLevel" BIGINT,
    "markRequiredForNextLevel" INTEGER,
    "tokensEarned" BIGINT,
    "championSeasonMilestone" BIGINT,

    CONSTRAINT "ChampionsMastery_pkey" PRIMARY KEY ("playerId")
);

-- CreateTable
CREATE TABLE "Game" (
    "gameId" BIGINT NOT NULL,
    "endOfGameResult" TEXT,
    "gameCreation" BIGINT,
    "gameDuration" INTEGER,
    "gameEndTimestamp" BIGINT,
    "gameMode" TEXT,
    "gameName" TEXT,
    "gameStartTimestamp" BIGINT,
    "gameType" TEXT,
    "gameVersion" TEXT,
    "mapId" INTEGER,
    "platformId" TEXT,
    "queueId" INTEGER,
    "tournamentCode" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("gameId")
);

-- CreateTable
CREATE TABLE "GameParticipants" (
    "id" SERIAL NOT NULL,
    "playerId" TEXT NOT NULL,
    "gameId" BIGINT NOT NULL,

    CONSTRAINT "GameParticipants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameParticipantStats" (
    "id" BIGSERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,
    "allPings" INTEGER,
    "assistMePings" INTEGER,
    "assists" INTEGER,
    "baronKills" INTEGER,
    "basicPings" INTEGER,
    "bountyLevel" INTEGER,
    "champExperience" INTEGER,
    "champLevel" INTEGER,
    "championId" INTEGER,
    "championName" TEXT,
    "championTransform" INTEGER,
    "commandPings" INTEGER,
    "consumablesPurchased" INTEGER,
    "damageDealtToBuildings" INTEGER,
    "damageDealtToObjectives" INTEGER,
    "damageDealtToTurrets" INTEGER,
    "damageSelfMitigated" INTEGER,
    "dangerPings" INTEGER,
    "deaths" INTEGER,
    "detectorWardsPlaced" INTEGER,
    "doubleKills" INTEGER,
    "dragonKills" INTEGER,
    "eligibleForProgression" BOOLEAN,
    "enemyMissingPings" INTEGER,
    "enemyVisionPings" INTEGER,
    "firstBloodAssist" BOOLEAN,
    "firstBloodKill" BOOLEAN,
    "firstTowerAssist" BOOLEAN,
    "gameEndedInEarlySurrender" BOOLEAN,
    "gameEndedInSurrender" BOOLEAN,
    "getBackPings" INTEGER,
    "goldEarned" INTEGER,
    "goldSpent" INTEGER,
    "holdPings" INTEGER,
    "individualPosition" TEXT,
    "inhibitorKills" INTEGER,
    "inhibitorTakedowns" INTEGER,
    "inhibitorsLost" INTEGER,
    "item0" INTEGER,
    "item1" INTEGER,
    "item2" INTEGER,
    "item3" INTEGER,
    "item4" INTEGER,
    "item5" INTEGER,
    "item6" INTEGER,
    "itemsPurchased" INTEGER,
    "killingSprees" INTEGER,
    "kills" INTEGER,
    "lane" TEXT,
    "largestCriticalStrike" INTEGER,
    "largestKillingSpree" INTEGER,
    "largestMultiKill" INTEGER,
    "longestTimeSpentLiving" INTEGER,
    "magicDamageDealt" INTEGER,
    "magicDamageDealtToChampions" INTEGER,
    "magicDamageTaken" INTEGER,
    "needVisionPings" INTEGER,
    "neutralMinionsKilled" INTEGER,
    "nexusKills" INTEGER,
    "nexusLost" INTEGER,
    "nexusTakedowns" INTEGER,
    "objectivesStolen" INTEGER,
    "objectivesStolenAssists" INTEGER,
    "onMyWayPings" INTEGER,
    "pentakills" INTEGER,
    "physicalDamageDealt" INTEGER,
    "physicalDamageDealtToChampions" INTEGER,
    "physicalDamageTaken" INTEGER,
    "profileIcon" INTEGER,
    "pushPings" INTEGER,
    "pentaKills" INTEGER,
    "quadraKills" INTEGER,
    "role" TEXT,
    "sightWardsBoughtInGame" INTEGER,
    "spell1Casts" INTEGER,
    "spell2Casts" INTEGER,
    "spell3Casts" INTEGER,
    "spell4Casts" INTEGER,
    "summoner1Casts" INTEGER,
    "summoner1Id" INTEGER,
    "summoner2Casts" INTEGER,
    "summoner2Id" INTEGER,
    "teamId" INTEGER,
    "teamPosition" TEXT,
    "timeCCingOthers" INTEGER,
    "timePlayed" INTEGER,
    "totalDamageDealt" INTEGER,
    "totalDamageDealtToChampions" INTEGER,
    "totalDamageTaken" INTEGER,
    "totalHeal" INTEGER,
    "totalHealsOnTeammates" INTEGER,
    "totalMinionsKilled" INTEGER,
    "totalTimeCCDealt" INTEGER,
    "totalTimeSpentDead" INTEGER,
    "totalUnitsHealed" INTEGER,
    "tripleKills" INTEGER,
    "trueDamageDealt" INTEGER,
    "trueDamageDealtToChampions" INTEGER,
    "trueDamageTaken" INTEGER,
    "turretKills" INTEGER,
    "turretTakedowns" INTEGER,
    "turretsLost" INTEGER,
    "visionClearedPings" INTEGER,
    "visionScore" INTEGER,
    "visionWardsBoughtInGame" INTEGER,
    "wardsKilled" INTEGER,
    "wardsPlaced" INTEGER,
    "win" BOOLEAN,

    CONSTRAINT "GameParticipantStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" "Region" NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Champion_key_key" ON "Champion"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ChampionOverview_championId_key" ON "ChampionOverview"("championId");

-- CreateIndex
CREATE UNIQUE INDEX "ChampionPassive_championId_key" ON "ChampionPassive"("championId");

-- CreateIndex
CREATE UNIQUE INDEX "ChampionsPlayed_playerId_key" ON "ChampionsPlayed"("playerId");

-- AddForeignKey
ALTER TABLE "ChampionStats" ADD CONSTRAINT "ChampionStats_championid_fkey" FOREIGN KEY ("championid") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liga" ADD CONSTRAINT "Liga_catalogoLigaId_fkey" FOREIGN KEY ("catalogoLigaId") REFERENCES "CatalogoLigas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elo" ADD CONSTRAINT "Elo_ligaId_fkey" FOREIGN KEY ("ligaId") REFERENCES "Liga"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elo" ADD CONSTRAINT "Elo_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "Summoner"("puuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionImage" ADD CONSTRAINT "ChampionImage_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tips" ADD CONSTRAINT "Tips_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionOverview" ADD CONSTRAINT "ChampionOverview_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionSpells" ADD CONSTRAINT "ChampionSpells_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellImage" ADD CONSTRAINT "SpellImage_championIdSpell_fkey" FOREIGN KEY ("championIdSpell") REFERENCES "ChampionSpells"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionPassive" ADD CONSTRAINT "ChampionPassive_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionsPlayed" ADD CONSTRAINT "ChampionsPlayed_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Summoner"("puuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionsPlayed" ADD CONSTRAINT "ChampionsPlayed_championId_fkey" FOREIGN KEY ("championId") REFERENCES "Champion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionsMastery" ADD CONSTRAINT "ChampionsMastery_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Summoner"("puuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChampionsMastery" ADD CONSTRAINT "ChampionsMastery_championKey_fkey" FOREIGN KEY ("championKey") REFERENCES "Champion"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameParticipants" ADD CONSTRAINT "GameParticipants_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Summoner"("puuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameParticipants" ADD CONSTRAINT "GameParticipants_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("gameId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameParticipantStats" ADD CONSTRAINT "GameParticipantStats_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "GameParticipants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
