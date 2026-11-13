import z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(12, "Password must be at least 12 characters"),

  role: z.enum(["PRINCIPAL", "TEACHER"]),

  isActive: z.boolean().optional(),
});

export const updateUserSchema = z
  .object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    role: z.enum(["PRINCIPAL", "TEACHER"]).optional(),
    isActive: z.boolean().optional(),
  })
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required for update",
  });

export type userScheme = z.infer<typeof createUserSchema>;
