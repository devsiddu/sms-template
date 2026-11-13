import type { Request, Response } from "express";
import { schoolSchemaValidator } from "../validators/School.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import School from "../models/School.js";
import cloudinary from "../configs/cloudinary.js";
import mongoose from "mongoose";

export const addSchoolInfo = async (req: Request, res: Response) => {
  let imagePublicId: string | undefined;
  try {
    const result = schoolSchemaValidator.safeParse(req.body);

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

    const {
      fullname,
      shortname,
      slogan,
      location,
      email,
      phone,
      establishYear,
      map,
    } = result.data;

    let image: string | undefined;
    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer, "info");

      image = uploadedImage.secure_url;
      imagePublicId = uploadedImage.public_id;
    }

    const school = await School.create({
      fullname,
      shortname,
      slogan,
      email,
      phone,
      establishYear,
      location,
      map,
      ...(image && { heroImage: image }),
      ...(imagePublicId && { imagePublicId }),
    });

    return res.json({ success: true, message: "School Info saved" });
  } catch (error) {
    console.error(`Failed to save school info : ${error}`);

    if (imagePublicId) {
      try {
        await cloudinary.uploader.destroy(imagePublicId);
      } catch (error) {
        console.error("Cloudinary cleanup failed: " + error);
      }
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const updateSchoolInfo = async (req: Request, res: Response) => {
  let uploadedPublicId: string | undefined;
  let isSaved = false;
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid school id" });
    }

    const result = schoolSchemaValidator.safeParse(req.body);

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

    const school = await School.findById(id);

    if (!school) {
      return res
        .status(404)
        .json({ success: false, message: "School not found" });
    }

    const oldPublicId = school.imagePublicId;
    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer, "info");
      school.heroImage = uploadedImage.secure_url;
      school.imagePublicId = uploadedImage.public_id;

      uploadedPublicId = uploadedImage.public_id;
    }

    const {
      fullname,
      shortname,
      slogan,
      email,
      phone,
      location,
      establishYear,
      map,
    } = result.data;

    school.fullname = fullname;
    school.shortname = shortname;
    school.slogan = slogan;
    school.email = email;
    school.phone = phone;
    school.location = location;
    school.establishYear = establishYear;
    school.map = map;

    school.save();
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
    return res
      .status(200)
      .json({ success: true, message: "School info is updated" });
  } catch (error) {
    console.error(`Error while updating school info`);

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

export const getSchoolInfo = async (req: Request, res: Response) => {
  try {
    const school = await School.findOne();
    if (!school) {
      return res
        .status(404)
        .json({ success: false, message: "Unable to load school" });
    }

    return res.status(200).json({ success: true, school });
  } catch (error) {
    console.error(`Error while accessing school info : ${error}`);
    return res.json({ success: false, message: "Internal server error" });
  }
};
