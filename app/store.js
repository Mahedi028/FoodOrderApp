import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/category/categorySlice";
import menuSlice from "../store/menu/menuSlice";
import authSlice from "../store/auth/authSlice";
import userSlice from "../store/user/userSlice";
const Store=configureStore({
    reducer:{
        auth:authSlice,
        category:categorySlice,
        menu:menuSlice,
        user:userSlice
    }
})

export default Store;