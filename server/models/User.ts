import mongoose from "mongoose";
import type { userScheme } from "../validators/User.js";

const userSchema = new mongoose.Schema<userScheme>({
  name: {
    type: String,
    required: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 12,
  },
  role: {
    type: String,
    enum: ["TEACHER", "PRINCIPAL"],
    default: "TEACHER",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
