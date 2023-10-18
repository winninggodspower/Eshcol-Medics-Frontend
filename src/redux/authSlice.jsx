import { createSlice } from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token :null},
    reducers: {
        setCredentails: (state, action)=>{
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        logOut: (state, action)=>{
            state.user = null;
            state.token = null;
        },
    },
})

const getCurrentUser = (state) => state.auth.user;
const getCurrentToken = (state) => state.auth.token;

// Action creators are generated for each case reducer function
export const { setCredentails, logOut } = authSlice.actions

export default authSlice.reducer

export {getCurrentUser, getCurrentToken};
