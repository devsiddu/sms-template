
import { z } from "zod";

export const NEWS_CATEGORIES = [
  "Events",
  "Achievements",
  "Announcements",
  "Activities",
  "Academics",
] as const;

export const newsContentSchema = z.object({
  heading: z
    .string()
    .trim()
    .min(1, "Section heading is required")
    .max(150),

  paragraphs: z
    .array(
      z.string()
        .trim()
        .min(1, "Paragraph cannot be empty")
    )
    .min(1, "At least one paragraph is required"),
});

export const createNewsSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must contain at least 5 characters")
    .max(150),

  excerpt: z
    .string()
    .trim()
    .min(10, "Excerpt must contain at least 10 characters")
    .max(300),

  category: z.enum(NEWS_CATEGORIES),

  author: z
    .string()
    .trim()
    .min(2, "Author name is required")
    .max(100),

  content: z
    .array(newsContentSchema)
    .min(1, "At least one content section is required"),

  featured: z.boolean().default(false),
});

export type CreateNewsInput = z.infer<typeof createNewsSchema>;
