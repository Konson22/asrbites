import {
  FiMapPin,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  // FiTruck,
  FiX,
} from "react-icons/fi";
import { useGlobalApi } from "../manager/ContextProvider";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function ShoppingCardPage() {
  const {
    cartData,
    removeItem,
    clearSavedCartItem,
    // bookingCodes,
    setBookingCodes,
  } = useGlobalApi();
  const [selectedTime, setSelectedTime] = useState(null);
  const [openCard, setOpenCard] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("picking");
  const [totlaPrice, setPrice] = useState(0);
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handleReserve = async () => {
    setIsLogedIn(false);
    if (selectedTime) {
      try {
        const data = {
          cartData,
          collectionTime: selectedTime,
          collectionMethod: deliveryMethod,
        };
        const results = await axiosInstance
          .post("/products/reservation", data)
          .then((res) => res);
        if (results.data.done) {
          setBookingCodes((prev) => {
            localStorage.setItem(
              "booking-codes",
              JSON.stringify([...prev, results.data.cart])
            );
            return [...prev, results.data.cart];
          });
          clearSavedCartItem();
          setOpenCard(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData.map((i) => i.price).reduce((a, t) => +a + +t);
      setPrice(tPrice);
    }
  }, [cartData]);

  return (
    <div className="md:px-[15%] px-3 md:mt-8 my-4">
      {!isLogedIn && <LoginUser />}
      {openCard && (
        <ReserveDilog
          handleReserve={handleReserve}
          setSelectedTime={setSelectedTime}
          setOpenCard={setOpenCard}
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
        />
      )}
      {cartData.length > 0 ? (
        <div className="md:flex">
          <div className="flex-1 shadow bg-white rounded-md md:px-5 px-3">
            <div className="flex items-center justify-end py-3">
              <h3 className="md:text-xl text-xl text-right">المنتجات</h3>
              <FiShoppingCart className="md:text-3xl text-3xl ml-3" />
            </div>
            <table className="w-full">
              <thead className="">
                <tr className="text-right">
                  <th className=""></th>
                  <th className="px-2 py-3">السعر </th>
                  <th className="md:block hidden px-2 py-3">السعر</th>
                  <th className="px-2 py-3">الكمية</th>
                  <th className="px-2 py-3">الإسم</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item, index) => (
                  <tr
                    key={index}
                    className="text-right rounded-md overflow-hidden border-t mb-[1rem]"
                  >
                    <td className="md:p-2">
                      <button
                        className="flex items-center bg-red-700 hover:bg-red-500 text-white rounded px-2 py-1"
                        onClick={() => removeItem(item.productID)}
                      >
                        <span className="md:block hidden">إزالة</span>
                        <FiX className="md:ml-2" />
                      </button>
                    </td>
                    <td className="p-2">
                      {Math.round(item.qty * item.price)} ر.س
                    </td>
                    <td className="md:block hidden p-2">{item.price} ر.س</td>
                    <td className="p-2">{item.qty}</td>
                    <td className="flex items-center text-right p-2">
                      <div className="flex-1">{item.name}</div>
                      <img
                        className="h-11 w-11 ml-2 rounded"
                        src={`${process.env.REACT_APP_API}/${item.product_image}`}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:w-[40%] bg-white overflow-hidden rounded-md shadow md:ml-4 md:mt-0 mt-5">
            <div className="px-5 py-2">
              <h3 className="md:text-xl text-xl text-right">المنتجات</h3>
            </div>
            <div className="px-5 mb-4">
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
                  <span className="font-bold">
                    {Math.floor(totlaPrice * 0.05)}
                  </span>
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
            </div>
            <ReserveDilog
              handleReserve={handleReserve}
              setSelectedTime={setSelectedTime}
              deliveryMethod={deliveryMethod}
              setDeliveryMethod={setDeliveryMethod}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 bg-white rounded-md mt-4">
            <div className="bg-gray-200 flex items-center justify-end p-3">
              <h3 className="md:text-2xl text-xl text-right">المنتجات</h3>
              <FiShoppingCart className="md:text-4xl text-3xl ml-3" />
            </div>
            <div className="px-6 py-10">
              <p className="text-xl text-right">
                سلة التسوق فارغة! استمتع بتصفح تشكيلتنا الرائعة من الكيك
                والحلويات. انقر على الزر لبدء التسوق الآن."
              </p>
              <Link className="flex justify-end" to="/store">
                <button className="flex items-center bg-rose-700 text-white rounded mt-4 md:px-4 px-3 md:py-3 py-2">
                  إبدأ التسوق
                  <FiShoppingCart className="md:text-2xl ml-3" />
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-[33%] bg-white md:ml-6 mt-4">
            <div className="bg-gray-200 flex items-center justify-end p-3">
              <h3 className="md:text-2xl text-xl text-right">تفاصيل الدفع</h3>
              <FiShoppingBag className="md:text-4xl text-3xl ml-3" />
            </div>
            <div className="text-xl px-6 py-10">
              <p>Nothing in cart</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ReserveDilog({
  handleReserve,
  setSelectedTime,
  deliveryMethod,
  setDeliveryMethod,
}) {
  const handleInput = (e) => {
    const date = new Date();
    const time = new Date(
      date.setMinutes(date.getMinutes() + parseInt(e.target.value))
    );
    setSelectedTime(time);
  };

  return (
    <div className="">
      <div className="pinksvg md:h-[3rem] h-[5rem]"></div>
      <div className="bg-cl1 text-white">
        <div className="px-5 py-2">
          <h3 className="md:text-xl text-xl text-right">المنتجات</h3>
        </div>
        <div className="px-5 py-3">
          <div className="flex justify-between items-center mb-8">
            <div className="mr-2">
              <h4 className="text-right mb-2">delivery method</h4>
              <select
                className="bg-gray-100 text-gray-600 w-full border text-right px-4 py-2"
                onChange={handleInput}
              >
                {timeSchedule.map((time, index) => (
                  <option value={time.val} key={index}>
                    {time.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-2">
              <h4 className="text-right mb-2">delivery method</h4>
              <select
                className="bg-gray-100 text-gray-600 w-full border text-right px-4 py-2"
                onChange={(e) => setDeliveryMethod(e.target.value)}
              >
                <option value="picking">picking</option>
                <option value="delivery">delivery</option>
              </select>
            </div>
          </div>
          {deliveryMethod === "delivery" && (
            <button className="w-full flex justify-center items-center bg-white py-2 text-cl1 mb-4">
              <FiMapPin /> Give your address
            </button>
          )}
          <button
            className="w-full bg-white py-2 text-cl1"
            onClick={handleReserve}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginUser() {
  const { GoogleAuthHandler } = useGlobalApi();
  return (
    <div className="h-screen fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white md:w-[35%] w-[90%] p-10">
        <form>
          <div className="flex mb-6 rounded">
            <span className="flex items-center text-white text-xl bg-cl1/50 px-3">
              <FiUser />
            </span>
            <input
              className="h-[2.8rem] bg-gray-50 w-full focus:border-none px-3"
              type="text"
              placeholder="User name"
            />
          </div>
          <div className="flex border border-cl1 mb-6">
            <span className="flex items-center text-cl4 text-xl bg-gray-200 px-3">
              <FiUser />
            </span>
            <input
              className="h-[2.8rem] bg-gray-50 w-full focus:border-none px-3"
              type="text"
              placeholder="User name"
            />
          </div>
          <button className="w-full bg-cl1 text-white py-2">Login</button>
        </form>
        <div className="mt-6">
          <span className="block text-xl text-center mb-3">Login with</span>
          <div className="flex justify-between">
            <span className="w-[48%] flex items-center justify-center py-2 border bg-sky-600 text-white">
              <FaFacebook className="text-xl" />
              Facebook
            </span>
            <span
              className="w-[48%] flex items-center px-4 py-2 border bg-red-600 text-white"
              onClick={GoogleAuthHandler}
            >
              <FaGoogle className="text-2xl" />
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const timeSchedule = [
  { val: 10, text: "١٠  - ٢٠ دقيقة" },
  { val: 30, text: "٢٠ - ٤٠ دقيقة" },
  { val: 60, text: "٤٠ -  ٦٠ دقيقة" },
  { val: 120, text: "٤٠ -  ٦٠ دقيقة" },
];
