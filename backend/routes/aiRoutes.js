import express from "express";
import { extractCriteria } from "../controllers/aiController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/extract", authMiddleware, extractCriteria);

export default router;
