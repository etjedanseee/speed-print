import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import WordsForm from '../components/WordsForm'
import SuccessModal from '../Ui/SuccessModal';
import { fetchWords } from '../utils/fetchWords';

const Home = ({ setWords }) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onGenerateText = (count, lang) => {
    const getData = async () => {
      const wordsArray = await fetchWords(count, lang)
      setWords(wordsArray.join(' ').toLowerCase().split(''))
    }
    getData()
    setIsModalVisible(true)
    setTimeout(() => {
      navigate('/play')
    }, 1000)
  }

  return (
    <div className='min-h-screen bg-blue-200 relative'>
      {isModalVisible && <SuccessModal />}
      <div className='container mx-auto min-h-screen flex flex-col items-center justify-center'>
        <div className='text-4xl tracking-tighter text-center mb-8'>Hello, in this app you can practice your typing speed.</div>
        <WordsForm onGenerateText={onGenerateText} />
      </div>
    </div>
  )
}

export default Home