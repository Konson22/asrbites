import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimateRight({ children, cName='' }){

    const el = useRef(null);

    const isInView = useInView(el, { once:false, amount:.3 });

    const mainControlls = useAnimation();

    useEffect(() => {
      if(isInView){
        mainControlls.start('visible');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const variants = {
      visible:{ opacity: 1, x:0, transition: { duration: .5, }},
      hidden:{ opacity: 0, x: 100 },
    }

  return (
    <motion.div 
        className={cName}
        variants={variants}
        initial='hidden'
        animate={mainControlls}
        ref={el}
    >
      {children}
    </motion.div>
  );
}

export function AnimateBottom({ children, cName='' }){

    const el = useRef(null);

    const isInView = useInView(el, { once:false,  amount:.3 });

    const mainControlls = useAnimation();

    useEffect(() => {
      if(isInView){
        mainControlls.start('visible');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const variants = {
      visible:{ opacity: 1, x:0, transition: { duration: .5 }},
      hidden:{ opacity: 0, x: -100 },
    }

  return (
    <motion.div 
        className={cName}
        variants={variants}
        initial='hidden'
        animate={mainControlls}
        ref={el}
    >
      {children}
    </motion.div>
  );
}


export function AnimateLeft({ children, cName='' }){

    const el = useRef(null);

    const isInView = useInView(el, { once:false,  amount:.3 });

    const mainControlls = useAnimation();

    useEffect(() => {
      if(isInView){
        mainControlls.start('visible');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const variants = {
      visible:{ opacity: 1, x:0, transition: { duration: .5 }},
      hidden:{ opacity: 0, x: -100 },
    }

  return (
    <motion.div 
        className={cName}
        variants={variants}
        initial='hidden'
        animate={mainControlls}
        ref={el}
    >
      {children}
    </motion.div>
  );
}

