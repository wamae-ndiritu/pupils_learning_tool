import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import mathsIcon from "../images/maths.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getQuizInfo, submitQuiz } from "../redux/actions/gradeActions";

const QuizScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const gradeId = params.gradeId ? Number(params.gradeId) : null;
  const quizId = params.quizId ? Number(params.quizId) : null;

  const { loading, error, quizData, quizScores } = useSelector((state) => state.grade);

   const [answers, setAnswers] = useState({});

    const handleChange = (questionId, answerId) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answerId,
      }));
    };

     const handleSubmit = () => {
      //  if (quizAttempted) {
      //    alert("You have already attempted this quiz.");
      //    return;
      //  }
       dispatch(submitQuiz(quizId, answers));
     };

  useEffect(() => {
    if (quizId) {
      dispatch(getQuizInfo(quizId));
    }
  }, [quizId]);

  useEffect(() => {
    if (quizScores?.score){
      navigate('/quizzes/my-attempts')
    }
  })

  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade {gradeId} {quizData?.subject}: {quizId?.topic}: Quiz{" "}
              {quizData?.quiz}
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              Attempt all the questions
            </h2>
            {quizScores?.score && <h6 className="text-center py-1 text-green-600">You have scored {quizScores.score}%</h6>}
          </div>
          <div className='w-full bg-white rounded p-4 flex flex-col gap-5 items-center mb-2'>
            {loading && (
              <p className='text-center text-xl text-gray-600 py-2'>Loading...</p>
            )}
            {error && <p className='text-center text-xl text-red-400 py-1'>{error}</p>}
            <ul className='w-full list-decimal pl-4'>
              {quizData?.questions?.map((question) => {
                return (
                  <li className='my-2' key={question.id}>
                    <h6 className='text-lg text-gray-600 font-normal py-1'>
                      {question.content}
                    </h6>
                    <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                      {question?.answers?.map((answer) => (
                        <li className='flex items-start gap-1' key={answer.id}>
                          <input
                            type='radio'
                            name={`question_${question.id}`}
                            value={answer.id}
                            onChange={() =>
                              handleChange(question.id, answer.id)
                            }
                            className='h-6 w-6'
                          />
                          <label htmlFor={`answer_${answer.id}`}>
                            {answer.content}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <div className='w-full my-3 flex items-center justify-end'>
              <div className='flex gap-5'>
                <button
                  className='bg-blue-500 text-white px-2 py-1 rounded'
                  onClick={() => handleSubmit()}
                >
                  Submit & Finish
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default QuizScreen;
