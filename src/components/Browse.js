import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className='h-screen bg-black'>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse