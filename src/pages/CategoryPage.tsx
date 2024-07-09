import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaMobileAlt, FaLaptop } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Mobiles', icon: <FaMobileAlt />, color: 'bg-blue-500' ,link: '/mobiles-page'},
  { name: 'Laptops', icon: <FaLaptop />, color: 'bg-yellow-500' ,link: '/labtops-page'},
  { name: 'Clothing', icon: <FaTshirt />, color: 'bg-blue-500' ,link: '/clothes-page'},
  { name: 'Footwear', icon: <GiRunningShoe />, color: 'bg-yellow-500' ,link: '/footwear-page'},
];

const CategoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      <header className=" text-yellow-500 p-2">
        <h1 className="text-2xl font-bold">Categories</h1>
      </header>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 cursor-pointer">
          {categories.map((category, index) => (
           <Link to={`${category.link}`}>
            <motion.div
         
              key={index}
              className={`p-6 rounded-lg shadow-lg ${category.color} text-white flex flex-col items-center`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-bold">{category.name}</h2>
            </motion.div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;