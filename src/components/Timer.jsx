import React from 'react'
import TimerIcon from '../assets/timer-icon.svg'
import { msToMinutes, msToSeconds } from '../utils/convertMs';

const Timer = ({ time }) => {
  const minutes = msToMinutes(time)
  const seconds = msToSeconds(time)

  return (
    <div className='text-xl font-medium border-2 border-emerald-600 px-4 py-1'>
      <div className='flex items-center'>
        <img src={TimerIcon} className='w-8 mr-1' alt="" />
        {minutes >= 9 ? <span>{minutes}:</span> : minutes >= 1 ? <span>0{minutes}:</span> : null}
        {seconds > 0 ? <span>{seconds}</span> : <span>0</span>}
      </div>
    </div>
  )
}

export default Timer