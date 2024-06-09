import { BASE_URL } from "../../URL";
import {
  userActionFail,
  userActionStart,
  userLoginSuccess,
  userRegisterSuccess,
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
