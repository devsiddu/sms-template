import mongoose from "mongoose";
import type { gallerySchema } from "../validators/Gallery.js";

const gallerySchema = new mongoose.Schema<gallerySchema>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 300,
    },
    image: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Gallery = mongoose.model<gallerySchema>("Gallery", gallerySchema);

export default Gallery;
