import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import mathsIcon from "../images/maths.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { listTopicQuizs } from "../redux/actions/gradeActions";

const QuizesScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const subjectId = params.subjectId ? Number(params.subjectId) : null;
  const gradeId = params.gradeId ? Number(params.gradeId) : null;
  const topicId = params.topicId ? Number(params.topicId) : null;

  const { topicQuizsData } = useSelector((state) => state.grade);

  useEffect(() => {
    if (topicId) {
      dispatch(listTopicQuizs(topicId));
    }
  }, [topicId]);
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade {gradeId} {topicQuizsData?.subject}: {topicQuizsData?.topic}
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              All available quizes ({topicQuizsData?.quiz_count})
            </h2>
          </div>
          <section className='flex flex-col gap-3'>
            {topicQuizsData?.quizzes?.map((quiz) => {
              return (
                <div
                  className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'
                  key={quiz.id}
                >
                  <img
                    src={mathsIcon}
                    alt={topicQuizsData?.topic}
                    className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
                  />
                  <span className='w-4/5'>
                    <h2 className='text-indigo-500 text-2xl font-semibold'>
                      Quiz {quiz.id}
                    </h2>
                    <span className='mt-1 w-full flex items-center justify-between'>
                      {quiz.question_count > 0 ? (
                        <h6 className='text-gray-600'>
                          {quiz.question_count} questions
                        </h6>
                      ) : (
                        <h6 className='text-red-300'>No questions</h6>
                      )}
                      <div className='flex gap-2 items-center'>
                        <button className='bg-blue-300 text-white px-2 py-1 rounded-full'>
                          0% Done
                        </button>
                        <button className='bg-green-500 text-white px-2 py-1 rounded-full'>
                          Score: 0%
                        </button>
                        <Link
                          to='/grade/1/subjects/1/topics/1/quizes/1'
                          className='bg-blue-500 text-white px-2 py-1 rounded-full'
                        >
                          Attempt
                        </Link>
                      </div>
                    </span>
                  </span>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </div>
  );
};

export default QuizesScreen;
