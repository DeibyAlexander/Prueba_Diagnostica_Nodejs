import Ingredientes from "../models/Ingredientes.js"; //! Importamos el model de ingredientes


/*   const getIngredintes = async(req, res )=>{

     const ingredientes = await Ingredientes.find({ stock: { $lt: 300 } }); 


    const [total, ingredientes] = await Promise.all([
        Ingredientes.countDocuments(),
        Ingredientes.find({if (stock < 300) {
            
        }})

    ]);


    
    res.json({
        total,ingredientes
    })

} 
  */

//TODO -> Creacion del get para traer los stock menores a 400

const getIngredintes = async (req,res)=>{
    try {
        
        //? Pongo los que voy a traer dentro de una constante
        const ingredientes = await Ingredientes.find({ stock: { $lt: 400 } });

        //? Envio la respuesat en formato JSON
        res.json(ingredientes)

    } catch (error) {
        console.log("error");
    }
}
 
 
//? Exporto el get

export {
    getIngredintes
}