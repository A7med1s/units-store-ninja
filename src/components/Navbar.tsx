import React from 'react';
import {FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer"><Link to='/'>Units <span className='text-yellow-500'>Store</span></Link></div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 relative group" id='home-icon-lg'>Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <span className="absolute left-0 top-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link to="/category" className="hover:text-gray-300 relative group">Categories
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <span className="absolute left-0 top-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link to="/about-us" className="hover:text-gray-300 relative group">About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <span className="absolute left-0 top-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link to="/privacy-policy" className="hover:text-gray-300 relative group">P&P
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <span className="absolute left-0 top-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>
        <div className="flex space-x-4">
          
          <Link to={'/cart'}><FaShoppingCart className="hover:text-yellow-500 cursor-pointer" /></Link>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='hover:text-yellow-500'/> : <FaBars className='hover:text-yellow-500' />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden mt-4"
        >
          <Link onClick={toggleMenu} to="/" className="block py-2 hover:text-gray-300 relative group">Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link onClick={toggleMenu} to="/category" className="block py-2 hover:text-gray-300 relative group">Categories
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link onClick={toggleMenu} to="/about-us" className="block py-2 hover:text-gray-300 relative group">About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          <Link onClick={toggleMenu} to="/privacy-policy" className="block py-2 hover:text-gray-300 relative group">P&P
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;