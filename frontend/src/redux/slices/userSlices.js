import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  success: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userActionStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    userRegisterSuccess: (state) => {
      state.loading = false,
      state.success = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const { userActionStart, userActionFail, userRegisterSuccess, userLoginSuccess } = userSlice.actions;

export default userSlice.reducer;
