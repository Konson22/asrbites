import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { categories } from "../../assets/data";


export default function Header() {

  const variants = { visible:{ opacity: 1, y: 0}, hidden:{ opacity: 0, y: 20 }}
  
 
  return (
    <>
    <header className="header-container md:py-[18vh] py-[7vh] flex items-center justify-center px-[12%]">
      <motion.div 
        className="md:w-[78%]"
        variants={variants} 
        initial='hidden'
        animate='visible'
        transition={{duration:1, staggerChildren:.3}}
      >
        <motion.h1 variants={variants} className="md:text-6xl text-3xl text-white font-bold text-center">تذوق لذة الحلا مع تشكيلتنا الرائعة من الكيك والشوكولاتة</motion.h1>
        <motion.div variants={variants} className="flex justify-end">
          <Link className="bg-rose-700 flex font-bold items-center text-white rounded px-5 py-3 mt-8" to='/store'>
          <FaArrowLeft className="mr-2" />
          <span className="text-base">إبدأ التسوق</span>
          </Link> 
        </motion.div>
      </motion.div>
    </header>
    <div className="bg-lightteal text-white px-[10%] py-[3rem]">
      <div className="text-center grid md:grid-cols-6 grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <div className="" key={index}>
            <div className="md:h-[110px] h-[70px] md:w-[110px] w-[70px] hover:scale-110 border-2 hover:border-rose-700 rounded-full overflow-hidden bg-lightpink/50 mx-auto mb-4">
              <img src={category.image} alt="" />
            </div>
            <span className="md:text-2xl text-xl">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
    {/* <div className="header-card bg-lightteal md:p-[2rem] p-[1rem] md:mx-[10%] mx-3 md:mt-[-7rem] mt-[-3rem] rounded-2xl">
      <div className="text-center md:text-2xl text-2xl md:font-bold mb-7">الأصناف</div>
      <div className="text-center grid md:grid-cols-6 grid-cols-3 gap-5">
        {categories.map(category => (
          <AnimatedCard>
            <div className="" key={category.name}>
              <div className="md:h-[110px] h-[70px] md:w-[110px] w-[70px] hover:scale-110 border-2 hover:border-rose-700 rounded-full overflow-hidden bg-lightpink/50 mx-auto mb-4">
                <img src={category.image} alt="" />
              </div>
              <span className="md:text-2xl text-xl">{category.name}</span>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div> */}
    </>
  )
}

