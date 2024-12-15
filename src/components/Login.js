import React, { useState, useRef } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);

  const handleOnSubmit = () => {
    setErrMessage(validate(email.current.value, password.current.value));
  }

  return (          
    <div className='bg-black bg-cover'>
        <Header />
        <div className='absolute bg-cover h-lvh min-h-lvh overflow-hidden max-w-full -z-10 hidden sm:block'>
            <img className='min-h-screen min-w-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/SG-en-20241209-TRIFECTA-perspective_604f16f9-269e-410a-a034-9b4494d6280e_small.jpg" alt="netflix bg img" />
        </div>
        <div className='absolute w-full'>
            <form className='bg-black mt-6 sm:mt-28 sm:mx-auto right-0 left-0 sm:w-[350px] text-white rounded-md sm:bg-opacity-80 py-8 pl-10 pr-8 sm:px-12 min-h-screen sm:min-h-min' onSubmit={(e) => e.preventDefault()}>
                <h1 className='font-bold text-2xl my-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isSignInForm && (<input className='bg-zinc-900 my-2 p-3 w-full border border-gray-500 rounded-sm text-sm bg-opacity-85' type="text" placeholder='Full Name'/>)
                }
                <input ref={email} className='bg-zinc-900 my-2 p-3 w-full border border-gray-500 rounded-sm text-sm bg-opacity-85' type="text" placeholder='Email address'/>
                <input ref={password} className='bg-zinc-900 my-2 p-3 w-full border border-gray-500 rounded-sm text-sm bg-opacity-85' type="password" placeholder='Password'/>
                {
                  errMessage && (
                    <p className='py-2 text-sm text-red-600'>{errMessage}</p>
                  )
                }
                <button className='bg-red-600 my-4 p-2 w-full font-bold text-xs rounded-sm hover:bg-red-700 active:bg-red-800'  onClick={handleOnSubmit}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='my-2'>
                    <span className='text-sm text-gray-300'>{isSignInForm ? 'New to netflix? ' : 'Already a User? '}</span>
                    <span className='text-sm font-bold cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up Now.' : 'Sign In Now.'}</span>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login