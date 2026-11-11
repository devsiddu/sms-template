import type { Request, Response } from "express";
import News from "../models/News.js";
import cloudinary from "../configs/cloudinary.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

const NEWS_CATEGORIES = [
  "Events",
  "Achievements",
  "Announcements",
  "Activities",
  "Academics",
] as const;

export const addNews = async (req: Request, res: Response) => {
  let uploadedPublicId: string | undefined;

  try {
    const {
      title,
      excerpt,
      category,
      author,
      content,
      featured = false,
    } = await req.body;
    // Required field validation
    if (!title || !excerpt || !category || !author || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Category validation
    if (!NEWS_CATEGORIES.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid news category.",
      });
    }

    // Content validation
    if (!Array.isArray(content) || content.length === 0) {
      return res.status(400).json({
        success: false,
        message: "News content must contain at least one section.",
      });
    }

    // Featured validation
    if (typeof featured !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Featured must be a boolean value.",
      });
    }
    let image: string | undefined;

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer, "news");
      image = uploadedImage.secure_url;
      uploadedPublicId = uploadedImage.public_id;
    }

    // Create news
    const news = await News.create({
      title,
      excerpt,
      category,
      author,
      content,
      featured,
      ...(image && { image }),
      ...(uploadedPublicId && { imagePublicId: uploadedPublicId }),
    });

    return res.status(201).json({
      success: true,
      message: "News added successfully!",
      data: news,
    });
  } catch (error) {
    console.error("Error while adding news:", error);
    if (uploadedPublicId) {
      try {
        await cloudinary.uploader.destroy(uploadedPublicId);
      } catch (deleteError) {
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }
    if (error instanceof Error && error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
