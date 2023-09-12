import express from "express"; //! Importamos la dependencia express
import cors from "cors"//! Importamos la dependencia cors
import dbConnection from "../config/config.js"; //! Importamos la coneccion desde el config


import routerIngredientes from "../routes/ingredientes.routes.js"; //!Importamos la ruta de ingredientes

import routerHamburguesas from "../routes/hamburguesas.routes.js";

import routerChefs from "../routes/chefs.routes.js";

import routerCategorias from "../routes/categorias.routes.js";
import router from "../routes/hamburguesas.routes.js";


class Server{ //? Generamos la clase Server

    constructor(){ 
        this.app= express(); //? Intanciamos expres
        this.port = process.env.PORT //? Delcaramos el port desde el archivo "".env"


        this.ingredientesPath = "/ingredientes/stockMenor" //? Generamos el endPoint de ingrediente
        this.hamburguesasPath = "/hamburguesas/Vegetarianas"
        this.chefsPath = "/chefs/Carnes"
        this.categoriasPath = "/categorias"


        //? Conexion a la base de datos Mongo

        this.ConectarDB()

        //? Middlewares

        this.middlewares()

        //? Routing

        this.routes()
    }

    async ConectarDB(){ //? Instanciamos la conexion a la base de datos
        await dbConnection() //?Llamamos conexion a la base de datos
    }

    middlewares(){ // ? Instanciamos middleware
        //! Cors Instancions
        this.app.use(cors())

        //! Public Director
        this.app.use(express.static('public'))

        //! EXPRESS Json Instanciamos
        this.app.use(express.json())
    }

    routes(){ //? Instanciamos las routes

        this.app.use(this.ingredientesPath, routerIngredientes) //? llamamos la ruta
        this.app.use(this.hamburguesasPath, routerHamburguesas)
        this.app.use(this.chefsPath, routerChefs)
        this.app.use(this.categoriasPath, routerCategorias)

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Online`);
        }) //? llamamos el port
    }
}


//? Exportamos la Clase Server
export default Server;