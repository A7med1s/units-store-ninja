import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const textVariants = {
  hover: {
    color: '#fcd34d',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-900 text-white p-4 mt-1"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex space-x-4 mt-4 md:mt-0"
        >
         <div className="text-xl font-bold cursor-pointer">Units <span className='text-yellow-500'>Store</span></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center md:space-x-4"
        >
          <motion.h2
            className="text-xl font-semibold mb-2 md:mb-0"
            variants={textVariants}
            whileHover="hover"
          >
            Follow Us
          </motion.h2>
          <div className="flex space-x-4">
            <motion.div variants={iconVariants} whileHover="hover">
              <FaFacebook className="text-2xl text-yellow-500 transition-colors" />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <FaTwitter className="text-2xl text-yellow-500 transition-colors" />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <FaInstagram className="text-2xl text-yellow-500 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
       
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-4"
      >
        <p>&copy; {new Date().getFullYear()} Your E-commerce. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;