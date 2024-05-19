import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import mathsIcon from "../images/maths.jpeg";

const QuizScreen = () => {
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade 1 Mathematics: Addition & Subtraction: Quiz 1
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              Attempt all the questions
            </h2>
          </div>
          <div className='w-full bg-white rounded p-4 flex flex-col gap-5 items-center mb-2'>
            <div className='w-full'>
              <h6 className='text-lg text-gray-600 font-normal'>
                1. What is 2 + 2?
              </h6>
              <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <h6 className='text-lg text-gray-600 font-normal'>
                1. What is 2 + 2?
              </h6>
              <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <h6 className='text-lg text-gray-600 font-normal'>
                1. What is 2 + 2?
              </h6>
              <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <h6 className='text-lg text-gray-600 font-normal'>
                1. What is 2 + 2?
              </h6>
              <ul className='w-full bg-gray-100 flex flex-wrap gap-5 text-gray-600 text-lg'>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
                <li className='flex items-start gap-1'>
                  <input type='checkbox' className='h-6 w-6' id='option_1_1' />
                  <label htmlFor='option_1_1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum modi cupiditate recusandae officia error officiis
                    laudantium et impedit est voluptate dolorum eveniet
                    temporibus veniam quidem molestias, odio itaque assumenda
                    eum?
                  </label>
                </li>
              </ul>
            </div>
            <div className='w-full my-3 flex items-center justify-between'>
              <Link
                to='/grade/1/subjects/1/topics/1/quizes'
                className='bg-gray-900 text-white px-2 py-1 rounded'
              >
                Go Back to Quizes
              </Link>
              <div className='flex gap-5'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded'>
                  Save to Continue Later
                </button>
                <button className='bg-green-500 text-white px-2 py-1 rounded'>
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
