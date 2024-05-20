import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import mathsIcon from "../images/maths.jpeg";

const QuizesScreen = () => {
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade 1 Mathematics: Addition & Subtraction
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              All available quizes
            </h2>
          </div>
          <div className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'>
            <img
              src={mathsIcon}
              alt='Maths'
              className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
            />
            <span className='w-4/5'>
              <h2 className='text-indigo-500 text-2xl font-semibold'>Quiz 1</h2>
              <span className='mt-1 w-full flex items-center justify-between'>
                <h6 className='text-gray-600'>20 Questions</h6>
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
        </section>
      </section>
    </div>
  );
};

export default QuizesScreen;