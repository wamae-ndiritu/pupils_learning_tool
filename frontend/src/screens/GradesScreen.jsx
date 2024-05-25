import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const GradesScreen = () => {
  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      {/* Available Grades/Classes */}
      <div className='container mx-auto mt-8'>
        <h1 className='mt-4 text-3xl capitalize text-white font-semibold'>
          All Grades
        </h1>
        <h2 className='text-lg font-semibold text-white mb-4'>
          Available Grades/Classes
        </h2>
        {/* Grade/Class Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <Link
                to='/grade/1/subjects'
                className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
              >
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 2</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                8 Subjects
              </div>
              <Link
                to='/grade/1/subjects'
                className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
              >
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 3</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                8 Subjects
              </div>
              <Link
                to='/grade/1/subjects'
                className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
              >
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 4</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                8 Subjects
              </div>
              <Link
                to='/grade/1/subjects'
                className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
              >
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 5</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                10 Subjects
              </div>
              <Link
                to='/grade/1/subjects'
                className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
              >
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradesScreen