/*  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string; */

import { z } from "zod";

export const gallerySchemaValidator = z.object({
  title: z.string().trim().min(10, "Title is required").max(150),
  category: z.string().trim().min(5, "Category is required").max(50),
  description: z.string().trim().min(5, "Description is required").max(50),
  image: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  imagePublicId: z
    .string()
    .optional()
    .transform((val) => val || undefined),
});

export type gallerySchema = z.infer<typeof gallerySchemaValidator>;
