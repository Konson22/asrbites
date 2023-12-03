import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <header className="header-container md:py-[18vh] py-[11vh] flex items-center justify-center px-[12%]">
      <motion.div
        className="md:w-[78%]"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        <motion.h1
          variants={variants}
          className="md:text-6xl text-3xl text-white font-bold text-center"
        >
          تذوق لذة الحلا مع تشكيلتنا الرائعة من الكيك والشوكولاتة
        </motion.h1>
        <motion.div variants={variants} className="flex justify-end">
          <Link
            className="bg-cl1 flex font-bold items-center text-white rounded px-5 py-3 mt-8"
            to="/store"
          >
            <FaArrowLeft className="mr-2" />
            <span className="text-base">تصفح منتجاتنا</span>
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}
