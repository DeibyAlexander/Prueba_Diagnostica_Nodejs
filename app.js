import dotenv from "dotenv"; //! Importo el dotenv 
import Server from "./models/Server.js"; //! Importo el models de Server

//? Intancio el config que trae El dotenv
dotenv.config();


// ? Declaro la clase que exporto del modelo Server en un constante
const server = new Server();


//? Traigo el listen que esta dentro de la clase Server
server.listen()