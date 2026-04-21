import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import schemeRoutes from "./routes/schemeRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => {
    console.log('Server is running on PORT 5000');
});

