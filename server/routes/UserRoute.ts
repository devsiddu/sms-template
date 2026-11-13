import express from "express";
import { createUser, updateUser } from "../controllers/UserController.js";

const userRoutes = express.Router();

userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);

export default userRoutes;
