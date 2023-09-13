import { Router } from "express";

import { getCategoriaVegetariana, getHamburguesasChefB, agregarIngrediente, getHamburguesasPanIntegral} from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/ejercicio2",getCategoriaVegetariana)
router.get("/ejercicio5",getHamburguesasChefB)


router.post("/ejercicio8/:ingre", agregarIngrediente);

router.get("/ejercicio9", getHamburguesasPanIntegral)


export default router;