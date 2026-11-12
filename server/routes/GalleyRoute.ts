import express from "express";
import upload from "../middlewares/upload.js";
import {
  addGallery,
  deleteGallery,
  getAllGallery,
  getGalleryById,
  updateGallery,
} from "../controllers/GalleryController.js";

const galleryRoutes = express.Router();

galleryRoutes.post("/", upload.single("image"), addGallery);
galleryRoutes.delete("/:id", deleteGallery);
galleryRoutes.put("/:id", upload.single("image"), updateGallery);
galleryRoutes.get("/all", getAllGallery);
galleryRoutes.get("/:id", getGalleryById);

export default galleryRoutes;
