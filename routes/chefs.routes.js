import { Router } from "express";

import { getChefsCarnes, cambiarEspecialidad,getConteoChef,insertChefCocinAsia } from "../controllers/chefs.controllers.js"; 


const router = Router();


router.get("/ejercicio3",getChefsCarnes)
router.get("/ejercicio10", cambiarEspecialidad)

router.get("/ejercicio16", getConteoChef)

router.get("/ejercicio19",insertChefCocinAsia)


export default router;