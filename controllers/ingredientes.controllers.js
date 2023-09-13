import { json } from "express";
import Ingredientes from "../models/Ingredientes.js"; //! Importamos el model de ingredientes


//TODO -> Creacion del get para traer los stock menores a 400

const getStocksMenores = async (req,res)=>{
    try {
        
        //? Pongo los que voy a traer dentro de una constante
        const ingredientes = await Ingredientes.find({ stock: { $lt: 400 } });

        //? Envio la respuesat en formato JSON
        res.json(ingredientes)

    } catch (error) {
        console.log("error");
    }
}

const AumentarPrecio = async (req,res)=>{
    try {
        
        //? Pongo los que voy a traer dentro de una constante
        const precio = await Ingredientes.updateMany( { $mul: { precio: 1.5 } });

        //? Envio la respuesat en formato JSON
        res.json(precio)

    } catch (error) {
        console.log("error");
    }
}

const StockMenor0 = async (req,res)=>{
    try {
        
        //? Pongo los que voy a traer dentro de una constante
        const stock0 = await Ingredientes.deleteMany({ stock: 0  });

        //? Envio la respuesat en formato JSON
        res.json(stock0)

    } catch (error) {
        console.log("error");
    }
}

const ingredienteMasCaro = async (req,res)=>{
    try {
        const ingrediente = await Ingredientes.findOne().sort({ precio: -1 });

        res.json(ingrediente)
    } catch (error) {
        
    }
}

const AumentarStockPan = async (req,res)=>{
    try {


        const precio = await Ingredientes.updateMany({nombre: "Pan"}, { $inc: { stock: 100 } });

        res.json(precio)

    } catch (error) {
        console.log("error");
    }
}


const getDescripcionClasico = async (req, res)=>{
    try {
        const clasico = await Ingredientes.find({descripcion: /clásico/})
        
        res.json(clasico)

    } catch (error) {
        console.log(error);
    }
}


const getIngredintesEntrePrecio = async (req,res)=>{
    try {

        const precioEntre2y5 = await Ingredientes.find({precio:{$lte:5,$gte:2}})

        res.json(precioEntre2y5)



    } catch (error) {
        console.log(error);
    }
}

const actualizarDescripcionPan = async(req,res)=>{
    try {

        const actualizarDescripcion = req.params.descripcion;

        const descripcion = await Ingredientes.updateMany({nombre:"Pan"},{descripcion: actualizarDescripcion})

        res.json(descripcion)
    } catch (error) {
        console.log();
    }
}




 
 
 
//? Exporto el get

export {
    getStocksMenores,
    AumentarPrecio,
    StockMenor0,
    ingredienteMasCaro,
    AumentarStockPan,
    getDescripcionClasico,
    getIngredintesEntrePrecio,
    actualizarDescripcionPan
}