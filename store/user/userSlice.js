import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userActions";

const initialState={
    userData:{},
    loading:false,
    error:null,
    pageRefreshStatus:false
}

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUser.pending, (state)=>{
                state.loading=true
            })
            .addCase(fetchUser.fulfilled, (state,action)=>{
                // console.log("[state]",state.userData);
                // console.log("[action]",action);
                state.loading=false,
                state.userData=action.payload,
                state.pageRefreshStatus=true
            })
            .addCase(fetchUser.rejected, (state,action)=>{
                state.loading=true,
                state.error=action.payload
            })
    }
})

export default userSlice.reducer
