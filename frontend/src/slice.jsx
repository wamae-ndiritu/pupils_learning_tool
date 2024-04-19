import { createSlice } from "@reduxjs/toolkit";
import { admin_data } from "./Mock_data";
const admin = createSlice({
  name: "Admin",
  initialState: { admin_data, fornew: [] },
  reducers: {
    fornew: (state, { payload }) => {
      state.fornew = payload;
    },
    update: (state, { payload }) => {
      state.admin_data = payload;
    },
  },
});
const student = createSlice({
  name: "student",
  initialState: { admin_data, fornew: [] },
  reducers: {
    fornew: (state, { payload }) => {
      state.fornew = payload;
    },
  },
});
export const { fornew, update } = admin.actions;
export const Admin = admin.reducer;
