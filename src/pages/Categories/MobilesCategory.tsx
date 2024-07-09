import React, { useState,useEffect } from 'react';
import {useDispatch} from "react-redux"
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import { Mobiles } from '../../data/MobilesData';
import { Link } from 'react-router-dom';
import {getProduct} from '../../rtk/slices/currentProductSlice.js'
import { BiArrowBack } from 'react-icons/bi'; 

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



const MobilesPage: React.FC = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<string>('');

  const filteredMobiles = Mobiles.filter(mobile => 
    mobile.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-900">
      <motion.header
        className=" mt-1 text-white p-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <BiArrowBack className='text-yellow-500 text-3xl cursor-pointer' onClick={()=>{
      window.history.back()
    }}/>
        <h1 className="text-2xl font-bold text-yellow-500">Mobiles</h1>
        <div className="flex items-center">
          <FaFilter className="mr-2" />
          <input
            type="text"
            placeholder="Filter by name"
            className="p-2 rounded text-blue-900"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </motion.header>
      <div className="p-4">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredMobiles.map((mobile, index) => (
            <Link to={'/product'}>
            <motion.div
            onClick={()=>{
              dispatch(getProduct(mobile))
            }}
              key={index}
              className={`cursor-pointer p-6 rounded-lg shadow-lg ${mobile.color} text-white flex flex-col items-center`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={mobile.img} alt={mobile.name} className="w-24 h-24 mb-4" />
              <h2 className="text-xl font-bold capitalize">{mobile.name}</h2>
              <p className="mt-2">{mobile.price}$</p>
             
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MobilesPage;