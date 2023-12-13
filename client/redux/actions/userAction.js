import {userRequest, userSuccess, userFail, userError, clearError} from '../reducers/userReducer.js';

export const signup = (data) => async(dispatch) =>{
    try {
        dispatch(userRequest());
        // const {data} = api call

        if(data){
            dispatch(userSuccess(data))
        }else{
            dispatch(userFail())
        }
        
    } catch (error) {
        userError(signupError(error.response.data.message))
    }
}