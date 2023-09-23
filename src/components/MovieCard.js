import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
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
    <div className='w-48 pr-4 ' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <img src={IMG_CDN+posterPath} alt="moviePoster" style={imageStyle} className='rounded-lg' />
    </div>
  )
}

export default MovieCard
