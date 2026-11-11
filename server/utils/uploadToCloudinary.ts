import cloudinary from "../configs/cloudinary.js";
import { Readable } from "stream";

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

const uploadToCloudinary = (
  buffer: Buffer,
  folder: string,
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: `school/${folder}`,
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);

        if (!result) {
          return reject(new Error("Cloudinary upload failed"));
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      },
    );

    Readable.from(buffer).pipe(stream);
  });
};

export default uploadToCloudinary;
