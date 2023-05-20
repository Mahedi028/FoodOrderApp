import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerUser,loginUser } from "./authActions";
//define state
const initialState={
    activeAccountStatus:false,
    isLoggedIn:false,
    loading:false,
    user:{},
    token:null,
    error:null,
    success:false,
    message:null,
    pageRefreshStatus:false,
    googleLoginRedirectUrl:"",
    email_verification_token:"",
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUserToken:(state,action)=>{
            state.loading = false
            state.token = action.payload
            state.error = null
        },
        logout: (state) => {
            AsyncStorage.removeItem('token')
            state.loading = false
            state.token = null
            state.error = null
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(registerUser.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(registerUser.fulfilled, (state,action)=>{
                state.loading=false,
                state.message=action.payload.message,
                state.error=null,
                state.success=true,
                state.email_verification_token=action.payload.email_verification_token
            })
            .addCase(registerUser,(state,action)=>{
                state.loading=true,
                state.error=action.payload
            })
            .addCase(loginUser.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                console.log("[login-action]",action.payload)
                state.loading=false,
                action.payload.user?state.user=action.payload.user:{},
                action.payload.token?state.token=action.payload.token:null,
                state.message=action.payload.message,
                state.error=null,
                state.success=true,
                state.isLoggedIn=action.payload.isLoggedIn,
                state.pageRefreshStatus=true
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.loading=true,
                state.error=action.payload
            })
    }

})


export const {logout, setUserToken}=authSlice.actions;

export default authSlice.reducer;
