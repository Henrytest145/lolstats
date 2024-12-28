import { log } from "console";
import { write } from "fs";
import fs from "fs/promises";
import path, { parse } from "path";
import prisma from "../db/config";
import { v4 as uuidv4 } from "uuid";

const filePath = path.join(__dirname, "json", "championFull.json");

const obtainData = async () => await fs.readFile(filePath, "utf-8");
const readData = async () => {
  const data2 = JSON.parse(await obtainData());
  const championData = data2.data;
  return championData;
};

const writeData = async () => {
  const championData = await readData();

  for (const champion in championData) {
    const {
      id,
      key,
      name,
      title,
      image,
      skins,
      lore,
      blurb,
      allytips,
      enemytips,
      tags,
      partype,
      info,
      stats,
      spells,
      passive,
    } = championData[champion];
    const type = partype;
    console.log(id);

    // const championMain = await prisma.champion.create({
    //       data: {
    //           key: parseInt(key),
    //           name: name,
    //           title: title,
    //           type: type,
    //           lore: lore,
    //           blurb: blurb,
    //           full: image.full,
    //           sprite: image.sprite,
    //           x: image.x,
    //           y: image.y,
    //           w: image.w,
    //           h: image.h,
    //           id: String(id),
    //       },
    //     });
    // }

    // const championOverview = await prisma.championOverview.create({
    //     data: {
    //         championId: id,  // This should reference the first create
    //         attack: info.attack,
    //         defense: info.defense,
    //         magic: info.magic,
    //         difficulty: info.difficulty,
    //     },
    // });


    // const championSkins = await Promise.all(skins.map((skin:any) =>
    //     prisma.championImage.create({
    //         data: {
    //             id: parseInt(skin.id),
    //             num: skin.num,
    //             name: skin.name,
    //             chromas: skin.chromas,
    //             type: 'skin',
    //             championId: id,
    //         }
    //     }))
    // );

    // const championAllyTips = await Promise.all(allytips.map((tip:string) =>
    //     prisma.tips.create({
    //         data: {
    //             content: tip,
    //             enemyTip: false,
    //             championId: id,
    //         }
    //     }))
    // );
        
        // const championEnemyTips = await Promise.all(enemytips.map((tip:string) =>
        //     prisma.tips.create({
        //         data: {
        //             content: tip,
        //             enemyTip: true,
        //             championId: id,
        //         }
        //     }))
        // );


        // const championStats = await prisma.championStats.create({
        //     data: {
        //         championid: id,  // This should reference the first create
        //         hp: stats.hp,
        //         hpperlevel: stats.hpperlevel,
        //         mp: stats.mp,
        //         mpperlevel: stats.mpperlevel,
        //         armor: stats.armor,
        //         armorperlevel: stats.armorperlevel,
        //         spellblock: stats.spellblock,
        //         spellblockperlevel: stats.spellblockperlevel,
        //         attackrange: stats.attackrange,
        //         hpregen: stats.hpregen,
        //         hpregenperlevel: stats.hpregenperlevel,
        //         mpregen: stats.mpregen,
        //         mpregenperlevel: stats.mpregenperlevel,
        //         crit: stats.crit,
        //         critperlevel: stats.critperlevel,
        //         attackdamage: stats.attackdamage,
        //         attackdamageperlevel: stats.attackdamageperlevel,
        //         attackspeedperlevel: stats.attackspeedperlevel,
        //         attackspeed: stats.attackspeed,
        //     },
        // });

        // const championSpells = await Promise.all(spells.map((spell: any) =>
        //     prisma.championSpells.create({
        //         data: {
        //             id: spell.id,
        //             name: spell.name,
        //             description: spell.description,
        //             tooltip: spell.tooltip,
        //             maxrank: spell.maxrank,
        //             cooldownburn: spell.cooldownburn,
        //             costburn: spell.costburn,
        //             costtype: spell.costType,
        //             maxammo: spell.maxammo,
        //             championId: id,
        //         },
        //     })
        // ));
        




        // const championSpellsImages = await Promise.all(spells.map((spell:any) =>
        //     prisma.spellImage.create({
        //         data: {
        //             full: spell.image.full,
        //             sprite: spell.image.sprite,
        //             group: spell.image.group,
        //             x: spell.image.x,
        //             y: spell.image.y,
        //             w: spell.image.w,
        //             z: spell.image.h,
        //             resource: spell.resource,
        //             championIdSpell: spell.id,
        //         },
        //     })
        // ));
            


    // const championPassive = await prisma.championPassive.create({
    // data: {
    //     id: uuidv4(),
    //     championId: id,  // This should reference the first create
    //     name: passive.name,
    //     description: passive.description,
    // },

    //     const championPassiveId = await prisma.championPassive.findFirst({
    //         where: {
    //             championId: id,
    //         },
    //     });
    //     if (!championPassiveId) {
    //         return;
            
    //     }
    //     console.log(championPassiveId);
        
    //     const championPassiveImage = await prisma.spellImagePassive.create({
    //     data: {
    //         full: passive.image.full,
    //         sprite: passive.image.sprite,
    //         group: passive.image.group,
    //         x: passive.image.x,
    //         y: passive.image.y,
    //         w: passive.image.w,
    //         z: passive.image.h,
    //         resource: "passive",
    //         championIdPassive: championPassiveId.id,
    //     }
    // });
  }
};
writeData();









