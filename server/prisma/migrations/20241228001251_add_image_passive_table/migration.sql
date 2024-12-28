-- CreateTable
CREATE TABLE "SpellImagePassive" (
    "id" SERIAL NOT NULL,
    "full" TEXT,
    "sprite" TEXT,
    "group" TEXT,
    "x" INTEGER,
    "y" INTEGER,
    "w" INTEGER,
    "z" INTEGER,
    "resource" TEXT,
    "championIdPassive" TEXT NOT NULL,

    CONSTRAINT "SpellImagePassive_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpellImagePassive" ADD CONSTRAINT "SpellImagePassive_championIdPassive_fkey" FOREIGN KEY ("championIdPassive") REFERENCES "ChampionPassive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
