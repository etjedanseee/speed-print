import React, { useEffect, useState } from 'react'
import ErrorCount from '../Ui/ErrorCount';
import Words from '../components/Words'
import Timer from '../components/Timer';
import { useNavigate } from 'react-router-dom';


const Playground = ({ words }) => {
  const [cursor, setCursor] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [time, setTime] = useState(0);
  const navigate = useNavigate()

  const handleKeyUp = (e) => {
    if (e.key === words[cursor]) {
      if (cursor + 1 === words.length) {
        navigate('/results')
      }
      setCursor(prevcur => prevcur + 1)
    } else {
      setErrorCount(prev => prev + 1)
    }
  }

  const startTimer = () => {
    const handleTimer = setInterval(() => {
      setTime(prev => prev + 1000)
    }, 1000)
  }


  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, [words, cursor])

  useEffect(() => {
    if (cursor === 1) {
      startTimer()
    }
  }, [cursor])

  return (
    <div className='min-h-screen bg-blue-200 relative'>
      <div className='flex justify-between px-4 pt-2 items-center'>
        <ErrorCount errorCount={errorCount} />
        {<Timer time={time} />}
      </div>
      <Words words={words} cursor={cursor} />
    </div>
  )
}

export default Playground