import { model, Schema } from "mongoose"; //! Importo el model y el Schema de mongoose

const IngredientesSchema = Schema({ //? Utilizamos el Schema importado
    //? Empezamos a llamar los dtaos de nuestra base de datos 
    nombre:{
        type:String, //? Type: (Depende del tipo de dato)
        required:true //? Informamos que el dato es requerido
     },
     descripcion:{
        type:String,
        required:true
     },
     precio:{
        type:Number,
        required:true
     },
     stock:{
        type:Number,
        required:true
     }
})


const Ingredientes = model("Ingredientes", IngredientesSchema,"Ingredientes") //? Utilizamos el model importado anteriormente en el que llamaremos la collecion de la cual traemos los datos del SChema

//? Exportamos la constante que contiene el model}

export default Ingredientes;