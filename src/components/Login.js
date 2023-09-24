import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidate from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_IMAGE, USER_AVATAR} from "../utils/constants"

const Login = () => {
    const dispatch = useDispatch();
   
    const [IsSigInForm, setIsSignInForm] = useState(true);
    const [errMessage, SeterrMessage] = useState(null);
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!IsSigInForm);
    }

    const handleBtnClick = () => {
        const msg = checkValidate(email.current.value, password.current.value);
        SeterrMessage(msg);

        if (msg) return;

        if (!IsSigInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //when a new user is registered
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        SeterrMessage(error.message)

                    });
                 


                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SeterrMessage(errorCode + "-" + errorMessage)

                    // ..
                });
        }
        else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    SeterrMessage(errorCode + "-" + errorMessage)
                });

        }


    }
    return (
        <div >
            <Header />

            <div className='absolute w-screen aspect-video '>
                <img src={BG_IMAGE}
                    className='h-screen object-cover '
                    alt="" />
            </div>

            <form onSubmit={(e) => { e.preventDefault() }} className=' w-full p-12 bg-black absolute md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>

                <h2 className='text-3xl font-bold py-4'>{IsSigInForm ? "Sign In" : "Sign Up"}</h2>

                {!IsSigInForm && <input type="text" placeholder='Enter Your Name' ref={name} className='p-4 my-2 w-full bg-gray-900 rounded-lg text-white' />}

                <input type="text" ref={email} placeholder='Email or phone number' className='p-4 my-2 w-full bg-gray-900 rounded-lg text-white' />

                <input type="password" ref={password} placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-900' />

                <p className='font-bold text-red-500'>{errMessage}</p>

                <button className='p-2 my-6 bg-red-700 w-full rounded-lg font-bold text-lg' onClick={handleBtnClick}>{IsSigInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSigInForm ? "New to Netflix?Sign Up Now" : "Already Registered? Sign In Now."}</p>
                <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</small>
            </form>

        </div>
    )
}

export default Login
