import { configureStore } from "@reduxjs/toolkit";
import { Admin } from "./slice.jsx";
export const store = configureStore({
  reducer: {
    Admin,
  },
});
