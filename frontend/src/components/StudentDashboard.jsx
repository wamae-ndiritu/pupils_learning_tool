import { Link } from "react-router-dom";
import profileAvatar from "../images/profile-avatar.png";
import Navbar from "./Navbar";

const StudentDashboard = () => {
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
            <h2 className='text-lg font-semibold mb-2'>John Doe</h2>
            <p>johndoe@example.com</p>
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
          <div className='col-span-1 bg-indigo-700 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
            <div className='flex justify-between items-center'>
              <div className='bg-white text-bg-indigo-500 px-4 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <Link to='/grade/1/subjects' className='bg-indigo-900 text-white px-4 py-1 rounded-full inline-block'>
                View Subjects
              </Link>
            </div>
            <p className='text-white mt-2'>
              An elementary level in your education.
            </p>
          </div>
          <div className='col-span-1'>
            <div className='bg-indigo-700 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
              <div className='bg-white text-bg-indigo-500 px-2 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <p className='text-white mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='bg-indigo-700 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
              <div className='bg-white text-bg-indigo-500 px-2 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <p className='text-white mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='bg-indigo-700 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
              <div className='bg-white text-bg-indigo-500 px-2 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <p className='text-white mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='bg-indigo-700 p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-white mb-2'>Grade 1</h3>
              <div className='bg-white text-bg-indigo-500 px-2 py-1 rounded-full inline-block'>
                5 Subjects
              </div>
              <p className='text-white mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
