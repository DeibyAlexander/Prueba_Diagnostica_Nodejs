import { Router } from "express";

import { getCategoriaVegetariana, getHamburguesasChefB, nuevoIngrediente } from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/hamburguesas/Vegetarianas",getCategoriaVegetariana)
router.get("/hamburguesas/chefB",getHamburguesasChefB)
router.post("/hamburguesas/:ingrediente", nuevoIngrediente)


export default router;