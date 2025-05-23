import { Main } from "@/app/Main"
import { Route, Routes } from "react-router"
import { Login } from "@/features/auth/ui/Login/Login.tsx"
import { PageNotFound } from "@/common/components"

export const Path = {
  Main: "/",
  Login: "/login",
  NotFound: "/*",
} as const

export const Routing = () => {
  return (
    <Routes>
      {/*2 способа одинаково достучаться до коренного слеша, через индекс и через Path*/}
      {/*<Route index element={<Main />} />*/}
      <Route path={Path.Main} element={<Main />} />
      <Route path={Path.Login} element={<Login />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  )
}
