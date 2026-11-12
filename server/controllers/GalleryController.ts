import type { Request, Response } from "express";
import { gallerySchemaValidator } from "../validators/Gallery.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import Gallery from "../models/Gallery.js";
import cloudinary from "../configs/cloudinary.js";
import mongoose from "mongoose";

export const addGallery = async (req: Request, res: Response) => {
  let imagePublicId: string | undefined;
  try {
    const result = gallerySchemaValidator.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        error: result.error.issues.map((issue) => ({
          field: issue.path.join(","),
          message: issue.message,
        })),
      });
    }

    const { title, category, description } = result.data;

    let image: string | undefined;

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(
        req.file.buffer,
        "gallery",
      );

      image = uploadedImage.secure_url;
      imagePublicId = uploadedImage.public_id;
    }

    const gallery = await Gallery.create({
      title,
      category,
      description,
      ...(image && { image }),
      ...(imagePublicId && { imagePublicId }),
    });

    return res.status(201).json({
      success: true,
      message: "Gallery added successfully!",
      data: gallery,
    });
  } catch (error: unknown) {
    console.error(`Error while add gallery : ${error}`);

    if (imagePublicId) {
      try {
        await cloudinary.uploader.destroy(imagePublicId);
      } catch (deleteError) {
        console.error(`Cloudinary cleanup failed: ${deleteError}`);
      }
    }

    return res.status(500).json({ success: false, message: error });
  }
};

export const deleteGallery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid gallery id" });
    }

    const gallery = await Gallery.findByIdAndDelete(id);

    if (!gallery) {
      return res.json({ success: false, message: "Gallery not found" });
    }

    if (gallery.imagePublicId) {
      try {
        const result = await cloudinary.uploader.destroy(gallery.imagePublicId);
        if (result.result !== "ok" && result.result !== "not found") {
          console.error("Cloudinary deletion result:", result);
        }
      } catch (deleteError) {
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }

    return res.status(200).json({ success: true, message: "News Deleted" });
  } catch (error: unknown) {
    console.error(`Error while deleting gallery : ${error}`);

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const updateGallery = async (req: Request, res: Response) => {
  let uploadedPublicId: string | undefined;
  let isSaved = false;
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid gallery id" });
    }

    const result = gallerySchemaValidator.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        error: result.error.issues.map((issue) => ({
          field: issue.path.join(","),
          message: issue.message,
        })),
      });
    }

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found" });
    }

    const oldPublicId = gallery.imagePublicId;

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(
        req.file.buffer,
        "gallery",
      );

      uploadedPublicId = uploadedImage.public_id;

      gallery.image = uploadedImage.secure_url;
      gallery.imagePublicId = uploadedImage.public_id;
    }
    const { title, category, description } = result.data;
    gallery.title = title;
    gallery.category = category;
    gallery.description = description;

    gallery.save();
    isSaved = true;

    if (uploadedPublicId && oldPublicId) {
      try {
        const result = await cloudinary.uploader.destroy(oldPublicId);
        if (result.result !== "ok" && result.result !== "not found") {
          console.error("Cloudinary deletion result:", result);
        }
      } catch (deleteError) {
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }

    return res.status(200).json({ success: true, message: "Gallery updated" });
  } catch (error: unknown) {
    console.error(`Error while updating gallery : ${error}`);

    if (uploadedPublicId && !isSaved) {
      try {
        await cloudinary.uploader.destroy(uploadedPublicId);
      } catch (deleteError) {
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getAllGallery = async (req: Request, res: Response) => {
  try {
    const galleries = await Gallery.find().sort({ createAt: -1 });
    return res.status(200).json({ success: true, galleries });
  } catch (error: unknown) {
    console.error(`Error while fetching gallery records : ${error}`);

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getGalleryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid gallery id" });
    }

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found" });
    }

    return res.status(200).json({ success: true, gallery });
  } catch (error) {
    console.error(`Error while finding the gallery data : ${error}`);

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
