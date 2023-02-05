import React, { memo } from 'react'

const Words = memo(({ words, cursor }) => {
  const textSize = words.length > 3000 ? 'text-sm' : words.length > 2000 ? 'text-base' : words.length > 1400 ? 'text-xl' : words.length > 500 ? 'text-3xl' : 'text-4xl'

  return (
    <div className='flex flex-wrap px-4 py-4'>
      {words.length && words?.map((word, index) => {
        return word === ' '
          ? <span
            key={index}
            className={`pb-2  ${words.length < 500 ? 'px-3' : 'px-2'} ${cursor === index ? 'text-white  bg-[#1c114d]' : ''} `}
          >
            {word}
          </span>
          : <span
            className={` ${words.length < 500 ? 'pb-2' : 'pb-1'}  leading-none ${textSize} tracking-tight flex justify-center text-center   ${cursor === index ? 'text-white  bg-[#1c114d]' : ''} `}
            key={index}
          >
            {word}
          </span>
      })}
    </div>
  )
});

export default Words