import React from 'react'
import { Link } from 'react-router-dom';
import ResultsBg from '../assets/results-bg.jpg'

const Results = ({ errorsCount, wordsCount, symbolsCount, minutes, seconds }) => {
  return (
    <div className='min-h-screen bg-blue-200 relative'>
      <img src={ResultsBg} className='absolute top-0 left-0 object-cover h-full w-full z-10' alt="" />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black z-20 opacity-60'></div>
      <div className='container min-h-screen mx-auto flex flex-col justify-center items-center text-center relative z-30'>
        <div className='text-white text-xl font-black mb-4'>
          <div className='mb-2 text-4xl text-orange-500'>Look at you results!</div>
          <div className='mb-2'>In this part you passed {wordsCount} words! This also amounts to {symbolsCount} symbols!</div>
          <div className='mb-2'>Took time to print: {minutes > 0 ? minutes : '00'}:{seconds}</div>
          <div>But you made {errorsCount} typing mistakes. Improve your skills to type even faster!</div>
        </div>
        <Link
          to='/'
          className='text-orange-500 font-black text-2xl border-2 border-orange-500 rounded-md py-2 px-4'
        >Try again</Link>
      </div>
    </div>
  )
}

export default Results