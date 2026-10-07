import { z } from "zod";

export const createDreamSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100, "Your name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  title: z.string().trim().min(1, "A dream title is required").max(255, "Your title is too long"),
  dream_content: z.string().trim().min(1, "Tell us what you dreamed"),
  real_life_context: z.string().trim().min(1, "Add the real-life context for this dream"),
  dreamer_interpretation: z.string().trim().optional(),
  is_anonymous: z.boolean(),
});

export type CreateDreamInput = z.infer<typeof createDreamSchema>;
