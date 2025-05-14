import { selectThemeMode } from "@/app/app-slice"
import { useAppSelector } from "@/common/hooks"
import { getTheme } from "@/common/theme"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"
import Grid from "@mui/material/Grid2"
import TextField from "@mui/material/TextField"
import { SubmitHandler, useForm } from "react-hook-form"
import styles from "./Login.module.css"

type Inputs = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const themeMode = useAppSelector(selectThemeMode)
  console.log("Login render")

  const theme = getTheme(themeMode)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // } = useForm<Inputs>()
    //   опционально, можем передавать например те же дефолтные значения. Вообще не только их можно передавать, смотри доку
  } = useForm<Inputs>({ defaultValues: { email: "example@gmail.com", password: "12345", rememberMe: false } })

  // если например одно из полей required, а мы нажимаем кнопку отправки формы, то увидем в консоли объект с ошибкой
  console.log("errors:", errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset() // чтобы очистить поля после того как нажали submit. Если есть дефолтные значения, то заполнятся инпуты ими
    // но не сбрасывается rememberMe, с ним есть нюанс (с mui связано)
    console.log(data)
  }

  return (
    <Grid container justifyContent={"center"}>
      <FormControl>
        <FormLabel>
          <p>
            To login get registered
            <a
              style={{ color: theme.palette.primary.main, marginLeft: "5px" }}
              href="https://social-network.samuraijs.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
          <p>or use common test account credentials:</p>
          <p>
            <b>Email:</b> free@samuraijs.com
          </p>
          <p>
            <b>Password:</b> free
          </p>
        </FormLabel>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            {/*поля регистрируем через register. Значения вставляем те которые в type Inputs прописали*/}
            {/*<TextField label="Email" margin="normal" {...register("email")} />*/}
            {/*валидация через сам react-hook-form, на примере ниже, когда после email ставим запятую и передаём объект*/}
            {/*<TextField label="Email" margin="normal" {...register("email", { required: true })} />*/}
            {/*либо так. Плюс ещё добавили регулярку*/}
            <TextField
              label="Email"
              margin="normal"
              error={!!errors.email} // чтобы подсвечивался сам текстфилд
              {...register("email", {
                required: "email is required!!",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Incorrect email address",
                },
              })}
            />
            {/*на случай если есть ошибка и вывести на экране что email is required*/}
            {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            <TextField type="password" label="Password" margin="normal" {...register("password")} />
            <FormControlLabel label="Remember me" control={<Checkbox {...register("rememberMe")} />} />
            {/*обязательно type='submit'*/}
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </FormGroup>
        </form>
      </FormControl>
    </Grid>
  )
}

// import { selectThemeMode } from "@/app/app-slice"
// import { useAppSelector } from "@/common/hooks"
// import { getTheme } from "@/common/theme"
// import Button from "@mui/material/Button"
// import Checkbox from "@mui/material/Checkbox"
// import FormControl from "@mui/material/FormControl"
// import FormControlLabel from "@mui/material/FormControlLabel"
// import FormGroup from "@mui/material/FormGroup"
// import FormLabel from "@mui/material/FormLabel"
// import Grid from "@mui/material/Grid2"
// import TextField from "@mui/material/TextField"
// import { Controller, SubmitHandler, useForm } from "react-hook-form"
// import styles from "./Login.module.css"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { LoginForm, loginSchema } from "@/features/auth/lib/schemas"
//
// // type Inputs = {
// //   email: string
// //   password: string
// //   rememberMe: boolean
// // }
//
// export const Login = () => {
//   const themeMode = useAppSelector(selectThemeMode)
//
//   const theme = getTheme(themeMode)
//   // ниже где inputs там можем передавать дефолтные значения
//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm<LoginForm>({
//     defaultValues: { email: "", password: "123", rememberMe: false },
//     resolver: zodResolver(loginSchema),
//   })
//
//   const onSubmit: SubmitHandler<LoginForm> = (data) => {
//     console.log(data)
//     reset()
//   }
//
//   return (
//     <Grid container justifyContent={"center"}>
//       <FormControl>
//         <FormLabel>
//           <p>
//             To login get registered
//             <a
//               style={{ color: theme.palette.primary.main, marginLeft: "5px" }}
//               href="https://social-network.samuraijs.com"
//               target="_blank"
//               rel="noreferrer"
//             >
//               here
//             </a>
//           </p>
//           <p>or use common test account credentials:</p>
//           <p>
//             <b>Email:</b> free@samuraijs.com
//           </p>
//           <p>
//             <b>Password:</b> free
//           </p>
//         </FormLabel>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormGroup>
//             <TextField
//               label="Email"
//               margin="normal"
//               /*так как теперь зодовская валидация, то код ниже не нужен*/
//               /*{...register("email", {*/
//               /*  required: "email is required",*/
//               /*  // minLength: { value: 3, message: "the minimal length of email is 2 symbols" },*/
//               /*  pattern: {*/
//               /*    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,*/
//               /*    message: "Incorrect email address",*/
//               /*  },*/
//               /*})}*/
//               {...register("email")}
//               error={!!errors.email}
//             />
//             {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
//             <TextField type="password" label="Password" margin="normal" {...register("password")} />
//             <FormControlLabel
//               label="Remember me"
//               control={
//                 <Controller
//                   name="rememberMe"
//                   control={control}
//                   // в принципе 2 синтаксиса написания render
//                   // render={({ field }) => (
//                   //   <Checkbox onChange={(e) => field.onChange(e.target.checked)} checked={field.value} />
//                   // )}
//                   render={({ field: { value, ...rest } }) => <Checkbox {...rest} checked={value} />}
//                 />
//               }
//             />
//             <Button type="submit" variant="contained" color="primary">
//               Login
//             </Button>
//           </FormGroup>
//         </form>
//       </FormControl>
//     </Grid>
//   )
// }
