import { Router } from "express";

import { getCategoriaVegetariana } from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/",getCategoriaVegetariana)


export default router;