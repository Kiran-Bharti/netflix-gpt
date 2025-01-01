import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='text-white pt-60 px-4 sm:px-16 sm:pt-64 absolute bg-gradient-to-r from-black w-full aspect-video sm:max-h-dvh'>
      <h1 className='text-xl font-bold my-2'>{title}</h1>
      <p className='text-xs sm:text-sm sm:w-1/3 sm:font-semibold'>{overview}</p>
      <div className='my-4'>
        <button className='px-2 text-xs sm:text-base sm:px-4 py-1 bg-white text-black rounded-sm font-semibold bg-opacity-95 hover:bg-opacity-100'>Play</button>
        <button className='px-2 text-xs sm:text-base sm:px-4 py-1 mx-2 bg-gray-700 text-white rounded-sm font-semibold bg-opacity-60 hover:bg-opacity-85'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle