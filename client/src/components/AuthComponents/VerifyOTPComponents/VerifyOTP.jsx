import React, { useState, useRef } from 'react';
import './VerifyOTP.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
// import toast from 'react-hot-toast';




const VerifyOTP = () => {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputs = Array.from({ length: 4 }, (_, index) => useRef(null));

    useEffect(() => {

    }, [])

    const handleChange = (e, index) => {
        const { value, name } = e.target;

        if (isNaN(value)) return; // Allow only numeric input

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        // Move focus to the previous or next input
        if (name === 'backspace' && index > 0) {
            otpInputs[index - 1].current.focus();
        } else if (index < otpInputs.length - 1 && value !== '') {
            otpInputs[index + 1].current.focus();
        }
    };


    return (
        <div className='vefifContainer'>
            <form>
                <h1>OTP Verification</h1>
                <input type="number" placeholder='Enter OTP here' />
                <button>Verify</button>
                <h3 >Resend OTP</h3>
            </form>
        </div>
    );
};

export default VerifyOTP;
