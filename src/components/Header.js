import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
  const navigate=useNavigate();

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       //User is sign in
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribe my component unmounts.
    return ()=> unsubscribe();
  }, [])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
         <img src={LOGO}
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
