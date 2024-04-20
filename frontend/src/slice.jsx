import { createSlice } from "@reduxjs/toolkit";
import { admin_data } from "./Mock_data";
const admin = createSlice({
  name: "Admin",
  initialState: {
    admin_data,
    fornew: undefined,
    edit: undefined,
  },
  reducers: {
    fornew: (state, { payload }) => {
      state.fornew = payload;
    },
    edit: (state, { payload }) => {
      state.edit = payload;
    },
    update: (state, { payload }) => {
      state.admin_data = payload;
    },
    newass: (state, { payload }) => {
      const { assignment, val, l, present } = payload;
      if (present[val[0]]) {
        if (present[val[0]][val[1]]) {
          if (present[val[0]][val[1]][val[2]]) {
            state.admin_data[val[0]][val[1]][val[2]][`quiz${l && 1}`] = [
              ...assignment[val[0]][val[1]][val[2]].quiz,
            ];
          } else {
            state.admin_data[val[0]][val[1]][
              Object.keys(assignment[val[0]][val[1]])[0]
            ] = { ...assignment[val[0]][val[1]][val[2]] };
          }
        } else {
          state.admin_data[val[0]][Object.keys(assignment[val[0]])[0]] = {
            ...assignment[val[0]][val[1]],
          };
        }
      } else {
        state.admin_data[Object.keys(assignment)[0]] = {
          ...assignment[val[0]],
        };
      }
    },
  },
});
const stude = createSlice({
  name: "student",
  initialState: { grade: "Grade4" },
  reducers: {
    fornew: (state, { payload }) => {
      state.fornew = payload;
    },
  },
});
const session = createSlice({
  name: "session",
  initialState: { isadmin: false, logged: false },
  reducers: {
    login: (state, { payload }) => {
      state.isadmin = payload.isadmin;
      state.logged = payload.logged;
    },
    logout: (state) => {
      state.isadmin = false;
      state.logged = false;
    },
  },
});
export const { fornew, update, newass, edit } = admin.actions;
export const {} = stude.actions;
export const { login, logout } = session.actions;
export const Admin = admin.reducer;
export const Student = stude.reducer;
export const Session = session.reducer;
