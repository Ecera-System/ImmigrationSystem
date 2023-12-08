import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import '../RegisterComponents/Register.css'
import { Link } from 'react-router-dom';

function Login() {

  let validated = false;

  //state for validation error that will store validation errors
  const [validationErrors, setValidatioErrors] = useState({
    emailError: '',
    passError: '',
  })

  //state for signup data
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })


  const validateLoginData = () =>{

    let errors = {
      emailError: '',
      passError: '',
    }

    //adding email errors
    if(!loginData.email){
      errors.emailError = 'Email is required';

    }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(loginData.email)){
      errors.emailError = 'Enter a valid email';
    }

    //adding password errors
    if(!loginData.password){
      errors.passError = 'Password is required';

    }else if((loginData.password).length < 6){
      errors.passError = 'Atleast 6 characters required';

    } else if(!(/[A-Z]/).test(loginData.password)){
      errors.passError = 'Atleast 1 capital letter required';

    } else if(!(/[a-z]/).test(loginData.password)){
      errors.passError = 'Atleast 1 small letter required';

    } else if(!(/[!@#$%^&*(),.?":{}|<>]/).test(loginData.password)){
      errors.passError = 'Atleast 1 special char required';
      
    }else if(!(/\d/).test(loginData.password)){
      errors.passError = "Atleast 1 numeric value required";
      
    }else if((loginData.conPassword).includes(' ')){
      errors.passError = "Password can't contains space";

    }else if((loginData.conPassword) !== (loginData.password)){
      errors.passError = "Password doesn't match";

    }

    setValidatioErrors(errors);
    if(!errors.nameError && !errors.emailError && !errors.passError && !errors.conPassError){
      validated = true;
    }
    
    // reinitialize the errors as empty to get rid of unexpected errors
    errors = {
      emailError: '',
      passError: '',
    }

    return validated; //return true if successfully validate else return false


  }

  //function to handle when data change in inputs
  const handleFormChange = (e) =>{
    const {name, value} = e.target;

    setLoginData({...loginData, [name]: value})
  }

  //function to submit signup data
  const submitHandler = (e) =>{
    e.preventDefault();

     if(validateLoginData()){ //calling validateSignupData function to validate all signup data
      console.log(loginData);
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
          <Link to={'/register'}>New User ?  <span>REGISTER</span></Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <div className="authIcons">
            <GoogleIcon className='icon' />
            <FacebookOutlinedIcon className='icon' />
          </div>
          <form onSubmit={submitHandler}>
            <div>
              <label>Email</label>
              <input type="text" onChange={(e)=>{handleFormChange(e)}} name='email' placeholder='Enter your Email' />
              <div className="error">
              {
                  validationErrors.emailError && validationErrors.emailError
                }
              </div>
            </div>

            <div>
                <label>Password</label>
                <input type="text" onChange={(e)=>{handleFormChange(e)}} name='password' placeholder='Enter your password' />
                <div className="error">
                {
                  validationErrors.passError && validationErrors.passError
                }
                </div>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;