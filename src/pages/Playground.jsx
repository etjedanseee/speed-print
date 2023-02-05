import React, { useEffect, useState } from 'react'
import ErrorsCount from '../Ui/ErrorsCount';
import Words from '../components/Words'
import Timer from '../components/Timer';
import { useNavigate } from 'react-router-dom';
import { msToMinutes, msToSeconds } from '../utils/convertMs';
import { calcWordsCount } from '../utils/calcWordsCount';


const Playground = ({ words, getResultsApp }) => {
  const [cursor, setCursor] = useState(0);
  const [errorsCount, setErrorsCount] = useState(0);
  const [time, setTime] = useState(0);
  const navigate = useNavigate()

  const handleKeyUp = (e) => {
    if (e.key === words[cursor]) {
      if (cursor + 1 === words.length) {
        const resObj = {
          errorsCount,
          minutes: msToMinutes(time),
          seconds: msToSeconds(time),
          wordsCount: calcWordsCount(words),
          symbolsCount: words.length
        }
        getResultsApp(resObj)
        navigate('/results')
      }
      setCursor(prevcur => prevcur + 1)
    } else {
      setErrorsCount(prev => prev + 1)
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
        <ErrorsCount errorsCount={errorsCount} />
        {<Timer time={time} />}
      </div>
      <Words words={words} cursor={cursor} />
    </div>
  )
}

export default Playground