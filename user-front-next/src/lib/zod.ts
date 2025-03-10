import { z, ZodType } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const SignupSchema: ZodType = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});
