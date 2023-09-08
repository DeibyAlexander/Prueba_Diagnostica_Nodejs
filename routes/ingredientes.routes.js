import { Router } from "express"; //! Importamos el Router Que nos trae la dependencia Express

import { getIngredintes } from "../controllers/ingredientes.controllers.js"; //! Nos traemos el get que exportamos de los controllers

// ? Declaro la Router importado de express en una constante
const router = Router();

//? Generamos la ruta con el metodo get
router.get("/",getIngredintes)

//? Exportamos el router que contiene la ruta del metodo
export default router;