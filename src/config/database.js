import mongoose from 'mongoose';

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado ao banco de dados MongoDB');
    }catch(error){
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
}

