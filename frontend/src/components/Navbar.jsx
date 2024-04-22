import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-indigo-600 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-bold'>eSoma</Link>
        <ul className='flex space-x-4 text-white'>
          <li>Subjects</li>
          <li>Grades</li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar