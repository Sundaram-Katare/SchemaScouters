import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db/db.js";

dotenv.config();

connectDB();


const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('Server is runnig on PORT 5000');
});

