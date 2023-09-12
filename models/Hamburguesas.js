import { model, Schema } from "mongoose";

const HamburguesasSchema = Schema({ 
    nombre:{
        type:String, 
        required:true 
     },
     categoria:{
        type:String,
        required:true
     },
     ingredientes:{
        type:Array,
        required:true
     },
     precio:{
        type:Number,
        required:true
     },
     chefs:{
        type:String,
        required:true
     }
})


const Hamburguesas = model("Hamburguesas",HamburguesasSchema ,"Hamburguesas") 

export default Hamburguesas;