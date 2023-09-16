import React from 'react'
import {  useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'


const Videobg = ({movieId}) => {
    
   
    const trailerSelector=useSelector(store=>store.movies?.trailerVideo)

   
    //using custom hooks to fetch the video trailer
    useTrailerVideo(movieId);
   
  return (
    <div className=''>
          <iframe  className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/"+trailerSelector?.key+"?autoplay=1&mute=1"} ></iframe>
    </div>
  )
}

export default Videobg
