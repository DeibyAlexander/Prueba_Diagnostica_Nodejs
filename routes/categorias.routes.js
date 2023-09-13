import { Router } from "express";

import { getCategorias, getDescripcionGourmet } from "../controllers/categorias.controllers.js"; 


const router = Router();


router.get("/ejercicio6",getCategorias)

router.get("/ejercicio17", getDescripcionGourmet)



export default router;