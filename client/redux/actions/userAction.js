import {userRequest, userSuccess, userFail, activateAccountSuccess, resendCodeSuccess, userError} from '../reducers/userReducer.js';
import axios from 'axios'

export const signup = (signupData) => async(dispatch) =>{
    try {
        dispatch(userRequest());

        const config = { Headers: { "Content-Type": "application/json"}};

        const {data} = await axios.post('/api/v1/user/register', signupData, config);

        if(data.success){
            dispatch(userSuccess(data))
        }else{
            dispatch(userFail(data.message))
        }
        
    } catch (error) {
        console.log(error)

        dispatch(userError(error.response.data.error))
        if(error.response.data.resendCode){
            dispatch(resendCode(error.response.data.email))
        }
    }
}

export const activateUser = (userData) => async(dispatch) =>{
    try {
        dispatch(userRequest());

        const config = { Headers: { "Content-Type": "application/json"}};

        const {data} = await axios.post('/api/v1/user/activate-account', userData, config);

        if(data.success){
            dispatch(activateAccountSuccess(data))
        }else{
            dispatch(userFail(data.message))
        }
        
    } catch (error) {
        console.log(error)
        dispatch(userError(error.response.data.error))
    }
}

export const resendCode = (email) => async(dispatch) =>{
    console.log('resend code')

    try {
        dispatch(userRequest());

        const config = { Headers: { "Content-Type": "application/json"}};
        const {data} = await axios.post('/api/v1/user/resend-code', {email}, config);

        if(data.success){
            dispatch(userSuccess(data));
        }else{
            dispatch(userFail(data.error))
        }
        
    } catch (error) {
        
    }
}

export const signin = (signinData) => async(dispatch) =>{
    try {
        dispatch(userRequest());

        const config = { Headers: { "Content-Type": "application/json"}};

        const {data} = await axios.post('/api/v1/user/sign-in', signinData, config);

        if(data.success){
            dispatch(activateAccountSuccess(data))
        }else{
            dispatch(userFail(data.message))
        }
        
    } catch (error) {
        console.log(error)
        dispatch(userError(error.response.data.error))
    }
}

export const loadUser = () => async(dispatch) =>{
    try {
        dispatch(userRequest());

        const {data} = await axios.get('/api/v1/user/single');

        if(data.success){
            dispatch(activateAccountSuccess(data))
        }else{
            dispatch(userFail(data.message))
        }
        
    } catch (error) {
        console.log(error)
        dispatch(userError(error.response.data.error))
    }
}