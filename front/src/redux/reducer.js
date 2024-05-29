import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: "productsData",
    initialState: initialState,
    reducers: {

        setInventory: (state,action) => {
            state.products = action.payload
        },


    }
})

export const {setInventory} = productsSlice.actions;