import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./redux/actions/userActions";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {loading, error, userInfo} = useSelector((state) => state.user);
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = () => {
    dispatch(login(user));
  };


  useEffect(() => {
    if (userInfo?.token?.access){
      navigate('/')
    }
  }, [userInfo])

  useEffect(() => {
    if (error || userInfo?.token){
      setUser({email: "", password: ""})
    }
  }, [error, userInfo])

  return (
    <div className='h-screen bg-slate-200 flex items-center justify-center'>
      <main className='w-1/3 bg-white p-4 rounded'>
        <h1 className='text-center text-xl font-semibold text-indigo-500'>
          Welcome to eSoma
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500 py-1 text-sm'>{error}</p>}
        <div className='flex flex-col mb-3'>
          <label htmlFor='email' className='text-xl'>
            Email
          </label>
          <input
            type='email'
            id='form'
            className='border rounded p-1 focus:outline-indigo-500'
            name="email"
            onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
            value={user.email}
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label htmlFor='email' className='text-xl'>
            Password
          </label>
          <input
            type='password'
            id='form'
            className='border rounded p-1 focus:outline-indigo-500'
            name="password"
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
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
          Don't have an account?
          <Link to='/sign-up' className='ml-2 text-indigo-500 underline'>
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
};
export default SignIn;
