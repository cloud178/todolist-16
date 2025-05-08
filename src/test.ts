import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "мин кол-во символов: 8" }),
  rememberMe: z.boolean(),
})

console.log(loginSchema.parse({ email: "sdfg", password: "1", rememberMe: true }))
