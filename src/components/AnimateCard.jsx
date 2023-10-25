import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedCard({ children }){

    const el = useRef(null);

    const isInView = useInView(el, { once:false });

    const mainControlls = useAnimation();

    useEffect(() => {
      if(isInView){
        mainControlls.start('visible');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const variants = {
      visible:{ opacity: 1, y: 0, 
        transition: { 
          type: "spring", 
          stiffness: 120,
          when: "beforeChildren", 
          staggerChildren: 1
        }
      },
      hidden:{ opacity: 0, y: 50 },
    }

  return (
    <motion.div 
        variants={variants}
        initial='hidden'
        animate={mainControlls} 
        transition={{ duration: 0.75 }}
        ref={el}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
