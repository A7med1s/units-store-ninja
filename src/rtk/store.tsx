import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import currentProductSlice from './slices/currentProductSlice.js'
export const myStore = configureStore({
    reducer:{
        cart:cartSlice,
        product:currentProductSlice
    }
})