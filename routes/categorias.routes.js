import { Router } from "express";

import { getCategorias } from "../controllers/categorias.controllers.js"; 


const router = Router();


router.get("/",getCategorias)


export default router;