import express from "express"; //! Importamos la dependencia express
import cors from "cors"//! Importamos la dependencia cors
import dbConnection from "../config/config.js"; //! Importamos la coneccion desde el config


import routerIngredientes from "../routes/ingredientes.routes.js"; //!Importamos la ruta de ingredientes


class Server{ //? Generamos la clase Server

    constructor(){ 
        this.app= express(); //? Intanciamos expres
        this.port = process.env.PORT //? Delcaramos el port desde el archivo "".env"


        this.ingredientesPath = "/ingredientes/stockMenor" //? Generamos el endPoint de ingrediente


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

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Online`);
        }) //? llamamos el port
    }
}


//? Exportamos la Clase Server
export default Server;