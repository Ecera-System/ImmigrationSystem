import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: null,
}

const userReducer = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        userRequest: (state, action) =>{
            return { ...state }
        },
        userSuccess: (state, action) =>{
            state.loading = true;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        userFail: (state, action) =>{
            state.loading = false,
            state.isAuthenticated = false,
            state.user = {},
            state.error = null
        },
        userError: (state, action) =>{
            state.error = action.payload;
        },
        clearError: (state) =>{
            state.loading= false;
            state.isAuthenticated= false;
            state.user = {};
            state.error = null
        }
    }
})

export const {userRequest, userSuccess, userFail, userError, clearError} = userReducer.actions;

export default userReducer.reducer;