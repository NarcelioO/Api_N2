import mongoose from 'mongoose';

export async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://narcelioferffgh_db_user:CCiQZcNvH4o7WV0v@cluster0.icf3b3c.mongodb.net/?appName=Cluster0");
        console.log('Conectado ao banco de dados MongoDB');
    }catch(error){
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
}

