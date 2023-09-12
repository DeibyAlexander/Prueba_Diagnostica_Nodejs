import { model, Schema } from "mongoose";

const CategoriaSchema = Schema({ 
    nombre:{
        type:String, 
        required:true 
     },
     descripcion:{
        type:String,
        required:true
     }
})


const Categorias = model("Categorias",CategoriaSchema ,"Categorias") 

export default Categorias;