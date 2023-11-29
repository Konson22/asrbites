import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function PriceSection() {
  return (
    <div className="">
      <div className="pinksvg md:h-[7rem] h-[5rem]"></div>
      <div className="bg-cl1 text-white px-[8%] py-[2rem]">
        <h3 className="title md:text-5xl text-3xl font-semibold text-center px-8 py-2">
          أسعارنا
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {prices.map((item, index) => (
            <PriceCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="pinksvg md:h-[7rem] h-[5rem] rotate-180"></div>
    </div>
  );
}

const PriceCard = ({ item }) => {
  const el = useRef(null);

  const isInView = useInView(el, { once: false, amount: 0.2 });

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      className="bg-white md:w-[250px] w-full md:rounded-t-[125px] rounded-md mx-auto relative mt-[80px]"
      variants={variants}
      initial="hidden"
      animate={mainControlls}
      ref={el}
    >
      <div
        className={`md:static absolute top-[-100px] flex justify-center w-full rounded-full`}
      >
        <div className="border-8 rounded-full m-[20px] md:border-none border-white bg-white md:p-0 p-1">
          <img
            className={`md:border-[10px] border-[12px] ${item.border} border-lightgra md:h-[210px] md:w-[210px] h-[160px] w-[160px] rounded-full ${item.bg}`}
            src={item.image}
            alt=""
          />
        </div>
      </div>
      <div
        className={`flex justify-center items-center text-2xl py-4 md:pt-0 pt-[100px] ${item.text}`}
      >
        <span className="text-3xl font-bold">{item.price}</span>
        <span>ر.س</span>/package
      </div>
      <div className={` ${item.bg} p-5`}>
        <p className="text-xl text-center md:font-bold">{item.title}</p>
        <ul>
          <li className="py-2 border-t">- Free 1 Cupcakes</li>
          <li className="py-2 border-t">- 10 Cupcakes</li>
          <li className="py-2 border-t">- Free Order</li>
        </ul>
      </div>
      <button className={`rounded-b-md ${item.btn} w-full py-3`}>Order</button>
    </motion.div>
  );
};
const prices = [
  {
    title: "تشكيلة واسعة من الكعك",
    image:
      process.env.PUBLIC_URL +
      "/images/—Pngtree—ordinary colorful candy feast_5516292.png",
    border: "border-cl2",
    bg: "bg-cl2/60",
    btn: "bg-cl2",
    text: "text-cl2",
    price: "13",
  },
  {
    title: "تصميم خاص للمناسبات",
    image:
      process.env.PUBLIC_URL +
      "/images/—Pngtree—ordinary colorful candy feast_5516292.png",
    border: "border-cl1",
    bg: "bg-cl1/60",
    btn: "bg-cl1/70",
    text: "text-cl1",
    price: "13",
  },
  {
    title: "جودة عالية وتفاصيل دقيقة",
    image:
      process.env.PUBLIC_URL +
      "/images/—Pngtree—ordinary colorful candy feast_5516292.png",
    border: "border-cl3",
    bg: "bg-cl3/60",
    btn: "bg-cl3",
    text: "text-cl3",
    price: "13",
  },
  {
    title: "Just Cupcakes + Free Order",
    image:
      process.env.PUBLIC_URL +
      "/images/—Pngtree—ordinary colorful candy feast_5516292.png",
    border: "border-cl2",
    bg: "bg-cl2/40",
    btn: "bg-cl2/60",
    text: "text-cl2",
    price: "13",
  },
];
