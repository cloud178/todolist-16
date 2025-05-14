import { z } from "zod"

export const loginSchema = z.object({
  // email: z.string().min(5, { message: "email must contain at least 5 symbols" }).email(),
  email: z
    .string()
    .min(5, { message: "email must contain at least 5 symbols" })
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  password: z.string().min(8, { message: "мин кол-во символов: 8" }),
  rememberMe: z.boolean(),
})

export type LoginForm = z.infer<typeof loginSchema>
