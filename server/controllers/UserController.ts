import type { Request, Response } from "express";
import { updateUserSchema, createUserSchema } from "../validators/User.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export const createUser = async (req: Request, res: Response) => {
  try {
    const result = createUserSchema.safeParse(req.body);

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

    const { name, email, password, role, isActive } = result.data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])\S{12,}$/;

    if (!regex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 12 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error while creating new user:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = updateUserSchema.safeParse(req.body);

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
        message: "Invalid user ID",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { name, email, role, isActive } = result.data;

    // Check email only if it is being changed
    if (email && email !== user.email) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: id },
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
    }

    // Update only provided fields
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (role !== undefined) user.role = role;
    if (isActive !== undefined) user.isActive = isActive;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error while updating user:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const resetUserPassword = async (req:Request,res:Response) => {
  try {
    
  } catch (error) {
    
  }
}