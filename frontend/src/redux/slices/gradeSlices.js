import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  gradesList: [],
  gradeSubjectsList: [],
  subjectTopicsData: {},
  topicQuizsData: {},
  quizData: {},
  quizScores: {},
  attempts: [],
  reviewData: {},
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
    getSubjectTopicsSuccess: (state, action) => {
      state.loading = false;
      state.subjectTopicsData = action.payload;
    },
    getTopicQuizsSuccess: (state, action) => {
      state.loading = false;
      state.topicQuizsData = action.payload;
    },
    getQuizDataSuccess: (state, action) => {
      state.loading = false;
      state.quizData = action.payload;
    },
    submitQuizSuccess: (state, action) => {
      state.loading = false;
      state.quizScores = action.payload;
    },
    getAttemptsSuccess: (state, action) => {
      state.loading = false;
      state.attempts = action.payload;
    },
    reviewQuizSuccess: (state, action) => {
      state.loading = false;
      state.reviewData = action.payload;
    }
  },
});

export const {
    gradeActionStart,
    gradeActionFail,
    clearGradeState,
    getGradesSuccess,
    getGradeSubjectsSuccess,
    getSubjectTopicsSuccess,
    getTopicQuizsSuccess,
    getQuizDataSuccess,
    submitQuizSuccess,
    getAttemptsSuccess,
    reviewQuizSuccess
} = gradeSlice.actions;

export default gradeSlice.reducer;
