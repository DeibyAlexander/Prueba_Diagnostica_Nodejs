import { Router } from "express";

import { getChefsCarnes } from "../controllers/chefs.controllers.js"; 


const router = Router();


router.get("/chefs/Carnes",getChefsCarnes)


export default router;