import mongoose, { Schema } from "mongoose";

type NewsCategory =
  | "Events"
  | "Achievements"
  | "Announcements"
  | "Activities"
  | "Academics";

interface ContentType {
  heading: string;
  paragraphs: string[];
}

interface INews {
  _id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  image?: string | undefined;
  imagePublicId?: string | undefined;
  author: string;
  content: ContentType[];
  featured?: boolean;
}

const ContentSchema = new Schema<ContentType>(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    paragraphs: {
      type: [String],
      required: true,
      validate: {
        validator: (value: string[]) => value.length > 0,
        message: "At least one paragraph is required.",
      },
    },
  },
  { _id: false },
);

const NewsSchema = new Schema<INews>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 400,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Events",
        "Achievements",
        "Announcements",
        "Activities",
        "Academics",
      ],
      default: "Events",
    },

    image: {
      type: String,
    },

    imagePublicId: {
      type: String,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: [ContentSchema],
      required: true,
      validate: {
        validator: (value: ContentType[]) => value.length > 0,
        message: "At least one content section is required.",
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const News = mongoose.model<INews>("News", NewsSchema);

export default News;
