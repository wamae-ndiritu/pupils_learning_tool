import { Link } from "react-router-dom";
import profileAvatar from "../images/profile-avatar.png";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listGradesClasses } from "../redux/actions/gradeActions";


const StudentDashboard = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.user);
  const {gradesList} = useSelector((state) => state.grade);

  useEffect(() => {
    dispatch(listGradesClasses());
  }, [])

  return (
    <div className='bg-indigo-300 min-h-screen flex-grow-1'>
      <Navbar />
      {/* Learning Progress Widget */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-8 mt-8'>
        <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
          {/* First row for profile avatar */}
          <div className='flex justify-center items-center'>
            {/* Profile Avatar */}
            <img
              src={profileAvatar}
              alt='Profile Avatar'
              className='w-16 h-16 rounded-full'
            />
          </div>
          {/* Second row for student's information */}
          <div className='text-white'>
            <h2 className='text-xl font-semibold mb-2 capitalize'>
              {userInfo?.user?.full_name || userInfo?.user?.username}
            </h2>
            <p>{userInfo?.user?.email}</p>
          </div>
        </div>
        <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
          <h2 className='text-lg font-semibold text-white mb-4'>
            Learning Progress
          </h2>
          {/* Progress Bar or any other visualization of progress */}
          <div className='bg-white h-4 w-full rounded-full'></div>
          {/* Additional information about progress */}
          <p className='text-white mt-2'>
            You've completed 50% of your learning goals.
          </p>
        </div>
        <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
          <h2 className='text-lg font-semibold text-white mb-4'>
            Learning Progress
          </h2>
          {/* Progress Bar or any other visualization of progress */}
          <div className='bg-white h-4 w-full rounded-full'></div>
          {/* Additional information about progress */}
          <p className='text-white mt-2'>
            You've completed 50% of your learning goals.
          </p>
        </div>
      </div>

      {/* Available Grades/Classes */}
      <div className='container mx-auto mt-8'>
        <h2 className='text-lg font-semibold text-white mb-4'>
          Available Grades/Classes
        </h2>
        {/* Grade/Class Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
         {
          gradesList.map((grade) => {
            return (
              <div
                className='col-span-1 bg-indigo-700 p-6 rounded-lg'
                key={grade.grade_no}
              >
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Grade {grade.grade_no}
                </h3>
                <div className='flex justify-between items-center'>
                  {grade.subject_count > 0 ? (
                    <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                      {grade.subject_count} Subjects
                    </div>
                  ) : (
                    <div className='bg-white text-red-300 px-4 py-1 rounded-full inline-block'>
                      No Subjects
                    </div>
                  )}
                  <Link
                    to={`/grade/${grade.grade_no}/subjects`}
                    className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'
                  >
                    View Subjects
                  </Link>
                </div>
                <p className='text-white mt-2'>
                  An elementary level in your education.
                </p>
              </div>
            );
          })
         }
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
