import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  gradesList: [],
  error: false,
};

export const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    gradeActionStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    gradeActionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearGradeState: (state) => {
      state.error = null;
    },
    getGradesSuccess: (state, action) => {
        state.loading = false;
        state.gradesList = action.payload;
    }
  },
});

export const {
    gradeActionStart,
    gradeActionFail,
    clearGradeState,
    getGradesSuccess
} = gradeSlice.actions;

export default gradeSlice.reducer;
