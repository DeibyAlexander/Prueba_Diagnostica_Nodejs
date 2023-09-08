import mongoose from "mongoose"; //! Importo la dependecia mongoose

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{ //? Utilizo mongoose trayendo el connect que tiene para hacer la conexion con el Mongo_URL que Declare anteriormente

            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('No Inicializes')
    }
}

//? Exporto constante de dbConnection

export default dbConnection;