import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home.jsx'
import PlayerSelection from './Components/PlayerSelection/PlayerSelection.jsx';
import LevelSelection from './Components/LevelSelection/LevelSelection.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playerSelection" element={<PlayerSelection />} />
        <Route path="/levelSelection" element={<LevelSelection />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
