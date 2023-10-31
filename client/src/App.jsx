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
import Auth from './pages/Auth/Auth';
import Register from './pages/Auth/Register/Register';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
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
