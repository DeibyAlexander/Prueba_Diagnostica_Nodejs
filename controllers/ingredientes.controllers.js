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
        const precio = await Ingredientes.updateMany( { $mul: { precio: 1.1 } });

        //? Envio la respuesat en formato JSON
        res.json(precio)

    } catch (error) {
        console.log("error");
    }
}



 
 
 
//? Exporto el get

export {
    getStocksMenores,
    AumentarPrecio
}