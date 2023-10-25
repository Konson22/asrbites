import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedCard from "../../components/AnimateCard";
import { motion } from 'framer-motion';


export default function Header() {

  const variants = { visible:{ opacity: 1, y: 0}, hidden:{ opacity: 0, y: 50 }}

 
  return (
    <>
    <header className="header-container md:py-[18vh] py-[7vh] flex items-center justify-center px-[12%]">
      <motion.div 
        className="md:w-[78%] mb-8"
        variants={variants} 
        initial='hidden'
        animate='visible'
        transition={{duration:1, staggerChildren:.3}}
      >
        <motion.h1 variants={variants} className="md:text-6xl text-3xl text-white font-bold text-center">تذوق لذة الحلا مع تشكيلتنا الرائعة من الكيك والشوكولاتة</motion.h1>
        <motion.div variants={variants} className="flex justify-end">
          <Link className="bg-rose-700 flex font-bold items-center text-white rounded px-5 py-3 mt-12" to='/store'>
          <FaArrowLeft className="mr-2" />
          <span className="text-base">الدخول</span>
          </Link> 
        </motion.div>
      </motion.div>
    </header>
    <div className="bg-white py-[2rem] md:mx-[15%] mx-3 md:mt-[-5rem] mt-[-3rem] rounded-2xl">
      <div className="text-center text-4xl font-bold mb-7">الأصناف</div>
      <div className="text-center grid md:grid-cols-4 grid-cols-2 gap-5">
        {categories.map(category => (
          <AnimatedCard>
            <div className="" key={category.name}>
              <div className="h-[110px] w-[110px] rounded-full overflow-hidden bg-lightpink/50 mx-auto mb-4">
                <img src={category.image} alt="" />
              </div>
              <span className="md:text-2xl text-2xl">{category.name}</span>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
    </>
  )
}


export const categories = [
  {name:'معجنات', text:'', image:process.env.PUBLIC_URL+'/images/cookies-8082386_1280.jpg'},
  {name:'حلا', text:'', image:process.env.PUBLIC_URL+'/images/cube3.jpeg'},
  {name:'كيك', text:'', image:process.env.PUBLIC_URL+'/images/cube3.jpeg'},
  {name:'أسر منتجة', text:'', image:process.env.PUBLIC_URL+'/images/green.jpeg'},
]