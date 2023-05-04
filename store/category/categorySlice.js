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
    // extraReducers:{
    //     [fetchCategory.pending]:(state,action)=>{
    //         state.loading=true
    //     },
    //     [fetchCategory.fulfilled]:(state,action)=>{
    //         console.log("[state]",state.user);
    //         console.log("[action]",action);
    //         state.loading=false,
    //         state.categories=action.payload
    //     },
    //     [fetchCategory.rejected]:(state,action)=>{
    //         state.loading=true,
    //         state.error=action.payload
    //     },
    //     [fetchMenuListByCategory.pending]:(state,action)=>{
    //         state.loading=true
    //     },
    //     [fetchMenuListByCategory.fulfilled]:(state,action)=>{
    //         // console.log("[state]",state.user);
    //         // console.log("[action]",action);
    //         state.loading=false,
    //         state.categories=action.payload
    //     },
    //     [fetchMenuListByCategory.rejected]:(state,action)=>{
    //         state.loading=true,
    //         state.error=action.payload
    //     },
    // }

})

export default categorySlice.reducer
