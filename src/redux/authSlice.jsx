import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {refreshToken: null, accessToken :null},
    reducers: {
        setCredentails: (state, action)=>{
            const { user, accessToken } = action.payload;
            state.refreshToken = user;
            state.accessToken = accessToken;
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
