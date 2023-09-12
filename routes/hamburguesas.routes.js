import { Router } from "express";

import { getCategoriaVegetariana, getHamburguesasChefB } from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/hamburguesas/Vegetarianas",getCategoriaVegetariana)
router.get("/hamburguesas/chefB",getHamburguesasChefB)


export default router;