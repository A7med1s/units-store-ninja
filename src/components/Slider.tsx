import React, { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://mobizil.com/wp-content/uploads/2021/03/OnePlus-9-Series-Launch.jpg',
    title: 'Slide 1',
    description: 'This is the first slide',
  },
  {
    id: 2,
    image: 'https://mobizil.com/wp-content/uploads/2021/03/OnePlus-9-Series-Launch.jpg',
    title: 'Slide 2',
    description: 'This is the second slide',
  },
  {
    id: 3,
    image: 'https://mobizil.com/wp-content/uploads/2021/03/OnePlus-9-Series-Launch.jpg',
    title: 'Slide 3',
    description: 'This is the third slide',
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-2">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
      >
        <FaChevronRight />
      </button> */}
    </div>
  );
};

export default Slider;