import React from "react";
import Navbar from "../components/Navbar";
import MathImg from "../images/maths.jpeg";
import ScienceImg from "../images/science.jpeg";
import EnglishImg from "../images/english.jpeg";
import KiswahiliImg from "../images/kiswahili.jpeg";
import SocialStudiesImg from "../images/social-studies.jpeg";
import { Link } from "react-router-dom";

const GradeScreen = () => {
  return (
    <div className='bg-gray-200 flex-grow-1'>
      <Navbar />
      <h1 className='mx-8 mt-4 text-3xl capitalize text-indigo-900 font-semibold'>
        Grade 1
      </h1>
      <p className='mx-8 text-indigo-900 text-lg'>
        View all available subjects
      </p>
      <div className='grid grid-cols-2 grid-cols-5 gap-5 mx-8 py-6'>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={MathImg}
            alt='Mathematics'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>MATHEMATICS</h2>
            <p className='text-gray-600'>20 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={EnglishImg}
            alt='English'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>English</h2>
            <p className='text-gray-600'>10 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={KiswahiliImg}
            alt='Kiswahili'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>Kiswahili</h2>
            <p className='text-gray-600'>8 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={ScienceImg}
            alt='Science'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>Science</h2>
            <p className='text-gray-600'>32 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={SocialStudiesImg}
            alt='Social Studies'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>Social Studies</h2>
            <p className='text-gray-600'>15 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={ScienceImg}
            alt='Science'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>Science</h2>
            <p className='text-gray-600'>32 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-1 bg-white p-1 shadow'>
          <img
            src={ScienceImg}
            alt='Science'
            className='img-fluid w-full h-32 object-cover border'
          />
          <div className='w-full px-4 my-2'>
            <h2>Science</h2>
            <p className='text-gray-600'>32 Topics</p>
            <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
              <Link
                to='/grade/1/subjects/1/topics/1'
                className='absolute top-0 bottom-0 left-0 right-0'
              >
                View Topics
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeScreen;
