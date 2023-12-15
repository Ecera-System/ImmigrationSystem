import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {toast} from 'react-hot-toast';
import { clearSignupMessageAndError } from '../../../../redux/reducers/userReducer';
import ButtonSpinner from '../../../assets/Spinner/ButtonSpinner';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, message, error, redirect} = useSelector(state=>state.user);

  let validated = false;

  //state for validation error that will store validation errors
  const [validationErrors, setValidatioErrors] = useState({
    nameError: '',
    emailError: '',
    passError: '',
    conPassError: ''
  })

  //state for signup data
  const [signUpData, setSingUpData] = useState({
    name: '',
    email: '',
    contactNumber: {
      phoneNumber: '',
      countryCode: ''
    },
    password: '',
    conPassword: ''
  })

  useEffect(()=>{
    if(message){
      toast.success(message);
      dispatch(clearSignupMessageAndError())
    }
    if(error){
      toast.error(error)
      dispatch(clearSignupMessageAndError())
    }
    if(redirect){
      navigate(redirect);
    }
  },[message, error])


  const validateSignUpData = () => {

    let errors = {
      nameError: '',
      emailError: '',
      phoneNoError: '',
      passError: '',
      conPassError: ''
    }

    //adding name errors
    if (!signUpData.name) {
      errors.nameError = 'Name is required';
    }

    //adding phone errors
    if (!signUpData.contactNumber.phoneNumber) {
      errors.phoneNoError = 'Phone No is required';
    } else if (!signUpData.contactNumber.countryCode) {
      errors.phoneNoError = 'Country code is required';
    }

    //adding email errors
    if (!signUpData.email) {
      errors.emailError = 'Email is required';

    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(signUpData.email)) {
      errors.emailError = 'Enter a valid email';
    }

    //adding password errors
    if (!signUpData.password) {
      errors.passError = 'Password is required';

    } else if ((signUpData.password).length < 6) {
      errors.passError = 'Atleast 6 characters required';

    } else if (!(/[A-Z]/).test(signUpData.password)) {
      errors.passError = 'Atleast 1 capital letter required';

    } else if (!(/[a-z]/).test(signUpData.password)) {
      errors.passError = 'Atleast 1 small letter required';

    } else if (!(/[!@#$%^&*(),.?":{}|<>]/).test(signUpData.password)) {
      errors.passError = 'Atleast 1 special char required';

    } else if (!(/\d/).test(signUpData.password)) {
      errors.passError = "Atleast 1 numeric value required";

    } else if ((signUpData.conPassword).includes(' ')) {
      errors.passError = "Password can't contains space";

    } else if ((signUpData.conPassword) !== (signUpData.password)) {
      errors.passError = "Password doesn't match";

    }

    //adding confirm password errors
    if (!signUpData.conPassword) {
      errors.conPassError = 'Confirm-password is required';

    } else if ((signUpData.conPassword) !== (signUpData.password)) {
      errors.conPassError = "Confirm-password doesn't match";

    }

    setValidatioErrors(errors);
    if (!errors.nameError && !errors.emailError && !errors.passError && !errors.conPassError) {
      validated = true;
    }

    // reinitialize the errors as empty to get rid of unexpected errors
    errors = {
      nameError: '',
      emailError: '',
      passError: '',
      conPassError: ''
    }

    return validated; //return true if successfully validate else return false


  }

  //function to handle when data change in inputs
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setSingUpData({ ...signUpData, [name]: value })
  }

  //function to handle phone number
  const handlePhoneChange = (phone, country) => {
    setSingUpData({...signUpData, contactNumber:{ phoneNumber: phone, countryCode: country}})
  }

  //function to submit signup data
  const submitHandler = (e) => {
    e.preventDefault();

    if (validateSignUpData()) { //calling validateSignupData function to validate all signup data

      const data = {
        name: signUpData.name,
        email: signUpData.email,
        contactNumber: {
          phoneNumber: signUpData.contactNumber.phoneNumber,
          countryCode: (signUpData.contactNumber.countryCode).toString()
        },
        password: signUpData.password
      }

      dispatch(signup(data)); 

    } else {
      console.log(validationErrors)
    }

    // dispatch(signup(data)); 

  }


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
          {/* <div className="authIcons">
            <GoogleIcon className='icon' />
            <FacebookOutlinedIcon className='icon' />
          </div> */}
          <form onSubmit={submitHandler}>
            <div>
              <label>Name</label>
              <input type="text" onChange={(e) => { handleFormChange(e) }} name='name' placeholder='Enter your Name' />
              <div className="error">
                {
                  validationErrors.nameError && validationErrors.nameError
                }
              </div>
            </div>
            <div>
              <label>Email</label>
              <input type="text" onChange={(e) => { handleFormChange(e) }} name='email' placeholder='Enter your Email' />
              <div className="error">
                {
                  validationErrors.emailError && validationErrors.emailError
                }
              </div>
            </div>
            <div>
              <label>Phone No</label>
              <ReactPhoneInput
                type='tel'
                defaultCountry='in'
                inputClass='phone-input'
                inputProps={{
                  required: true,
                  style: {
                    width: '100%',
                    color: '#fff',
                    padding: '7px',
                    paddingLeft: "40px",
                    height: '35px',
                  },
                }}
                onChange={handlePhoneChange}
                containerClass='containerCl'
                buttonClass='btnCl'
                searchClass='searchCl'

                buttonStyle={{ backgroundColor: 'transparent', borderRight: 'none', borderColor: '#fff' }}
                containerStyle={{ color: 'black', }}

                country={'in'}
                placeholder='Phone number'
              />
              <div className="error">
                {
                  validationErrors.phoneNoError && validationErrors.phoneNoError
                }
              </div>
            </div>
            <div className='passwords'>
              <div className='pass'>
                <label>Password</label>
                <input type="text" onChange={(e) => { handleFormChange(e) }} name='password' placeholder='Enter your password' />
                <div className="error">
                  {
                    validationErrors.passError && validationErrors.passError
                  }
                </div>
              </div>
              <div className='conPass'>
                <label>Confirm-Password</label>
                <input type="text" onChange={(e) => { handleFormChange(e) }} name='conPassword' placeholder='Confirm your password' />
                <div className="error">
                  {
                    validationErrors.conPassError && validationErrors.conPassError
                  }
                </div>
              </div>
            </div>
            <button>
              {
                loading ? <ButtonSpinner /> : 'Sign Up'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register