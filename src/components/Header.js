import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
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

  return (
        <div className='absolute sm:px-4 bg-black sm:bg-transparent sm:bg-gradient-to-b sm:from-black z-10 w-full flex justify-between'>
            <div className='w-24 sm:w-40 mx-2 sm:mx-10 my-2 sm:my-4'>
                <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            </div>
            {
              user && (
                <div className='flex my-4 mx-2 sm:my-8 sm:mx-2 '>
                  <span className='p-1 sm:px-4 sm:pt-3 font-bold text-white text-xs sm:text-sm hidden sm:block'>{user.displayName}</span>
                  <img className='w-6 h-6 sm:w-10 sm:h-10' src={user.photoURL} alt="usericon" />
                  <button onClick={handleSignOut} className='w-20 h-6 sm:h-10 mx-1 mx:8 sm:mx-4 text-xs sm:text-base bg-red-700 text-white rounded-md hover:bg-red-800 active:bg-red-900'>Sign out</button>
                </div>
              )
            }
        </div>
  )
}

export default Header