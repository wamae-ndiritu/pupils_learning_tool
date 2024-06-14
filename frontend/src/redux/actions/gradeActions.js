import { BASE_URL } from "../../URL";
import { getAttemptsSuccess, getGradeSubjectsSuccess, getGradesSuccess, getQuizDataSuccess, getSubjectTopicsSuccess, getTopicQuizsSuccess, gradeActionFail, gradeActionStart, reviewQuizSuccess, submitQuizSuccess } from "../slices/gradeSlices";
import axios from "redaxios";
import { logout } from "./userActions";

export const listGradesClasses= () => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/grades/`, config);
    dispatch(getGradesSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};


export const listGradesSubjects = (grade_no) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/grades/subjects/${grade_no}/`, config);
    dispatch(getGradeSubjectsSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};

export const listSubjectTopics = (subject_id) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/subjects/topics/${subject_id}/`,
      config
    );
    dispatch(getSubjectTopicsSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};


export const listTopicQuizs = (topic_id) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/topics/quizzes/${topic_id}/`,
      config
    );
    dispatch(getTopicQuizsSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};

export const getQuizInfo = (quiz_id) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/quizzes/questions/${quiz_id}/`,
      config
    );
    dispatch(getQuizDataSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};

export const submitQuiz = (quizId, answers) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };
    const {data} = await axios.post(`${BASE_URL}/quizzes/${quizId}/submit/`, { answers }, config);
    dispatch(submitQuizSuccess(data))
  } catch (err) {
    console.log(err)
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail || err.data?.error
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};

export const reviewQuiz = (quizId) => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/quizzes/${quizId}/review/`,
      config
    );
    dispatch(reviewQuizSuccess(data));
  } catch (err) {
    console.log(err);
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail || err.data?.error
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};

export const listQuizAttempts = () => async (dispatch, getState) => {
  try {
    dispatch(gradeActionStart());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token?.access}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${BASE_URL}/quizzes/attempts/`,
      config
    );
    dispatch(getAttemptsSuccess(data));
  } catch (err) {
    const errMsg =
      err?.data && err?.data?.length
        ? err.data[0]?.message
        : err?.data
        ? err.data?.message || err.data?.detail || err.data?.error
        : err.statusText;
    if (
      errMsg === "Authentication credentials were not provided." ||
      errMsg === "Given token not valid for any token type"
    ) {
      dispatch(logout());
      dispatch(gradeActionFail("Your session has expired! Login again..."));
    } else {
      dispatch(gradeActionFail(errMsg));
    }
  }
};