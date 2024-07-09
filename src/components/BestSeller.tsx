import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getProduct} from '../rtk/slices/currentProductSlice.js'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion';
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

const BestSeller3: React.FC = () => {
  const dispatch = useDispatch()
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
    <div className="bg-blue-900 text-white p-4 rounded-lg mt-8 mx-2">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Best Sellers</h2>
        <div className="flex space-x-4">
      
        </div>
      </header>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          <AnimatePresence>
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white text-blue-900 p-4 rounded-lg shadow-md flex-shrink-0 w-1/3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img src={product.img} alt={product.name} className="w-full h-36 object-cover rounded-lg mb-4" />
             <Link onClick={()=>{
               dispatch(getProduct(product))
              }} to={'/product'}>
               <h3 className="text-lg font-semibold">{product.name}</h3>
             </Link>
                <p className="text-lg cursor-pointer">${product.price}</p>
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
  );
};

export default BestSeller3;