import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
    <div className='absolute -z-10'>

      <img src={BG_IMAGE}
        className='h-screen object-cover'
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
