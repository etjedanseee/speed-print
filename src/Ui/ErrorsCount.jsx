import React from 'react'

const ErrorsCount = ({ errorsCount }) => {
  return (
    <div className='py-2'>
      <div className='inline text-xl px-3 py-1 border-2 border-emerald-600'>
        You make <span className='font-bold'>{errorsCount ? errorsCount : 0}</span> mistakes
      </div>
    </div>
  )
}

export default ErrorsCount