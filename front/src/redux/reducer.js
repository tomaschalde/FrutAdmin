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
                if(product.name === action.payload.name){ 
                    return {...product, stock: product.stock + action.payload.stock}
                }
                
            })
        }

    }
})

export const {updatedStock, setInventory} = productsSlice.actions;