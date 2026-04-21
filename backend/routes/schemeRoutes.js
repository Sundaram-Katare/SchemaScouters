import express from "express";
import { getAllSchemes, getFilteredSchemes } from "../controllers/schemeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllSchemes);
router.post("/filter", authMiddleware, getFilteredSchemes);

export default router;
