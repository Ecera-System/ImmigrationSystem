import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='authenCon'>
      <div className="authBox">
      <div className='left'>
        <h1>Welcome to <span>Ecera System</span></h1>
        <p>Authenticate yourself today, and enjoy the immigration process very smoothly</p>
        <Link to={'/login'}>Already have account ?  <span>SIGN IN</span></Link>
      </div>
      <div className='right'>
        <h1>Sign Up</h1>
        <div className="authIcons">
          <GoogleIcon className='icon' />
          <FacebookOutlinedIcon className='icon' />
        </div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder='Enter your Name' />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email' />
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder='Enter your password' />
          </div>
          <div>
            <label>Confirm-Password</label>
            <input type="text" placeholder='Confirm your password' />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register