import { configureStore } from "@reduxjs/toolkit";
import {productsSlice} from "./reducer";

const store = configureStore({
    reducer: productsSlice.reducer
    
});

export default store

