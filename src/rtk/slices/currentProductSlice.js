import {createSlice} from "@reduxjs/toolkit"

export const currentProductSlice= createSlice({
    initialState :{},
    name :"current-product-slice",
    reducers:{
        getProduct :(state,action)=> {
            return state = action.payload;
        } 
    }
})


export const {getProduct} = currentProductSlice.actions
export default currentProductSlice.reducer