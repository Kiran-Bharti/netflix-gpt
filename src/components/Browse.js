import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='h-screen bg-black'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse