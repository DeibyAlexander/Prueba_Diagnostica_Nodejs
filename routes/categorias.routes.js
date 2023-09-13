import { Router } from "express";

import { getCategorias } from "../controllers/categorias.controllers.js"; 


const router = Router();


router.get("/ejercicio6",getCategorias)



export default router;