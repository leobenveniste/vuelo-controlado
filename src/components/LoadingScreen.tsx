import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="loader-container"
    >
      <div className="loader"></div>
    </motion.div>
  );
};

export default LoadingScreen;
