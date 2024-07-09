import React, { useState,useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi'; 
import { motion ,AnimatePresence} from 'framer-motion';
import { useSelector,useDispatch } from 'react-redux'
import {addToCart} from '../rtk/slices/cartSlice.js'
import img1 from '../assets/electronics/laptops/HUAWEI MateBook D15.jpg'
import img2 from '../assets/electronics/laptops/Huawei Matebook 14.jfif'
import img3 from '../assets/electronics/phones/iphone 7 plus.webp'
import img4 from '../assets/electronics/phones/iphone12pro max.jfif'
import img5 from '../assets/clothes/footwear/Nike PH.png'
import img6 from '../assets/clothes/footwear/Stan Smith 80s.jfif'
interface Product {
  id:string;
  name:string;
  img:string;
  price :number;
  stock: number;
  shipping :boolean;
  color:string;
  type:string
  }
  
  const products: Product[] = [
    {
      id:'4-l',
      name:'HUAWEI MateBook D15',
      img:img1,
       price:1500,
      stock:18,
      shipping:true,
     color:'bg-yellow-500', type:'laptop'
      },
  {
      id:'5-l',
      name:'Huawei Matebook 14',
      img:img2,
       price:1350,
      stock:15,
      shipping:false,
      color:'bg-blue-500', type:'laptop'
      },
      {
        id:'6-m',
        name:'iphone 7 plus',
        img:img3,
        price:170,
        stock:24,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
    },
    {
        id:'7-m',
        name:'iphone12pro max',
        img:img4,
        price:1100,
        stock:9,
        shipping:false,
        color:'bg-blue-500', type:'mobile'
    },
    {
      id:'8-f',
      name:'Nike PH',
      img:img5,
      price:75,
      stock:16,
      shipping:false,
      color:'bg-yellow-500',
      type : "footwear"
  },
  {
      id:'9-f',
      name:'Stan Smith 80s',
      img:img6,
      price:25,
      stock:36,
      shipping:true,
      color:'bg-blue-500',
      type : "footwear"
  },
  ];
  
const ProductPage: React.FC = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const dispatch = useDispatch()
  const myProduct = useSelector((state:any)=>state.product)

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + products.length) % products.length);
  };

  const displayedProducts = [
    products[currentIndex % products.length],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];
  return (
    
    <div className="bg-blue-900 text-white min-h-screen p-4 ">
    <BiArrowBack className='text-yellow-500 text-3xl cursor-pointer' onClick={()=>{
      window.history.back()
    }}/>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-blue-900 p-6 rounded-lg shadow-lg mt-16"
      >
        <div className="flex flex-col md:flex-row md:space-x-6 ">
          <motion.img
            src={myProduct.img}
            alt={myProduct.name}
            className="w-full md:w-1/3 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="mt-4 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{myProduct.name}</h2>
            <p className="text-lg mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ab delectus, soluta laboriosam laudantium excepturi ipsa deleniti quam beatae nulla. Minus sapiente debitis quod rem rerum nam ipsa nem.</p>
            <p className="text-sm  mb-4">Available :{myProduct.stock}</p>
            <p className="text-xl font-semibold mb-4">${myProduct.price.toFixed(2)}</p>
            <button
            onClick={()=>{
              dispatch(addToCart(myProduct))
            }}
              className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-yellow-500 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
      <div className="bg-blue-900 text-white p-4 rounded-lg mt-8 mx-2">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Suggests</h2>
        <div className="flex space-x-4">
      
        </div>
      </header>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          <AnimatePresence>
            {displayedProducts.map((product) => (
             
              <motion.div 
                key={product.id}
                className="cursor-pointer bg-white text-blue-900 p-4 rounded-lg shadow-md flex-shrink-0 w-1/3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img src={product.img} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-lg">${product.price}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-2 rounded-full">
          &#8249;
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-2 rounded-full">
          &#8250;
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;