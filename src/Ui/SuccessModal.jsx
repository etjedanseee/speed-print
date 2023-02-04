import React from 'react'
import Successfull from '../assets/successful-icon.svg'

const SuccessModal = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-40 flex flex-col justify-center items-center text-green-900 font-black text-4xl'>
      <img src={Successfull} alt="" className='w-20 mb-4' />
      Successful! Generate text...
    </div>
  )
}

export default SuccessModal