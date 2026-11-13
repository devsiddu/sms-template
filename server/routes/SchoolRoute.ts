import express from "express";
import {
  addSchoolInfo,
  updateSchoolInfo,
} from "../controllers/SchoolController.js";
import upload from "../middlewares/upload.js";
const schoolRouter = express.Router();

schoolRouter.post("/", upload.single("image"), addSchoolInfo);
schoolRouter.put("/:id", upload.single("image"), updateSchoolInfo);

export default schoolRouter;
