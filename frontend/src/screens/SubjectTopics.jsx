import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import mathsIcon from "../images/maths.jpeg"

const SubjectTopics = () => {
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      <section className='w-full flex justify-center items-center'>
        <section className='w-full md:w-3/5 flex flex-col'>
          <div className='mt-8'>
            <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
              Grade 1 Mathematics Topics
            </h1>
            <h2 className='text-lg font-semibold text-white mb-4'>
              All available topics and their quizes
            </h2>
          </div>
          <div className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'>
            <img
              src={mathsIcon}
              alt='Maths'
              className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
            />
            <span className='w-4/5'>
              <h2 className='text-indigo-500 text-2xl font-semibold'>
                Addition and Subtraction
              </h2>
              <span className='mt-1 w-full flex justify-between'>
                <h6 className='text-gray-600'>5 Quizes</h6>
                <button className='bg-indigo-500 text-white px-2 py-1 rounded'>
                  View Quizes
                </button>
              </span>
            </span>
          </div>
          <div className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'>
            <img
              src={mathsIcon}
              alt='Maths'
              className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
            />
            <span className='w-4/5'>
              <h2 className='text-indigo-500 text-2xl font-semibold'>
                Measurements
              </h2>
              <span className='mt-1 flex justify-between'>
                <h6 className='text-gray-600'>10 Quizes</h6>
                <button className='bg-indigo-500 text-white px-2 py-1 rounded'>
                  View Quizes
                </button>
              </span>
            </span>
          </div>
          <div className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'>
            <img
              src={mathsIcon}
              alt='Maths'
              className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
            />
            <span className='w-4/5'>
              <h2 className='text-indigo-500 text-2xl font-semibold'>
                Numbers
              </h2>
              <span className='mt-1 flex justify-between'>
                <h6 className='text-gray-600'>8 Quizes</h6>
                <button className='bg-indigo-500 text-white px-2 py-1 rounded'>
                  View Quizes
                </button>
              </span>
            </span>
          </div>
          <div className='md:w-3/4 bg-white rounded p-2 flex gap-5 items-center mb-2'>
            <img
              src={mathsIcon}
              alt='Maths'
              className='h-20 w-20 rounded-full border-2 border-indigo-300 object-cover'
            />
            <span className='w-4/5'>
              <h2 className='text-indigo-500 text-2xl font-semibold'>
                Time
              </h2>
              <span className='mt-1 flex justify-between'>
                <h6 className='text-gray-600'>11 Quizes</h6>
                <button className='bg-indigo-500 text-white px-2 py-1 rounded'>
                  View Quizes
                </button>
              </span>
            </span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SubjectTopics