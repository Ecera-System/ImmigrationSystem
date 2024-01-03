import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import OurServicesPage from './pages/OurServicesPage';
import DashboardPage from './pages/DashboardPage';
import SupportAndAsstPage from './pages/Support&AsstPage';
import HomePage from './pages/HomePage';
import Header from './components/HomeComponents/Header/Header';
import ResetPasswordPage from './pages/ResetPasswordPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import { useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions/userAction';
import UserDashboard from './pages/UserDashboard';



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  },[])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/services' element={<OurServicesPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/support' element={<SupportAndAsstPage />} />
        <Route path='/reset-pass' element={<ResetPasswordPage />} />
        <Route path='/user/verify-otp' element={<VerifyOTPPage />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
      </Routes>
    </div>
  )
}

export default App
