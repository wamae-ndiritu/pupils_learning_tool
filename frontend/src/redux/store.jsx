import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
import gradeReducer from "./slices/gradeSlices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    grade: gradeReducer,
  },
})
