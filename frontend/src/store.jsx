import { configureStore } from "@reduxjs/toolkit";
import { Admin, Session, Student } from "./slice.jsx";
export const store = configureStore({
  reducer: {
    Admin,
    Student,
    Session,
  },
});
