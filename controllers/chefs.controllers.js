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

const getConteoChef = async (req,res) =>{
    try {

        //? Primera forma de conteo
        const conteoChefs = await Chefs.find().count()

        //? Segunda forma
        /* const conteoChefs = await Chefs.countDocuments() */

        res.json(`Hay ${conteoChefs} Chefs en la base de datos`)
    } catch (error) {
        console.log(error);
    }
}


const insertChefCocinAsia = async (req,res)=>{
    try {
        const nuevoChefAsia = await Chefs.insertMany({"nombre":"ChefD","especialidad":"Cocina Asiática"})

        res.json(nuevoChefAsia)
    } catch (error) {
        console.log(error);
    }
}


export {
    getChefsCarnes,
    cambiarEspecialidad,
    getConteoChef,
    insertChefCocinAsia
}