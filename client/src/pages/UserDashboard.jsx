import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserSideBar from '../components/userDashboardComponents/UserSideBar/UserSideBar'
import UserProfile from './UserProfile';

function UserDashboard() {
  const [closeNavInfo, setCloseNavInfo] = useState(false);
  
  const closeNavInfoFun = (val) =>{
    setCloseNavInfo(val)
  }
  return (
    <div style={{ width: '100vw', height:'90vh', display: 'flex' }}>
      <div style={{ width: '20vw' }}>
        <UserSideBar closeNavInfo={closeNavInfoFun} />
      </div>
      <div style={{ width: '80vw', zIndex: !closeNavInfo && '1' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default UserDashboard
