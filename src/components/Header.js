import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const showGptSearch=useSelector((store)=> store.gpt.showGptSearch)

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.


    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
   
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
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
    return () => unsubscribe();
  }, [])

  return (
    <div className='absolute px-8  bg-gradient-to-b from-black z-10 w-screen  flex flex-col justify-between md:flex-row'>
      <img src={LOGO}
        className="w-38 h-20 mt-2 mx-auto md:mx-0"
        alt="" />
      {user &&
        <div className='flex  p-4 justify-between -mt-4 md:-mt-0'>
         {showGptSearch && <select name="" id="" className='p-1 bg-gray-900 text-white m-2 rounded-lg' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}


          </select>}

          <button className=' mt-2 md:py-2 px-4 md:m-2 bg-red-800 rounded-lg text-white h-10' onClick={handleGptSearch}>{showGptSearch ? "Home" : "GPT Search"}</button>
          <a href="https://www.linkedin.com/in/abhi9668/" target='_blank'><img
            src={user?.photoURL}
            alt=""
            className=' hidden md:block w-12 h-10 mt-2 ml-2 mr-2 rounded-lg cursor-pointer'
            
            /></a>
          
          <button className=' text-white  bg-red-800 rounded-lg h-10 mt-2 px-2' onClick={handleSignout}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
