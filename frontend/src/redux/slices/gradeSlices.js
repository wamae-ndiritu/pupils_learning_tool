import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  gradesList: [],
  gradeSubjectsList: [],
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
    },
    getGradeSubjectsSuccess: (state, action) => {
      state.loading = false;
      state.gradeSubjectsList = action.payload;
    },
  },
});

export const {
    gradeActionStart,
    gradeActionFail,
    clearGradeState,
    getGradesSuccess,
    getGradeSubjectsSuccess
} = gradeSlice.actions;

export default gradeSlice.reducer;
