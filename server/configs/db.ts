import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is missing");
    }

    console.log("Connecting to MongoDB Atlas...");

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");
  } catch (error: any) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
