import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Playground from './pages/Playground'
import './index.css';
import Results from './pages/Results';


function App() {
  const [words, setWords] = useState([])
  const [results, setResults] = useState({ wordsCount: 0, symbolsCount: 0, errorsCount: 0, minutes: 0, seconds: 0 })

  const getResultsApp = (data) => {
    setResults(data)
  }

  return (
    <Routes>
      <Route path='/' element={<Home setWords={setWords} />} />
      <Route path='/play' element={<Playground words={words} getResultsApp={getResultsApp} />} />
      <Route path='/results' element={<Results {...results} />} />
    </Routes>
  );
}

export default App;


