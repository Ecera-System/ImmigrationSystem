import {userRequest, userSuccess, userFail, userError, clearError} from '../reducers/userReducer.js';
import axios from 'axios'

export const signup = (signupData) => async(dispatch) =>{
    try {
        dispatch(userRequest());
        // const {data} = api call

        const config = { Headers: { "Content-Type": "application/json"}};

        console.log("APi Called successfulyy")
        const {data} = await axios.post('/api/v1/user/register', signupData, config);

        console.log(data);

        if(data.success){
            dispatch(userSuccess(data))
        }else{
            dispatch(userFail(data.message))
        }
        
    } catch (error) {
        console.log(error)
        dispatch(userError(error.response.data.message))
    }
}