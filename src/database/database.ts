import mongoose from 'mongoose';

export async function connectDB() {
    try {
    await mongoose.connect(process.env.MONGO_URI || '',)
    console.log('conectado ao mongoDB com sucesso');
    console.log('test')
}
catch(error){
    console.error('erro ao conectar ao mongoDB:', error);
    process.exit(1);
}}
