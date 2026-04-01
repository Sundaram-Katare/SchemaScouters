import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on PORT 5000');
});

