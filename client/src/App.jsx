import React from 'react';
import Home from './pages/HomePage/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/LoginPage/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';
import Support from './pages/Support&Asst/Support';
import Header from './components/HomeComponents/Header/Header';
import OurServices from './pages/OurServices/OurServices';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
