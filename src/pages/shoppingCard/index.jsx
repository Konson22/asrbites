import { useEffect, useState } from "react";
import { useGlobalApi } from "../../manager/ContextProvider";
import { FiX } from "react-icons/fi";
import axios from "axios";

export default function ShoppingCard() {
  const {
    cartData,
    profile,
    setShowForm,
    removeItem,
    clearSavedCartItem,
    setBookingCodes,
  } = useGlobalApi();
  return (
    <div className="md:mx-[15%] mx-4 md:flex my-5">
      {cartData.length > 0 ? (
        <>
          <CardInformation data={cartData} removeItem={removeItem} />
          <ShoppingDetails data={cartData} />
        </>
      ) : (
        <div className="">No data</div>
      )}
    </div>
  );
}

function CardInformation({ data, removeItem }) {
  return (
    <div className="flex-1 md:mr-6 bg-white p-5">
      <table className="table-auto w-full">
        <thead className="">
          <tr className="text-right">
            <th className=""></th>
            <th className="md:block hidden px-2 py-3">السعر </th>
            <th className="px-2 py-3">الكمية</th>
            <th className="px-2 py-3">الإسم</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
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
              <td className="md:block hidden p-2">
                {Math.round(item.qty * item.price)} ر.س
              </td>
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
  );
}

function ShoppingDetails({ data }) {
  const [totlaPrice, setPrice] = useState(0);
  return (
    <div className="md:w-[40%] bg-white px-6 py-4 rounded">
      <h3 className="md:text-xl text-xl text-right mb-4">المنتجات</h3>
      <div className="flex items-center justify-between py-2">
        <span className="font-bold">{data.length}</span>
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
            name="country"
            className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
          >
            {timeSchedule.map((time, index) => (
              <option value={time.val} key={index}>
                {time.text}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-[47%]">
          <span className="block text-right mb-2">طريقة الجمع</span>
          <select
            name="country"
            className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
          >
            <option value="collection">الأخذ شخصيا</option>
            <option value="delivery">توصيل</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-cl1 py-2 rounded text-white mt-4">
        Submit
      </button>
    </div>
  );
}

function CheckoutPopUp() {
  const [location, setLocation] = useState(null);
  //   axios("http://ip-api.com/json").then((res) => console.log(res.data));

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  }, []);

  console.log(location);
  return (
    <div className="h-[dvh] fixed inset-0 bg-black/20 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white md:w-[50%] w-[80%] p-6">
        <div className="md:flex justify-between">
          <div className="md:w-[47%] md:my-0 my-5">
            <span className="block text-right mb-2">وقت الاستلام</span>
            <select
              name="country"
              className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
            >
              {timeSchedule.map((time, index) => (
                <option value={time.val} key={index}>
                  {time.text}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-[47%]">
            <span className="block text-right mb-2">طريقة الجمع</span>
            <select
              name="country"
              className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
            >
              <option value="collection">الأخذ شخصيا</option>
              <option value="delivery">توصيل</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-cl1 py-2 rounded text-white mt-4">
          Submit
        </button>
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
