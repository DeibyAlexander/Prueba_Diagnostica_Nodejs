import { Router } from "express";

import { getCategoriaVegetariana, getHamburguesasChefB, agregarIngrediente, getHamburguesasPanIntegral, getNoQuesoCheddar, getHamburguesasMenor9, eliminarHamburguesaMe5,getHamburguesaAscendentes, getTomateLechuga, incrementarPrecioGourmet, getIngredientesAlfatbeticos, getHamburguesaCara} from "../controllers/hamburguesas.controllers.js"; 


const router = Router();


router.get("/ejercicio2",getCategoriaVegetariana)
router.get("/ejercicio5",getHamburguesasChefB)


router.post("/ejercicio8/:ingre", agregarIngrediente);

router.get("/ejercicio9", getHamburguesasPanIntegral)

router.get("/ejercicio12", getNoQuesoCheddar)

router.get("/ejercicio15", getHamburguesasMenor9)

router.get("/ejercicio18", eliminarHamburguesaMe5)

router.get("/ejercicio20" ,getHamburguesaAscendentes)

router.get("/ejercicio23", getTomateLechuga)

router.get("/ejercicio25", incrementarPrecioGourmet)

router.get("/ejercicio26", getIngredientesAlfatbeticos)

router.get("/ejercicio27", getHamburguesaCara)


export default router;