import Chefs from "../models/Chefs.js"; 




const getChefsCarnes = async (req,res)=>{
    try {
        

        const chefs = await Chefs.find({especialidad :"Carnes"});


        res.json(chefs)

    } catch (error) {
        console.log("error");
    }
}


const cambiarEspecialidad = async (req,res)=>{
    try {
        

        const ChefC = await Chefs.updateOne({$set:{especialidad: "Cocina Internacional"} })


        res.json(ChefC)
    } catch (error) {
        console.log(error);
    }
}


export {
    getChefsCarnes,
    cambiarEspecialidad
}