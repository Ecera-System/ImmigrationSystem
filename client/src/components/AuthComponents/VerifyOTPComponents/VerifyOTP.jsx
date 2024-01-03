import React, { useState, useRef } from 'react';
import './VerifyOTP.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateUser, resendCode } from '../../../../redux/actions/userAction';
import toast from 'react-hot-toast';
import { clearSignupMessageAndError } from '../../../../redux/reducers/userReducer';
import ButtonSpinner from '../../../assets/Spinner/ButtonSpinner';



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

    const resendCodeFun = () =>{
        dispatch(resendCode(user.email))
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
                <button>
              {
                loading ? <ButtonSpinner /> : 'Verify'
              }
            </button>
                <h3 onClick={resendCodeFun}>Resend OTP</h3>
            </form>
        </div>
    );
};

export default VerifyOTP;
