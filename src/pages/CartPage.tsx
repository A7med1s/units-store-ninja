import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { motion } from 'framer-motion';
import {FaTrash, FaPlus} from 'react-icons/fa'
import {removeFromCart,addQuantity,removeQuantity} from '../rtk/slices/cartSlice.js'
import { BiArrowBack } from 'react-icons/bi';
const CartPage: React.FC = () => {
  const dispatch = useDispatch()
  const myCart = useSelector((state:any)=>state.cart)

  const totalAmount = myCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-blue-900 text-white min-h-screen p-4">
      <header className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
        <BiArrowBack className='text-yellow-500 text-3xl cursor-pointer' onClick={()=>{
      window.history.back()
    }}/>
        </div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-blue-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
        <div className="space-y-4">
          {myCart.map(item => (
            <motion.div
              key={item.id}
              className="flex justify-between items-center p-4 border-b border-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <FaTrash className='cursor-pointer' onClick={()=>{
                  dispatch(removeFromCart(item))
                }}/>
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                 <FaPlus className='cursor-pointer' onClick={()=>{
                  dispatch(addQuantity(item))
                }}/>
                <p className='font-extrabold text-xl cursor-pointer'  onClick={()=>{
                  dispatch(removeQuantity(item))
                }}>-</p>
                </div>
              </div>
              
              <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total Amount</h3>
          <p className="text-xl font-semibold">${totalAmount.toFixed(2)}</p>
        </div>
        <button
          className="mt-6 w-full bg-blue-900 text-white p-2 rounded-md hover:bg-yellow-500 transition-all"
        >
          Checkout
        </button>
      </motion.div>
    </div>
  );
};

export default CartPage;