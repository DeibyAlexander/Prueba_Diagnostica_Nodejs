import Categorias from "../models/Categorias.js"; 




const getCategorias = async (req,res)=>{
    try {
        

        const categorias = await Categorias.find();


        res.json(categorias)

    } catch (error) {
        console.log("error");
    }
}


export {
    getCategorias
}