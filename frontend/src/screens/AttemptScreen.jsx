import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listQuizAttempts,
} from "../redux/actions/gradeActions";

const AttemptScreen = () => {
  const dispatch = useDispatch();

  const { attempts } = useSelector((state) => state.grade);


  useEffect(() => {
    dispatch(listQuizAttempts());
  }, []);
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='my-4 text-3xl capitalize text-white font-semibold'>
              My Quizzes
            </h1>
          </div>
          <section className='flex flex-col gap-3'>
            {attempts?.map((attempt) => {
              return (
                <div
                  className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'
                  key={attempt?.attempt_info?.id}
                >
                  <span className='w-4/5'>
                    <h2 className='text-indigo-500 text-2xl font-semibold'>
                      Quiz {attempt?.quiz_info.id}
                    </h2>
                    <span className='mt-1 w-full flex items-center justify-between'>
                      {attempt?.quiz_info.question_count > 0 ? (
                        <h6 className='text-gray-600'>
                          {attempt?.quiz_info.question_count} questions
                        </h6>
                      ) : (
                        <h6 className='text-red-300'>No questions</h6>
                      )}
                      <div className='flex gap-2 items-center'>
                        <button className='bg-green-500 text-white px-2 py-1 rounded-full'>
                          Score: {attempt?.attempt_info?.score}%
                        </button>
                        <Link
                          to={`/quizzes/${attempt?.quiz_info?.id}/review`}
                          className='bg-blue-500 text-white px-2 py-1 rounded-full'
                        >
                          Review
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

export default AttemptScreen;
