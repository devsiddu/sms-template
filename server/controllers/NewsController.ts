import type { Request, Response } from "express";
import News from "../models/News.js";
import cloudinary from "../configs/cloudinary.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import { createNewsSchema } from "../validators/News.js";
import mongoose from "mongoose";

const NEWS_CATEGORIES = [
  "Events",
  "Achievements",
  "Announcements",
  "Activities",
  "Academics",
] as const;

// Add news
export const addNews = async (req: Request, res: Response) => {
  let uploadedPublicId: string | undefined;

  try {
    // Required field validation
    const result = createNewsSchema.safeParse(req.body);

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
    const { title, excerpt, category, author, content, featured } = result.data;
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

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// Delete News

export const deleteNews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({
        success: false,
        message: "Invalid news ID",
      });
    }

    const news = await News.findByIdAndDelete(id);

    if (!news) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }

    if (news.imagePublicId) {
      try {
        const result = await cloudinary.uploader.destroy(news.imagePublicId);

        if (result.result !== "ok" && result.result !== "not found") {
          console.error("Cloudinary deletion result:", result);
        }
      } catch (deleteError) {
        // News is already deleted; log cleanup failure for retry.
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }
    return res.status(200).json({ success: true, message: "News Deleted" });
  } catch (error: unknown) {
    console.error("Error while deleting news:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateNews = async (req: Request, res: Response) => {
  let uploadedPublicId: string | undefined;
  let isSaved = false;
  try {
    const { id } = req.params;
    const result = createNewsSchema.safeParse(req.body);

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

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({
        success: false,
        message: "Invalid News Id",
      });
    }

    const news = await News.findById(id);
    if (!news) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }

    const oldPublicId = news.imagePublicId;

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer, "news");
      uploadedPublicId = uploadedImage.public_id;

      news.image = uploadedImage.secure_url;
      news.imagePublicId = uploadedImage.public_id;
    }

    const { title, excerpt, category, author, content, featured } = result.data;

    news.title = title;
    news.excerpt = excerpt;
    news.category = category;
    news.author = author;
    news.content = content;
    news.featured = featured;

    await news.save();
    isSaved = true;

    if (oldPublicId && uploadedPublicId) {
      try {
        const result = await cloudinary.uploader.destroy(oldPublicId);

        if (result.result !== "ok" && result.result !== "not found") {
          console.error("Cloudinary deletion result:", result);
        }
      } catch (deleteError) {
        // News is already deleted; log cleanup failure for retry.
        console.error("Cloudinary cleanup failed:", deleteError);
      }
    }

    return res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error: unknown) {
    console.error("Error while updating news:", error);

    // Remove newly uploaded image if database update failed

    if (uploadedPublicId && !isSaved) {
      try {
        await cloudinary.uploader.destroy(uploadedPublicId);
      } catch (cleanupError) {
        console.error("New Cloudinary image cleanup failed:", cleanupError);
      }
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const toggleIsFeatured = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid new id" });
    }

    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    news.featured = !news.featured;
    await news.save();
    return res.status(200).json({ success: true, message: "Featured Toggled" });
  } catch (error) {
    console.error(`Error while toggling featured : ${error}`);
    return res.status(500).json({ success: false, message: error });
  }
};
