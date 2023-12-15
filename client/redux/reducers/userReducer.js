import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    redirect: '',
    message: '',
    error: '',
}

const userReducer = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        userRequest: (state, action) =>{
            return { ...state, loading: true }
        },
        userSuccess: (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            state.redirect = action.payload.redirect;
            state.message = action.payload.message;
        },
        activateAccountSuccess: (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            state.redirect = action.payload.redirect;
            state.message = action.payload.message;
            state.isAuthenticated = action.payload.user.status === 'active' ? true : false;
            state.token = action.payload.message;
        },
        userFail: (state, action) =>{
            state.loading = false,
            state.isAuthenticated = false,
            state.user = {},
            state.error = ''
        },
        userError: (state, action) =>{
            state.error = action.payload;
        },
        clearSignupMessageAndError: (state) =>{
            state.loading= false;
            state.error = '';
            state.message = ''
        }
    }
})

export const {userRequest, userSuccess, userFail, userError, activateAccountSuccess, clearSignupMessageAndError} = userReducer.actions;

export default userReducer.reducer;