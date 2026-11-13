import express from "express";
import upload from "../middlewares/upload.js";
import {
  addNews,
  deleteNews,
  getAllNews,
  getNewsById,
  toggleIsFeatured,
  updateNews,
} from "../controllers/NewsController.js";

const newsRoute = express.Router();

newsRoute.post("/", upload.single("image"), addNews);
newsRoute.delete("/:id", deleteNews);
newsRoute.put("/:id", updateNews);
newsRoute.patch("/:id", toggleIsFeatured);
newsRoute.get("/all", getAllNews);
newsRoute.get("/:id", getNewsById);

export default newsRoute;
