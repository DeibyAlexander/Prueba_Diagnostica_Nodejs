import { Router } from "express";

import { getChefsCarnes, cambiarEspecialidad } from "../controllers/chefs.controllers.js"; 


const router = Router();


router.get("/ejercicio3",getChefsCarnes)
router.get("/ejercicio10", cambiarEspecialidad)


export default router;