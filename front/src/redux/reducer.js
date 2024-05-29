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

        updatedStock: (state,action) => {
            state.products = state.products.map((product) => {
                return {...product, stock: product.stock += action.payload}
            })
        }

    }
})

export const {updatedStock, setInventory} = productsSlice.actions;