import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reviewQuiz } from "../redux/actions/gradeActions";

const QuizReviewScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const quizId = params.quizId ? Number(params.quizId) : null;

  const { reviewData } = useSelector((state) => state.grade);

  useEffect(() => {
    if (quizId) {
      dispatch(reviewQuiz(quizId));
    }
  }, [dispatch, quizId]);

  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade {reviewData?.grade} {reviewData?.subject}:{" "}
              {reviewData?.topic}: Quiz {quizId} Review
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              Review your answers
            </h2>
          </div>
          <div className='w-full bg-white rounded p-4 flex flex-col gap-5 items-center mb-2'>
            <ul className='w-full list-decimal pl-4'>
              {reviewData?.answers?.map((answer, index) => (
                <li className='my-2' key={index}>
                  <h6 className='text-lg text-gray-600 font-normal py-1'>
                    {answer.question}
                  </h6>
                  <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                    <li
                      className={`flex items-start gap-1 ${
                        answer.is_correct ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <input
                        type='radio'
                        className='h-6 w-6'
                        checked
                        readOnly
                      />
                      <label htmlFor={`answer_${answer.selected_answer}`}>
                        {answer.selected_answer}
                      </label>
                    </li>
                    {!answer.is_correct && (
                      <li className='flex items-start gap-1 text-green-500'>
                        <input
                          type='radio'
                          className='h-6 w-6'
                          checked
                          readOnly
                        />
                        <label
                          htmlFor={`correct_answer_${answer.correct_answer}`}
                        >
                          {answer.correct_answer}
                        </label>
                      </li>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
            <div className='w-full my-3 flex items-center justify-between'>
              <Link
                to='/quizzes/my-attempts'
                className='bg-gray-900 text-white px-2 py-1 rounded'
              >
                Back to My Attempts
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default QuizReviewScreen;
