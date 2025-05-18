import { z } from "zod"

export const loginSchema = z.object({
  // email: z.string().min(5, { message: "email must contain at least 5 symbols" }).email(),
  email: z
    .string()
    .min(1, { message: "email is required!!" })
    .email({ message: "email must be a valid email address" })
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  password: z
    .string()
    .min(10, { message: "мин кол-во символов: 10" })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,}$/, { message: "пароль не соответствует всем требованиям" }),
  rememberMe: z.boolean(),
})

// export type LoginForm = z.infer<typeof loginSchema>
export type Inputs = z.infer<typeof loginSchema>
