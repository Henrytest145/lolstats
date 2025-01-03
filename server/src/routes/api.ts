import  express  from "express";
import { getUser, getGames, getRanks } from "../controllers/apiController";

const router = express.Router();


router.get('/player/:username?/:tagName?/:server?', getUser);
router.get('/games/:puuid?/:server?/:queue?/:page?', getGames);
router.get('/rank/:id?/:region?', getRanks);

export default router;