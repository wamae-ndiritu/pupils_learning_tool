import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", grade: "", name: "" });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }
  const handleSubmit = () => {
    setUser({ email: "", password: "", grade: "", name: "" });
    navigate("/admin");
  };
  return (
    <div className='h-screen bg-slate-200 flex items-center justify-center'>
      <main className='w-1/3 bg-white p-4 rounded'>
        <h1 className='text-center text-xl font-semibold text-indigo-500'>
          Sign Up to eSoma
        </h1>
        <div className='flex flex-col mb-2'>
          <label htmlFor='name' className='text-lg text-gray-600'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='name'
            value={user.name}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='text-lg text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='form'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='email'
            value={user.email}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='grade' className='text-lg text-gray-600'>
            Current Grade
          </label>
          <select
            className='border rounded p-1 my-2 focus:outline-indigo-500'
            id='grade'
            onChange={handleChange}
            name='grade'
            value={user.grade}
          >
            <option>--Select your Grade--</option>
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
            <option>Grade 4</option>
            <option>Grade 5</option>
          </select>
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='password' className='text-lg text-gray-600'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='password'
            value={user.password}
          />
        </div>
        <button
          className='w-full bg-indigo-500 text-white rounded px-4 py-1'
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p className='text-sm text-gray-600 py-1'>
          Already have an account?
          <Link to='/sign-in' className='ml-2 text-indigo-500 underline'>
            Sign In
          </Link>
        </p>
      </main>
    </div>
  );
};
export default SignUp;
