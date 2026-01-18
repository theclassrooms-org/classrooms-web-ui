import { z } from "zod";

export const createClassSchema = z
  .object({
    name: z.string().min(3, "Class name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    visibility: z.enum(["PUBLIC", "PRIVATE"]).optional(),
  })
  .refine((data) => data.visibility !== undefined, {
    path: ["visibility"],
    message: "Please select visibility",
  });

export type CreateClassFormData = z.infer<typeof createClassSchema>;
