import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Dropdown = ({ isOpen, toggle, signOutUser }) => {
  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="absolute top-full origin-top right-4 bg-white border rounded-md shadow-lg"
        >
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-end px-4 py-2"
          >
            Profile
            <FiUser className="ml-3" />
          </motion.div>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-end px-4 py-2"
          >
            my reservations
            <FiShoppingCart className="ml-3" />
          </motion.div>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center px-4 py-2"
            onClick={signOutUser}
          >
            my reservations
            <FaSignOutAlt className="ml-3" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
