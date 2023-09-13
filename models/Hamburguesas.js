import { model, Schema } from "mongoose";

const HamburguesasSchema = Schema({ 
    nombre:{
        type:String
     },
     categoria:{
        type:String
     },
     ingredientes:{
        type:Array
     },
     precio:{
        type:Number
     },
     chefs:{
        type:String
     }
})


const Hamburguesas = model("Hamburguesas",HamburguesasSchema ,"Hamburguesas") 

export default Hamburguesas;