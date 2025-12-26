import { z } from "zod";

export const truthSchema = z.object({
  text: z
    .string({
      required_error: "Text is required",
      invalid_type_error: "Text must be a string",
    })
    .min(5, "Text must be at least 5 characters long"),
});
