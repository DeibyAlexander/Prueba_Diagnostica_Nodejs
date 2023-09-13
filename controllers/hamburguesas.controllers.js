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

const agregarIngrediente = async (req, res) => {
    try {
        const query = { nombre: "Clásica" };
        const nuevoIngrediente = req.params.ingre;

        const hamburguesa = await Hamburguesas.findOne(query);
        hamburguesa.ingredientes.push(nuevoIngrediente);

        await hamburguesa.save();

        res.json(hamburguesa);

    } catch (error) {
        console.log(error);
    }
}

const getHamburguesasPanIntegral = async (req,res)=>{
    try {
        

        const panIntegral = await Hamburguesas.find({ingredientes :"Pan integral"});


        res.json(panIntegral)

    } catch (error) {
        console.log("error");
    }
}




 
 
 
//? Exporto el get

export {
    getCategoriaVegetariana,
    getHamburguesasChefB,
    agregarIngrediente,
    getHamburguesasPanIntegral
}