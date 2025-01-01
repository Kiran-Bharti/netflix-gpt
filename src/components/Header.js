import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

        navigate("/browse");
          // ...
        } else {
        dispatch(removeUser());

        navigate("/");
          // User is signed out
          // ...
        }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  return (
        <div className='absolute sm:px-4 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <div className='w-24 sm:w-32 mx-2 sm:mx-10 my-2 sm:my-4'>
                <img src={LOGO} alt="logo"/>
            </div>
            {
              user && (
                <div className='flex my-4 mx-2 sm:my-6 sm:mx-2 '>
                  <span className='p-1 mt-1 sm:px-3 sm:pt-1 font-bold text-white text-xs hidden sm:block'>{user.displayName}</span>
                  <img className='w-6 h-6 sm:w-7 sm:h-7 sm:pt-1' src={user.photoURL} alt="usericon" />
                  <button onClick={handleSignOut} className='w-16 sm:mt-1 sm:py-1 h-6 mx-1 mx:8 sm:mx-2 text-xs bg-red-700 text-white rounded-md hover:bg-red-800 active:bg-red-900'>Sign out</button>
                </div>
              )
            }
        </div>
  )
}

export default Header