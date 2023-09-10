import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user=useSelector(store=>store.user)
  const navigate=useNavigate();

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
         <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         className=' w-44'
         alt="" />
         {user &&
         <div className='flex  p-4'>
          <img
           src={user?.photoURL}
            alt="" 
            className='w-16 h-12'/>
          <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
         </div>}
    </div>
  )
}

export default Header
