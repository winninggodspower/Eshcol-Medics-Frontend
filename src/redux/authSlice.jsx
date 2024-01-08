import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const authSlice = createSlice({
    name: 'auth',
    initialState: {refreshToken: null, accessToken :null, isAuthenticated: false},
    reducers: {
        setCredentails: (state, action)=>{
            const { refreshToken, accessToken } = action.payload;
            state.refreshToken = refreshToken;
            state.accessToken = accessToken;
            state.isAuthenticated = true;

            console.log(action.payload);
            Cookies.set('refreshToken', state.refreshToken);
        },
        logOut: (state, action)=>{
            state.refreshToken = null;
            state.accessToken = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCredentails, logOut } = authSlice.actions

export default authSlice.reducer
