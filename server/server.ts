import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import newsRoute from "./routes/NewsRoute.js";
import galleryRoutes from "./routes/GalleyRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
await connectDB();

const port = process.env.PORT || 3000;

// Routes

app.use("/api/news", newsRoute);
app.use("/api/gallery", galleryRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
