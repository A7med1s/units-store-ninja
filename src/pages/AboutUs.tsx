// src/components/AboutUs.tsx
import React from 'react';
import { FaStore } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white text-blue-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <FaStore className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl mb-4">
            Welcome to <span className="text-yellow-500">Units Store</span>, your number one source for all things . We're dedicated to providing you the very best of product, with an emphasis on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Founded in [2024] by <span className='font-semibold '>Ahmed Samy</span>, Units Store has come a long way from its beginnings in Egypt. When Ahmed Samy first started out, his passion for products drove them to start their own business.
          </p>
          <p className="text-lg md:text-xl mb-4">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-lg md:text-xl font-bold">
            Sincerely, <br /> Ahmed Samy, Founder
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;