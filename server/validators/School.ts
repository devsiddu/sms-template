import { z } from "zod";

export const schoolSchemaValidator = z.object({
  fullname: z.string().min(10, "Full name is required"),
  shortname: z.string().min(5, "Short name is required"),
  slogan: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  location: z.string().min(10, "Location is required"),
  establishYear: z.string().min(4, "Year is required").max(4),
  heroImage: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  imagePublicId: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  phone: z.string().min(10, "Phone is required"),
  email: z.email(),
  map: z.string().min(20, "Map link is required"),
});

export type schoolSchema = z.infer<typeof schoolSchemaValidator>;
