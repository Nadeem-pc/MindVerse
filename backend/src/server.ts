import express from 'express';
import dotenv from 'dotenv';
import { env } from './config/env';
import connectDB from './config/db';

connectDB();
dotenv.config();

const app = express();
app.use(express.json());

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});