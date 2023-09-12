import Chefs from "../models/Chefs.js"; 




const getChefsCarnes = async (req,res)=>{
    try {
        

        const chefs = await Chefs.find({especialidad :"Carnes"});


        res.json(chefs)

    } catch (error) {
        console.log("error");
    }
}


export {
    getChefsCarnes
}