import {userRequest, userSuccess, userFail, activateAccountSuccess, userError} from '../reducers/userReducer.js';
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