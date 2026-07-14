import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(4, "Full name must be at least 4 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),

  company: z
    .string()
    .optional(),

  services: z
    .string()
    .optional(),

  budget: z
    .string()
    .optional(),

  timeline: z
    .string()
    .optional(),

  message: z
    .string()
    .min(15, "Please provide more details about your project."),
});

export type ContactFormData = z.infer<typeof contactSchema>;