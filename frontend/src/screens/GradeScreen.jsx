import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MathImg from "../images/maths.jpeg";
import ScienceImg from "../images/science.jpeg";
import EnglishImg from "../images/english.jpeg";
import KiswahiliImg from "../images/kiswahili.jpeg";
import SocialStudiesImg from "../images/social-studies.jpeg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listGradesSubjects } from "../redux/actions/gradeActions";

const GradeScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const gradeId = params.id ? Number(params.id) : null;

  const {gradeSubjectsList} = useSelector((state) => state.grade);

  useEffect(() => {
    if (gradeId){
      dispatch(listGradesSubjects(gradeId));
    }
  }, [gradeId])

  console.log(gradeSubjectsList)
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
        {
          gradeSubjectsList.map((subject) => {
            return (
              <div className='col-span-1 bg-white p-1 shadow' key={subject.id}>
                <img
                  src={MathImg}
                  alt={subject.title}
                  className='img-fluid w-full h-32 object-cover border'
                />
                <div className='w-full px-4 my-2'>
                  <h2>{subject.title}</h2>
                  <p className='text-gray-600'>20 Topics</p>
                  <button className='bg-indigo-700 text-white px-4 py-1 h-8 rounded w-full my-2 relative'>
                    <Link
                      to={`/grade/${subject.grade}/subjects/${subject.id}/topics`}
                      className='absolute top-0 bottom-0 left-0 right-0'
                    >
                      View Topics
                    </Link>
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default GradeScreen;
