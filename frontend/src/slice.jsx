import { createSlice } from "@reduxjs/toolkit";
import { admin_data } from "./Mock_data";
const assinment = createSlice({
  name: "Ass",
  initialState: { admin_data, fornew: [] },
  reducers: {
    fornew: (state, { payload }) => {
      state.fornew = payload;
    },
  },
});
export const { fornew } = assinment.actions;
export const Ass = assinment.reducer;
