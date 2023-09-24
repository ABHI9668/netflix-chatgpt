import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };


  return (
    <div className='md:mr-3 md:w-44 w-12/12 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={IMG_CDN + posterPath} alt="moviePoster" style={imageStyle} className=' h-[100%] mr-20 p-2 rounded-xl' />
    </div>
  )
}

export default MovieCard
