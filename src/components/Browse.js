import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import BodyContainer from './BodyContainer';




const Browse = () => {
//custom Hook
useNowPlayingMovies()
  

  return (
    <div>
     <Header/>
     <MainContainer/>
     <BodyContainer/>
    
    </div>
  )
}

export default Browse
