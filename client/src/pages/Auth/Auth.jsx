import './Auth.css';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from 'react-router-dom';

function Auth() {
    return (
        <div className='authController'>
            <div className="authContainer">
                <div className='loginBtn'>
                    <div className="info">Already Registered ?</div>
                    <Link to={'/login'} className="btn">
                        <div className='icon'>
                            <LockIcon />
                        </div>
                        <div className='text'>Login</div>
                    </Link>
                </div>
                <div className="separator"></div>
                <div className='registerBtn'>
                    <div className="info">New User ?</div>
                    <Link to={'/register'} className="btn">
                        <div className='icon'>
                            <DriveFileRenameOutlineIcon />
                        </div>
                        <div className='text'>Register</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Auth