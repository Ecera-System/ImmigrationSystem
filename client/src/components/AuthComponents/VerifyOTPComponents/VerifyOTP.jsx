import React, { useState, useRef } from 'react';
import './VerifyOTP.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser } from '../../../../redux/actions/userAction';
import toast from 'react-hot-toast';
import { clearSignupMessageAndError } from '../../../../redux/reducers/userReducer';
// import toast from 'react-hot-toast';




const VerifyOTP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, error, message, redirect} = useSelector(state=>state.user);

    const [otp, setOtp] = useState('');
    const [otpError, setError] = useState('');

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearSignupMessageAndError())
        }
        if(message){
            toast.success(message);
            dispatch(clearSignupMessageAndError())
        }
        if(redirect){
            navigate(redirect);
        }
       
    },[error, message])

    const submitOTP = (e) =>{
        e.preventDefault();
        if(!otp){
            setError("Enter you OTP");
        } else {
            dispatch(activateUser({code: otp, email: user.email}))
        }
    }

    return (
        <div className='vefifContainer'>
            <form onSubmit={submitOTP}>
                <h1>OTP Verification</h1>
                <p>We have sent an OTP on {user.email}</p>
                <input type="number" onChange={(e)=>{setOtp(e.target.value)}} placeholder='Enter OTP here' />
                {
                    otpError && 
                    <p>{otpError}</p>
                }
                <button>Verify</button>
                <h3 >Resend OTP</h3>
            </form>
        </div>
    );
};

export default VerifyOTP;
