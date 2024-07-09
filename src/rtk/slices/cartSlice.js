import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    initialState : [],
    name :"cart-slice",
    reducers :{
        addToCart(state,action){
            const findProduct = state.find((product)=>{
                return product.id ===action.payload.id
            })
            if(findProduct){
                findProduct.quantity +=1;
            }else{
                const productClone = {...action.payload,quantity:1}
               
                 state.push(productClone)
            }
        },
        removeFromCart(state,action){
            return state.filter((product)=>{
                return product.id !== action.payload.id
            })
        },
        addQuantity(state,action){
            const findProduct = state.find((product)=>{
                return product.id ===action.payload.id
            })
            if(findProduct){
                findProduct.quantity +=1;
            }else{
                const productClone = {...action.payload,quantity:1}
               
                 state.push(productClone)
            }
        },
        removeQuantity(state,action){
            const findProduct = state.find((product)=>{
                return product.id ===action.payload.id
            })
            if(findProduct){
                findProduct.quantity -=1;
                if(findProduct.quantity <= 1){
                    findProduct.quantity = 1
                }
            }
            
    }
}
})
export const {addToCart,removeFromCart,addQuantity,removeQuantity} =cartSlice.actions
export default cartSlice.reducer


