import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videobg from './Videobg'

const MainContainer = () => {
    const moviesSelector=useSelector((store)=> store.movies?.nowPlayingMovies)

    if(moviesSelector===null){
        return ;
    }
    const oneMainMovie=moviesSelector[0];
    const {original_title,overview,id}=oneMainMovie;
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <Videotitle  title={original_title}  overview={overview}/>
        <Videobg movieId={id}/>
    </div>
  )
}

export default MainContainer
