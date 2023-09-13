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

const getNoQuesoCheddar =async (req, res)=>{
    try {
        
        const quesoCheddar = await Hamburguesas.find({ingredientes: {$ne:"Queso cheddar"}})

        res.json(quesoCheddar)
    } catch (error) {
        console.log(error);
    }
}

const getHamburguesasMenor9 = async (req,res)=>{
    try {
        const preciomenor9 = await Hamburguesas.find({precio:{$lte: 9}})

        res.json(preciomenor9)
    } catch (error) {
        console.log(error);
    }
}

const eliminarHamburguesaMe5 = async (req,res)=>{
    try {
        const ingredientesMenor5 = await Hamburguesas.deleteMany( {$expr:  {$lt:[{ $size: "$ingredientes" },5]} })

        res.json(ingredientesMenor5)

    } catch (error) {
        console.log(error);
    }
}

const getHamburguesaAscendentes = async (req,res)=>{
    try {
        const ordenAscendente = await Hamburguesas.find().sort({precio:-1})

        res.json(ordenAscendente)

    } catch (error) {
        console.log(error);
    }
}

const getTomateLechuga = async (req,res)=>{
    try {
        const tomateLechuga = await Hamburguesas.find({ingredientes:{$in:["Tomate","Lechuga"]}})

        res.json(tomateLechuga)

    } catch (error) {
        console.log(error);
    }
}

const incrementarPrecioGourmet = async (req,res)=>{
    try {
        
        const incrementarPrecio = await Hamburguesas.updateMany({categoria:"Gourmet"},{$inc:{precio:2}})

        res.json(incrementarPrecio)

    } catch (error) {
        console.log(error);
    }
}

const getIngredientesAlfatbeticos = async (req,res)=>{
    try {
        
        const ordenalfabetico = await Hamburguesas.aggregate([
            { $unwind: "$ingredientes" }, // Descompone el array "ingredientes" en registros separados
            { $sort: { "ingredientes": 1 } }, // Ordena alfabéticamente los registros
            {
              $group: {
                _id: "$_id", // Agrupa nuevamente por el ID del documento original
                ingredientes: { $push: "$ingredientes" } // Agrupa los ingredientes nuevamente en un array
              }
            }
          ]);
        res.json(ordenalfabetico)


    } catch (error) {
        console.log(error);
    }
}




 
 
 
//? Exporto el get

export {
    getCategoriaVegetariana,
    getHamburguesasChefB,
    agregarIngrediente,
    getHamburguesasPanIntegral,
    getNoQuesoCheddar,
    getHamburguesasMenor9,
    eliminarHamburguesaMe5,
    getHamburguesaAscendentes,
    getTomateLechuga,
    incrementarPrecioGourmet,
    getIngredientesAlfatbeticos
}