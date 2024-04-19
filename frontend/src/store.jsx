import { configureStore } from "@reduxjs/toolkit";
import { Ass } from "./slice.jsx";
export const store = configureStore({
  reducer: {
    Ass,
  },
});
