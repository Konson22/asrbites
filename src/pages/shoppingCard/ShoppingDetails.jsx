import { useEffect, useState } from "react";
import { useGlobalApi } from "../../manager/ContextProvider";
import axiosInstance from "../../hooks/useAxios";

export default function ShoppingDetails() {
  const [totlaPrice, setPrice] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [message, setMessage] = useState("");
  const [successCode, setSuccessCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("picking");
  const { profile, setShowForm, setBookingCodes, cartData } = useGlobalApi();

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData
        .map((i) => i.price * i.qty)
        .reduce((a, t) => +a + +t);
      setPrice(tPrice);
    }
  }, [cartData]);

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
        collectionTime: selectedTime,
        collectionMethod: deliveryMethod,
      };
      try {
        const results = await axiosInstance
          .post("/orders", requestBody)
          .then((res) => res);
        console.log(results.data);
        setSuccessCode(results.data.code);
        setBookingCodes((prev) => [...prev, results.data]);
      } catch (error) {}
    }
  };

  const clearOrderCard = () => {
    setIsLoading(false);
  };

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
            <div className="">Loading...</div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="md:w-[40%] bg-white px-6 py-4 rounded">
      {isLoading && loader()}
      <h3 className="md:text-xl text-xl text-right mb-4">المنتجات</h3>
      {message.error && (
        <span className="text-red-500 text-center my-2">
          {message["error"]}
        </span>
      )}
      <div className="flex items-center justify-between py-2">
        <span className="font-bold">{cartData.length}</span>
        <span className="flex-1 h-[.1rem] border border-dashed border-gray-300 mx-3 mt-2"></span>
        <span className="text-right">عدد المنتجات</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="flex items-center">
          <span> ر.س</span>
          <span className="font-bold">{totlaPrice}</span>
        </span>
        <span className="flex-1 h-[.1rem] border border-dashed border-gray-300 mx-3 mt-2"></span>
        <span className="text-right">السعر</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="flex items-end">
          <span>ر.س</span>
          <span className="font-bold">{Math.floor(totlaPrice * 0.05)}</span>
        </span>
        <span className="flex-1 h-[.1rem] border border-dashed border-gray-300 mx-3 mt-1"></span>
        <span className="">التخفيض</span>
      </div>
      <div className="flex items-center py-2">
        <span className="flex items-end">
          <span>ر.س</span>
          <span className="font-bold">
            {Math.floor(totlaPrice - totlaPrice * 0.05)}
          </span>
        </span>
        <span className="flex-1 h-[.1rem] border border-dashed border-gray-300 mx-3 mt-1"></span>
        <span className="text-right">السعر الكلي</span>
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-[47%] md:my-0 my-5">
          <span className="block text-right mb-2">وقت الاستلام</span>
          <select
            className={`${
              message.time ? "border border-red-500" : "border-0"
            } cursor-pointer rounded-md drop-shadow-md bg-gray-50 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300`}
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
        <div className="md:w-[47%]">
          <span className="block text-right mb-2">طريقة الجمع</span>
          <select
            className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <option value="picking">الأخذ شخصيا</option>
            <option value="delivery">توصيل</option>
          </select>
        </div>
      </div>
      <button
        className="w-full bg-cl1 py-2 rounded text-white mt-4"
        onClick={handleCheckout}
      >
        Submit
      </button>
    </div>
  );
}

const timeSchedule = [
  { val: 10, text: "١٠  - ٢٠ دقيقة" },
  { val: 30, text: "٢٠ - ٤٠ دقيقة" },
  { val: 60, text: "٤٠ -  ٦٠ دقيقة" },
  { val: 120, text: "٤٠ -  ٦٠ دقيقة" },
];
