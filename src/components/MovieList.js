import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

  return (
    <div className='p-4'>
      <h1 className='font-bold p-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll ml-4 py-4s no-scrollbar'>
        {movies && (
          <div className='flex'>
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList