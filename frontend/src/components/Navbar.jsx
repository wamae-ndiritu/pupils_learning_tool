import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  return (
    <nav className='bg-indigo-600 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-bold'>
          eSoma
        </Link>
        <ul className='flex items-center space-x-4 text-white'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/quizzes/my-attempts'>My Quizzes</Link>
          </li>
          <li>
            <a
              href='http://127.0.0.1:8000/admin'
              target='_blank'
              rel='noopener noreferrer'
            >Admin Dashboard</a>
          </li>
          {userInfo?.token?.access ? (
            <>
              <li className='text-xl font-semibold'>
                Hi, {userInfo?.user?.username}
              </li>
              <li>
                <button
                  className='bg-indigo-500 px-2 py-1 rounded text-center flex items-center cursor-pointer'
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link
                  to='/sign-up'
                  className='bg-white px-2 py-1 rounded text-indigo-500 flex items-center'
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to='/sign-in'
                  className='bg-indigo-500 px-2 py-1 rounded text-center flex items-center'
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar