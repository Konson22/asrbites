import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
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
          className="w-[170px] z-40 absolute top-full origin-top right-0 bg-white border rounded-md shadow-lg"
        >
          <Link
            className="flex items-center justify-end px-4 py-2 cursor-pointer"
            to="/profile"
          >
            ملفي الشخصي
            <FiUser className="ml-3" />
          </Link>
          <Link
            className="flex items-center justify-end px-4 py-2"
            to="/reservation"
          >
            حجزي
            <FiShoppingCart className="ml-3" />
          </Link>
          <div
            className="flex items-center justify-end px-4 py-2 cursor-pointer"
            onClick={signOutUser}
          >
            تسجيل الخروج
            <FaSignOutAlt className="ml-3" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
