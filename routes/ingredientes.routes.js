import { Router } from "express"; //! Importamos el Router Que nos trae la dependencia Express

import { getStocksMenores, AumentarPrecio, StockMenor0,ingredienteMasCaro, AumentarStockPan, getDescripcionClasico, getIngredintesEntrePrecio, actualizarDescripcionPan } from "../controllers/ingredientes.controllers.js"; //! Nos traemos el get que exportamos de los controllers

// ? Declaro la Router importado de express en una constante
const router = Router();

//? Generamos la ruta con el metodo get
router.get("/ejercicio1",getStocksMenores)

router.get("/ejercicio4",AumentarPrecio)

router.get("/ejercicio7",StockMenor0)

router.get("/ejercicio11", ingredienteMasCaro)

router.get("/ejercicio13", AumentarStockPan )

router.get("/ejercicio14", getDescripcionClasico)

router.get("/ejercicio21", getIngredintesEntrePrecio)

router.get("/ejercicio22/:descripcion", actualizarDescripcionPan)


//? Exportamos el router que contiene la ruta del metodo
export default router;