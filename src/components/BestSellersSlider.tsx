import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Product 1',
    price: '$100',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Product 2',
    price: '$200',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Product 3',
    price: '$300',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    price: '$400',
  },
];

const BestSellersSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-900 text-white p-4 rounded-lg mt-8">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
        <div className="flex space-x-4">
          <FaUser className="text-2xl" />
          <FaShoppingCart className="text-2xl" />
        </div>
      </header>
      <div className="relative h-64">
        <AnimatePresence>
          {products.map((product, index) =>
            index === currentSlide ? (
              <motion.div
                key={product.id}
                className="absolute inset-0 bg-white text-blue-900 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-lg">{product.price}</p>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BestSellersSlider;