import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import { register } from "./redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", contact: "", full_name: "", username: "", user_type: "student" });

  const {loading, error, success} = useSelector((state) => state.user);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  useEffect(() => {
    if (error || success){
      setUser({
        email: "",
        password: "",
        grade: "",
        username: "",
        full_name: "",
        user_type: "student",
        contact: "",
      });
    }
  }, [error, success])

  useEffect(() => {
    if (success) {
      setUser({
        email: "",
        password: "",
        grade: "",
        username: "",
        full_name: "",
        user_type: "student",
        contact: "",
      });
      navigate('/sign-in')
    }
  }, [success])
  return (
    <div className='h-screen bg-slate-200 flex items-center justify-center'>
      <form className='w-1/3 bg-white p-4 rounded' onSubmit={handleSubmit}>
        <h1 className='text-center text-xl font-semibold text-indigo-500'>
          Sign Up to eSoma
        </h1>
        {
          loading && <p>Loading...</p>
        }
        {
          error && <p className="text-red-500 py-1 text-sm">{error}</p>
        }
        <div className='flex flex-col mb-2'>
          <label htmlFor='username' className='text-lg text-gray-600'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='username'
            value={user.username}
            required
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='name' className='text-lg text-gray-600'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='full_name'
            value={user.full_name}
            required
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
            required
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='contact' className='text-lg text-gray-600'>
            Contact
          </label>
          <input
            type='contact'
            id='form'
            className='border rounded p-1 focus:outline-indigo-500'
            onChange={handleChange}
            name='contact'
            value={user.contact}
            required
          />
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
            required
          />
        </div>
        <button
        type="submit"
          className='w-full bg-indigo-500 text-white rounded px-4 py-1'
        >
          Submit
        </button>
        <p className='text-sm text-gray-600 py-1'>
          Already have an account?
          <Link to='/sign-in' className='ml-2 text-indigo-500 underline'>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
