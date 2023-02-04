import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Playground from './pages/Playground'
import './index.css';
import Results from './pages/Results';


function App() {
  const [words, setWords] = useState([])
  //закончить с результатами
  return (
    <Routes>
      <Route path='/' element={<Home setWords={setWords} />} />
      <Route path='/play' element={<Playground words={words} />} />
      <Route path='/results' element={<Results />} />
    </Routes>
  );
}

export default App;


