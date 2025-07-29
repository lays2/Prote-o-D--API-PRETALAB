import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './Prote-o-D--API-PRETALAB/src/routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import { connectDB } from './database/database';

connectDB();

const app =express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
