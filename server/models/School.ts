import mongoose from "mongoose";
import type { schoolSchema } from "../validators/School.js";

const schoolSchema = new mongoose.Schema<schoolSchema>(
  {
    fullname: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    shortname: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    establishYear: {
      type: Number,
      required: true,
      min: 4,
      max: 4,
    },
    heroImage: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const School = mongoose.model<schoolSchema>("School", schoolSchema);
export default School;
