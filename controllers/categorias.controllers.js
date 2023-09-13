import Categorias from "../models/Categorias.js"; 




const getCategorias = async (req,res)=>{
    try {
        

        const categorias = await Categorias.find();


        res.json(categorias)

    } catch (error) {
        console.log("error");
    }
}

const getDescripcionGourmet = async (req, res)=>{
    try {
        const gourmet = await Categorias.find({descripcion: /gourmet/})
        
        res.json(gourmet)

    } catch (error) {
        console.log(error);
    }
}


export {
    getCategorias,
    getDescripcionGourmet
}