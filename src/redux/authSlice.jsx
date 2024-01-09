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
        clearCredentials: (state) => {
            state.refreshToken = null;
            state.accessToken = null;
            state.isAuthenticated = false;

            console.log('cleared credentials');
            Cookies.remove('refreshToken')
          },
    },
})

// Action creators are generated for each case reducer function
export const { setCredentails, logOut, clearCredentials } = authSlice.actions

export default authSlice.reducer
