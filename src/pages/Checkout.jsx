import { FiX } from "react-icons/fi";
import { useGlobalApi } from "../manager/ContextProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { timeSchedule } from "../assets/staticData";
import axiosInstance from "../hooks/useAxios";

const variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.1,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Checkout() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [message, setMessage] = useState("");
  const [successCode, setSuccessCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("picking");
  const { profile, setShowForm, setBookingCodes, cartData, setIsCheckingOut } =
    useGlobalApi();

  const handleInput = (e) => {
    const date = new Date();
    const time = new Date(date.setMinutes(date.getMinutes() + parseInt(e)));
    setSelectedTime(time);
    setMessage({ time: "" });
  };

  const handleCheckout = async () => {
    if (!profile) {
      return setShowForm("login");
    } else if (!selectedTime) {
      setMessage({ time: "please choose time" });
    } else {
      setIsLoading(true);
      const requestBody = {
        cartData: cartData,
        userID: profile.userID,
        userName: profile.name,
        collectionTime: selectedTime,
        collectionMethod: deliveryMethod,
      };
      try {
        const results = await axiosInstance
          .post("/orders", requestBody)
          .then((res) => res);
        setSuccessCode(results.data.code);
        setBookingCodes((prev) => [...prev, results.data]);
      } catch (error) {}
    }
  };

  const clearOrderCard = () => {
    setIsLoading(false);
  };
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData
        .map((i) => i.price * i.qty)
        .reduce((a, t) => +a + +t);
      setTotalPrice(tPrice);
    }
  }, [cartData]);

  const loader = () => {
    return (
      <div className="h-screen fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white rounded p-8">
          {successCode ? (
            <div className="">
              <div className="flex items-center justify-end">
                <span className="text-xl font-bold mr-2">{successCode}</span>-
                <span>رمز الطلب</span>
              </div>
              <p className="text-right">شكرا طلبك سيكون جاهزا الساعة 5 مساء</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-5 py-2 rounded bg-cl1 text-white"
                  onClick={clearOrderCard}
                >
                  حسنًا
                </button>
              </div>
            </div>
          ) : (
            <div className="w-[80%] py-6">Loading...</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="h-screen fixed inset-0 z-40 bg-black/50 backdrop-blur origin-top flex items-center justify-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {isLoading && loader()}
        <div className="md:w-[40%] w-[90%] bg-white p-6 rounded shadow-md">
          <span className="" onClick={() => setIsCheckingOut(false)}>
            <FiX />
          </span>
          <div className="my-6">
            <div className="flex justify-between font-bold">
              <span>{totalPrice}</span>
              <span>السعر الصافي</span>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <span>{totalPrice}</span>
              <span>السعر الإجمالي</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[47%]">
              <span className="block text-right mb-2">وقت الاستلام</span>
              <select
                className={`${
                  message.time ? "border-red-500" : ""
                } cursor-pointer rounded-md drop-shadow-md bg-gray-50 w-full duration-300 border border-cl1`}
                onChange={(e) => handleInput(e.target.value)}
              >
                {timeSchedule.map((time, index) => (
                  <option value={time.val} key={index}>
                    {time.text}
                  </option>
                ))}
              </select>
              {message["time"] && (
                <span className="text-red-500 text-center my-2">
                  {message["time"]}
                </span>
              )}
            </div>
            <div className="w-[47%]">
              <span className="block text-right mb-2">طريقة الجمع</span>
              <select
                className="cursor-pointer rounded-md drop-shadow-md bg-gray-100 w-full duration-300 border border-cl1"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              >
                <option value="picking">الأخذ شخصيا</option>
                <option value="delivery">توصيل</option>
              </select>
            </div>
          </div>
          <button
            className="w-full rounded mt-5 py-2 bg-cl1 text-white"
            onClick={handleCheckout}
          >
            check out
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
