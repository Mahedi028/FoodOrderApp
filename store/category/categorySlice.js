import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchMenuListByCategory } from "./categoryActions";

const initialState={
    categories:[],
    loading:false,
    error:null
}

const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCategory.pending, (state,action)=>{
                state.loading=true
            })
            .addCase(fetchCategory.fulfilled,(state,action)=>{
                state.loading=false,
                state.categories=action.payload
            })
            .addCase(fetchCategory.rejected,(state,action)=>{
                state.loading=true,
                state.error=action.payload
            })
            .addCase(fetchMenuListByCategory.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(fetchMenuListByCategory.fulfilled,(state,action)=>{
                state.loading=false,
                state.categories=action.payload
            })
            .addCase(fetchMenuListByCategory.rejected,(state,action)=>{
                 state.loading=true,
                 state.error=action.payload
            })
    }
})

export default categorySlice.reducer
