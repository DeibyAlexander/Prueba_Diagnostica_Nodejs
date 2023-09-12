import { Router } from "express";

import { getChefsCarnes } from "../controllers/chefs.controllers.js"; 


const router = Router();


router.get("/",getChefsCarnes)


export default router;