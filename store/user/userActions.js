import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import AppUrl from "../../api/AppUrl";


export const fetchUser=createAsyncThunk("user/fetchUser",async(rejectedWithValue)=>{

    try{

         //define config
    //      const config={
    //     // Headers:{'Content-type':'multipart/form-data'}
    //     Headers:{
    //         'Content-type':'application/json',
    //         'Accept':'application/json',
    //         'Authorization':`Bearer ${token}`,
    //     }
    // }

        //define url
        const url=AppUrl.LoginUserData
        console.log("[url]",url)
        
        const response=await axios.get(url)

        console.log("[header]",response.headers)
        console.log('user',response.data.data)

    // if(response.status===200){
        return response.data.data;
    // }

    }catch(error){
        console.log("[error]",error)
        console.log("[header]",response.headers)
        return rejectedWithValue(error)
    }
});
