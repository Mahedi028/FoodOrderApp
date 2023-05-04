import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../store/category/categorySlice";
import menuSlice from "../store/menu/menuSlice";
const Store=configureStore({
    reducer:{
        category:categorySlice,
        menu:menuSlice,
    }
})

export default Store;