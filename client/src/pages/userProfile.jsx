import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
  const {user} = useSelector(state=>state.user);
  // console.log(user);
  return (
    <div style={{ width: '100%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '20px', marginTop: '20px'}}>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Role: {user.role}</li>
        <li>Contact No.: {user?.contactNumber?.phoneNumber}</li>
      </ul>
    </div>
  )
}

export default UserProfile
