import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/clothes/t-shirts/J.VER Stretch shirt.jpg'
import img2 from '../assets/clothes/footwear/Nike Kd 17.png'
import img3 from '../assets/clothes/t-shirts/Polo T-shirt Navy & White.webp'
import img4 from '../assets/electronics/laptops/Huawei Matebook 14.jfif'
import img5 from '../assets/electronics/phones/oppo reno 6.jpg'
import img6 from '../assets/electronics/laptops/dell latitude e6440.webp'
import img7 from '../assets/clothes/footwear/Stan Smith 80s.jfif'
import img8 from '../assets/electronics/phones/xiaomi note 10.jpg'

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
    id:'4-c',
    name:'J.VER Stretch shirt',
    img:img1,
    price:80,
    stock:4,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
  },
  {
    id:'7-f',
        name:'Nike Kd 17',
        img:img2,
        price:76,
        stock:38,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
  },
  {
    id:'6-c',
    name:'Polo T-shirt Navy & White',
    img:img3,
    price:49,
    stock:15,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
  },
  {
    id:'5-l',
    name:'Huawei Matebook 14',
    img:img4,
     price:1350,
    stock:15,
    shipping:false,
    color:'bg-blue-500', type:'laptop'
    },

  {
    id:'10-m',
    name:'oppo reno 6',
    img:img5,
    price:420,
    stock:17,
    shipping:false,
    color:'bg-yellow-500', type:'mobile',
  },
  {
    id:'8-l',
    name:'dell latitude e6440',
    img:img6,
     price:690,
    stock:31,
    shipping:true,
   color:'bg-yellow-500', type:'laptop'
  },
  {
    id:'9-f',
    name:'Stan Smith 80s',
    img:img7,
    price:25,
    stock:36,
    shipping:true,
    color:'bg-blue-500',
    type : "footwear"
  },
  {
    id:'14-m',
        name:'xiaomi note 10',
        img:img8,
        price:250,
        stock:24,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
  },
];

const DiscountsPage: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white p-4 rounded-lg mt-8 mx-2">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-500">Discounts</h2>
        <div className="flex space-x-4">

        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white text-blue-900 p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-lg">{product.price}$</p>
            <del className="text-sm">{product.price * .85}$</del>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DiscountsPage;