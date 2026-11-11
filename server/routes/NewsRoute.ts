import express from "express";
import upload from "../middlewares/upload.js";
import { addNews } from "../controllers/NewsController.js";

const newsRoute = express.Router();

newsRoute.post("/", upload.single("image"), addNews);

export default newsRoute;
