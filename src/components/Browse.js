import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import BodyContainer from './BodyContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';
import Footer from './Footer';




const Browse = () => {
  const showGPTSelector = useSelector(store => store.gpt.showGptSearch);
  //custom Hook
  useNowPlayingMovies()
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />
      {showGPTSelector ? <GptSearchPage /> :
        <>
          <MainContainer />
          <BodyContainer />
          <Footer/>
        </>
      }


    </div>
  )
}

export default Browse
