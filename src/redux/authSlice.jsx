import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const authSlice = createSlice({
    name: 'auth',
    initialState: {refreshToken: null, accessToken :null, isAuthenticated: false, userInformation: false},
    reducers: {
        setCredentails: (state, action)=>{
            const { refreshToken, accessToken } = action.payload;
            state.refreshToken = refreshToken;
            state.accessToken = accessToken;
            state.isAuthenticated = true;

            // Decode the JWT
            const decodedInformation = jwtDecode(accessToken);
            state.userInformation = decodedInformation
            console.log(decodedInformation);

            Cookies.set('refreshToken', refreshToken);
        },
        clearCredentials: (state) => {
            state.refreshToken = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.userInformation = null;

            console.log('cleared credentials');
            Cookies.remove('refreshToken')
          },
    },
})

// Action creators are generated for each case reducer function
export const { setCredentails, logOut, clearCredentials } = authSlice.actions

export default authSlice.reducer
