// 

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Main App component that renders the loader
const Loader = () => {
  // State to control the visibility of the loader
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 flex flex-col items-center justify-center">
      {/* AnimatePresence allows components to animate out when removed from the React tree */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Animated text for "Studio Maanikh" */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Studio Maanikh
              </motion.h1>

              {/* Simple loading bar animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                style={{ maxWidth: '200px' }}
              ></motion.div>

              {/* Optional: A small, subtle loading message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-600"
              >
                Crafting beautiful spaces...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content of the website (hidden while loading) */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center p-8 max-w-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to Studio Maanikh!</h2>
          <p className="text-xl text-gray-700">
            Your journey to exquisite interior design begins here.
          </p>
          <p className="mt-4 text-gray-600">
            This is where your main website content would load after the loader disappears.
          </p>
          <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Explore Our Designs
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Loader;
