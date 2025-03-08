// src/components/ErrorPopup.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ErrorPopup = ({ onRetry }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center mx-4"
        >
          <h2 className="text-xl font-semibold mb-4">Oops, something went wrong!</h2>
          <button
            onClick={onRetry}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Try Again
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorPopup;
