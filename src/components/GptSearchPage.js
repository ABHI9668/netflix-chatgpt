import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10 w-full'>

      <img src={BG_IMAGE}
        className='h-screen object-cover md:w-[100%]'
        alt="" />
        </div>
        <div className=''>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  )
}

export default GptSearchPage
