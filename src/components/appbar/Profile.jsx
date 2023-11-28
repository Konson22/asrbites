import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ isOpen, toggle }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg"
        >
          {/* Dropdown content goes here */}
          <div className="p-4">Dropdown Content</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;


import React, { useState } from 'react';
import Dropdown from './Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Toggle Dropdown
      </button>
      <Dropdown isOpen={isOpen} toggle={toggleDropdown} />
    </div>
  );
}

export default App;
