import Hamburguesas from "../models/Hamburguesas.js"; 




const getCategoriaVegetariana = async (req,res)=>{
    try {
        

        const hamburguesas = await Hamburguesas.find({categoria :"Vegetariana"});


        res.json(hamburguesas)

    } catch (error) {
        console.log("error");
    }
}


const getHamburguesasChefB = async (req,res)=>{
    try {
        

        const hamburguesas = await Hamburguesas.find({chef :"ChefB"});


        res.json(hamburguesas)

    } catch (error) {
        console.log("error");
    }
}

const nuevoIngrediente = async (req,res)=>{
    try {
        
        const query = { categoria: "Vegetariana" };
        const nuevoIngrediente = req.params.ingrediente;

        const hamburguesa = await Hamburguesas.findOne(query);
        hamburguesa.ingredientes.push(nuevoIngrediente);

        await hamburguesa.save();

        res.json(hamburguesa)

       
    } catch (error) {
        console.log("error");
    }
}




 
 
 
//? Exporto el get

export {
    getCategoriaVegetariana,
    getHamburguesasChefB,
    nuevoIngrediente
}