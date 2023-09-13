import { Router } from "express";

import { getCategoriaVegetariana, getHamburguesasChefB, agregarIngrediente } from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/hamburguesas/Vegetarianas",getCategoriaVegetariana)
router.get("/hamburguesas/chefB",getHamburguesasChefB)


router.post("/newIngre/:ingre", agregarIngrediente);


export default router;