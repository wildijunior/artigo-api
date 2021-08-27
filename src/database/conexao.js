import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

const conexao = mongoose.connect(uri);

export default conexao;