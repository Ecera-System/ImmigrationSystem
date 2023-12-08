import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {

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
    password: '',
    conPassword: ''
  })


  const validateSignUpData = () =>{

    let errors = {
      nameError: '',
      emailError: '',
      passError: '',
      conPassError: ''
    }

    //adding name errors
    if(!signUpData.name){
      errors.nameError = 'Name is required';
    }

    //adding email errors
    if(!signUpData.email){
      errors.emailError = 'Email is required';

    }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(signUpData.email)){
      errors.emailError = 'Enter a valid email';
    }

    //adding password errors
    if(!signUpData.password){
      errors.passError = 'Password is required';

    }else if((signUpData.password).length < 6){
      errors.passError = 'Atleast 6 characters required';

    } else if(!(/[A-Z]/).test(signUpData.password)){
      errors.passError = 'Atleast 1 capital letter required';

    } else if(!(/[a-z]/).test(signUpData.password)){
      errors.passError = 'Atleast 1 small letter required';

    } else if(!(/[!@#$%^&*(),.?":{}|<>]/).test(signUpData.password)){
      errors.passError = 'Atleast 1 special char required';
      
    }else if(!(/\d/).test(signUpData.password)){
      errors.passError = "Atleast 1 numeric value required";
      
    }else if((signUpData.conPassword).includes(' ')){
      errors.passError = "Password can't contains space";

    }else if((signUpData.conPassword) !== (signUpData.password)){
      errors.passError = "Password doesn't match";

    }

    //adding confirm password errors
    if(!signUpData.conPassword){
      errors.conPassError = 'Confirm-password is required';

    }else if((signUpData.conPassword) !== (signUpData.password)){
      errors.conPassError = "Confirm-password doesn't match";

    } 

    setValidatioErrors(errors);
    if(!errors.nameError && !errors.emailError && !errors.passError && !errors.conPassError){
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
  const handleFormChange = (e) =>{
    const {name, value} = e.target;

    setSingUpData({...signUpData, [name]: value})
  }

  //function to submit signup data
  const submitHandler = (e) =>{
    e.preventDefault();

     if(validateSignUpData()){ //calling validateSignupData function to validate all signup data
      console.log(signUpData);
     }else{
      console.log(validationErrors)
     }
    
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
          <div className="authIcons">
            <GoogleIcon className='icon' />
            <FacebookOutlinedIcon className='icon' />
          </div>
          <form onSubmit={submitHandler}>
            <div>
              <label>Name</label>
              <input type="text" onChange={(e)=>{handleFormChange(e)}} name='name' placeholder='Enter your Name' />
              <div className="error">
                {
                  validationErrors.nameError && validationErrors.nameError
                }
              </div>
            </div>
            <div>
              <label>Email</label>
              <input type="text" onChange={(e)=>{handleFormChange(e)}} name='email' placeholder='Enter your Email' />
              <div className="error">
              {
                  validationErrors.emailError && validationErrors.emailError
                }
              </div>
            </div>
            <div className='passwords'>
              <div className='pass'>
                <label>Password</label>
                <input type="text" onChange={(e)=>{handleFormChange(e)}} name='password' placeholder='Enter your password' />
                <div className="error">
                {
                  validationErrors.passError && validationErrors.passError
                }
                </div>
              </div>
              <div className='conPass'>
                <label>Confirm-Password</label>
                <input type="text" onChange={(e)=>{handleFormChange(e)}} name='conPassword' placeholder='Confirm your password' />
                <div className="error">
                {
                  validationErrors.conPassError && validationErrors.conPassError
                }
                </div>
              </div>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register