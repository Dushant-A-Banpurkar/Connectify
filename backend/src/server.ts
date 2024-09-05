import express from 'express';
import authRoutes from './routes/authRoutes'
import connectMongoDB from './Database/connectMongoDB';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

const PORT=process.env.PORT||6000;

app.use(express.json());

app.use('/api/auth',authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
  });
  