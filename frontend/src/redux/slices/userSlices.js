import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  userInfo: userInfoFromLocalStorage,
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
    }, 
    clearUserState: (state) => {
      state.userInfo = null;
    }
  },
});

export const { userActionStart, userActionFail, userRegisterSuccess, userLoginSuccess, clearUserState } = userSlice.actions;

export default userSlice.reducer;
