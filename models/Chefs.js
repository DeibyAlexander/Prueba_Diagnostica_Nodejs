import { model, Schema } from "mongoose";

const ChefSchema = Schema({ 
    nombre:{
        type:String, 
        required:true 
     },
     especialidad:{
        type:String,
        required:true
     }
})


const Chefs = model("Chefs",ChefSchema ,"Chefs") 

export default Chefs;