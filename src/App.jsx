import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import CarListPage from './Pages/CarListPage';
import SingleCarPage from './Pages/SingleCarPage';
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carlist" element={<CarListPage />} />
        <Route path="/carlist/:numerodechassiSlug" element={<SingleCarPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
