import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import CarList from './Pages/CarList';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carlist" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
