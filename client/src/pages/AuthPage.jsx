import React, { useEffect } from 'react'
import AuthCard from '../components/AuthComponents/AuthCard/Auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const navigate = useNavigate();
  const {user, isAuthenticated} = useSelector(state => state.user);

  useEffect(()=>{

    if(!isAuthenticated){
      navigate('/login');
    }else if(user.role == 'user'){
      navigate('/user-dashboard/profile');
    }else if(user.role == 'admin'){
      navigate('/admin-dashboard');
    }

  },[user, isAuthenticated, navigate])
  return (
    <div>
        <AuthCard />
    </div>
  )
}

export default AuthPage