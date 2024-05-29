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

export const {setUser, setInventory, cancelAppointments, removeUser} = productsSlice.actions;