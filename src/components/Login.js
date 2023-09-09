import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [IsSigInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
          setIsSignInForm(!IsSigInForm);
    }
    return (
        <div >
            <Header />

            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    className=''
                    alt="" />
            </div>

            <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>

                <h2 className='text-3xl font-bold py-4'>{IsSigInForm ? "Sign In" : "Sign Up"}</h2>

                {!IsSigInForm && <input type="text" placeholder='Enter Your Name' className='p-4 my-2 w-full bg-gray-900 rounded-lg text-white'/>}

                <input type="text" placeholder='Email or phone number' className='p-4 my-2 w-full bg-gray-900 rounded-lg text-white'/>

                <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-900' />

                <button className='p-2 my-6 bg-red-700 w-full rounded-lg font-bold text-lg'>{IsSigInForm? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSigInForm? "New to Netflix?Sign Up Now" : "Already Registered? Sign In Now."}</p>
                <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</small>
            </form>

        </div>
    )
}

export default Login
