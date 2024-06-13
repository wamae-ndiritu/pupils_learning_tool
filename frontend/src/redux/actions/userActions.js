import { BASE_URL } from "../../URL";
import {
  userActionFail,
  userActionStart,
  userLoginSuccess,
  userRegisterSuccess,
  clearUserState
} from "../slices/userSlices";
import axios from "redaxios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(userActionStart());

    await axios.post(`${BASE_URL}/users/register/`, userData);
    dispatch(userRegisterSuccess());
  } catch (err) {
    const errMsg = err?.data
      ? err.data.message
        ? err.data.message
        : err.data["email"] || err.data["username"]
      : err.statusText
      ? err.statusText
      : err.message;
    dispatch(userActionFail(errMsg));
  }
};


// Login user
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(userActionStart());

    const { data } = await axios.post(`${BASE_URL}/users/login/`, userData);

    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    console.log(err);
    const errMsg = err?.data
      ? err.data.message
        ? err.data.message
        : err.data.message
      : err.statusText
      ? err.statusText
      : err.message;
    dispatch(userActionFail(errMsg));
  }
};

// Logout user
export const logout = () => (dispatch) => {
  dispatch(clearUserState());
  localStorage.removeItem("userInfo");
};
