import type { RequestStatus } from "@/common/types"
import { createSlice } from "@reduxjs/toolkit"
import { Nullable } from "@/features/todolists/api/tasksApi.types.ts"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: "light" as ThemeMode,
    status: "idle" as RequestStatus,
    error: null as Nullable,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectAppStatus: (state) => state.status,
    selectAppError: (state) => state.error,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
    }),
    setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status
    }),
    setAppErrorAC: create.reducer<{ error: Nullable }>((state, action) => {
      state.error = action.payload.error
    }),
  }),
})

export const { selectThemeMode, selectAppStatus, selectAppError } = appSlice.selectors
export const { changeThemeModeAC, setAppStatusAC, setAppErrorAC } = appSlice.actions
export const appReducer = appSlice.reducer

export type ThemeMode = "dark" | "light"
