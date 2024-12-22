import  express  from "express";
import { getUser } from "../controllers/apiController";

const router = express.Router();


router.get('/player/:username?/:tagName?', getUser);


export default router;