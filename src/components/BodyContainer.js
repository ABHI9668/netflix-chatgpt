import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const BodyContainer = () => {
    const movies=useSelector(store=>store.movies)
    
   
  return (
   movies.nowPlayingMovies && ( 
   <div className='bg-black'>

    <div className='mt-0 md:-mt-52  relative z-10'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Playing"} movies={movies.nowPlayingMovies}/>
    </div>

    
      
    </div>
   )
  )
}

export default BodyContainer
