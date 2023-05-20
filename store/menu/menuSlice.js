import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu, fetchMenus } from "./menuActions";

const initialState={
    menus:[],
    menuDetails:{},
    loading:false,
    error:null
}
const menuSlice=createSlice({
    name:"menu",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchMenus.pending,(state)=>{
                state.loading=true
            })
            .addCase(fetchMenus.fulfilled,(state,action)=>{
                // console.log("[action]",action);
                state.loading=false,
                state.menus=action.payload
            })
            .addCase(fetchMenus.rejected,(state,action)=>{
                state.loading=true,
                state.error=action.payload
            })

            .addCase(fetchMenu.pending,(state)=>{
                state.loading=true

            })
            .addCase(fetchMenu.fulfilled,(state,action)=>{
                // console.log("[state]",state.user);
                // console.log("[action]",action);
                state.loading=false,
                state.menuDetails=action.payload
            })
            .addCase(fetchMenu.rejected,(state,action)=>{
                state.loading=true,
                state.error=action.payload
            })
    }
})

export default menuSlice.reducer