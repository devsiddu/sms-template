import type { Request, Response } from "express";
import { schoolSchemaValidator } from "../validators/School.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import School from "../models/School.js";
import cloudinary from "../configs/cloudinary.js";

export const addSchoolInfo = async (req: Request, res: Response) => {
  let imagePublicId: string | undefined;
  try {
    const result = schoolSchemaValidator.safeParse(req.body);

    if (!result.success) {
      return res
        .status(400)
        .json({ success: false, message: "Validation Error" });
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

      image: uploadedImage.secure_url;
      imagePublicId: uploadedImage.public_id;
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
