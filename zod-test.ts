import { z } from "zod"

// !!todo ZOD  попадает в бандл финальный на проде!! Но его Валера говорил можно его не включать в финальный бандл

type _Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, { message: "Invalid email address." }) // {message: 'Invalid email address.'} - этот объект опционален
    .min(3, { message: "min 3 symbols" }), // {message: 'min 3 symbols'} - этот объект опционален
  password: z.string(),
  rememberMe: z.boolean(),
})

type Inputs = z.infer<typeof loginSchema>

// const a: Inputs = {
//   email: 12 // ругается
//   email: 'example@gmail.com' // всё ок
// ...
// }

// console.log(loginSchema.parse(123)) // покажет ошибку
// parse - показывает работает ли схема, т.е. парсит данные
console.log(loginSchema.parse({ email: "23", password: "123", rememberMe: 1 }))

// creating a schema for strings
const mySchema = z.string()

// console.log(mySchema.parse("some string"))
// console.log(mySchema.parse(12))

// parsing
// mySchema.parse("some string") // => "some string"
// mySchema.parse(12) // => throws ZodError
