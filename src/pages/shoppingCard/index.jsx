import { useEffect, useState } from "react";
import { useGlobalApi } from "../../manager/ContextProvider";
import { FiX } from "react-icons/fi";
import axios from "axios";
import axiosInstance from "../../hooks/useAxios";
import diffDates from "diff-dates";
import { formateTime } from "../../components/formateTime";
import ShoppingDetails from "./ShoppingDetails";
import CardInformation from "./CardInformation";

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
    <div className="md:mx-[15%] mx-4 md:flex mt-8">
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

// function CheckoutPopUp() {
//   const [location, setLocation] = useState(null);
//     axios("http://ip-api.com/json").then((res) => console.log(res.data));

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//         },
//         (error) => {
//           console.error("Error getting location:", error.message);
//         }
//       );
//     }
//   }, []);

//   console.log(location);
//   return (
//     <div className="h-[dvh] fixed inset-0 bg-black/20 backdrop-blur-md z-50 flex items-center justify-center">
//       <div className="bg-white md:w-[50%] w-[80%] p-6">
//         <div className="md:flex justify-between">
//           <div className="md:w-[47%] md:my-0 my-5">
//             <span className="block text-right mb-2">وقت الاستلام</span>
//             <select
//               name="country"
//               className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
//             >
//               {timeSchedule.map((time, index) => (
//                 <option value={time.val} key={index}>
//                   {time.text}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="md:w-[47%]">
//             <span className="block text-right mb-2">طريقة الجمع</span>
//             <select
//               name="country"
//               className="border-0 cursor-pointer rounded-md drop-shadow-md bg-sky-200 w-full duration-300 hover:bg-sky-400 focus:bg-amber-300"
//             >
//               <option value="collection">الأخذ شخصيا</option>
//               <option value="delivery">توصيل</option>
//             </select>
//           </div>
//         </div>
//         <button className="w-full bg-cl1 py-2 rounded text-white mt-4">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

const timeSchedule = [
  { val: 10, text: "١٠  - ٢٠ دقيقة" },
  { val: 30, text: "٢٠ - ٤٠ دقيقة" },
  { val: 60, text: "٤٠ -  ٦٠ دقيقة" },
  { val: 120, text: "٤٠ -  ٦٠ دقيقة" },
];
