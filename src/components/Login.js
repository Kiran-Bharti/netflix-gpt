import React, { useState, useRef } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  const userfullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleOnSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setErrMessage(message);

    if(message) return; // exit if there is some error message

    if(!isSignInForm){ // Sign Up Logic
      console.log("sign up");
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log("auth.currentUser");
        console.log(auth.currentUser);
        console.log("user");
        console.log(user);
        //Update user profile
        updateProfile(user, {
          displayName: userfullname.current.value, photoURL: "https://i.pinimg.com/originals/f0/72/3c/f0723cc24fe6dd182821264bdfb54a9a.jpg"
        }).then(() => {
          // Profile updated!
          // dispatch action here to fix issue with updating name and photo
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          // ...
        }).catch((error) => {
          // An error occurred
          setErrMessage(error.message);
          // ...
        });

        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+"-"+errorMessage);
      });
    }
    else{ // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(error.message);
      });
    }

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
                    !isSignInForm && (<input ref={userfullname} className='bg-zinc-900 my-2 p-3 w-full border border-gray-500 rounded-sm text-sm bg-opacity-85' type="text" placeholder='Full Name'/>)
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