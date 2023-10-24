import { FiTrash } from "react-icons/fi";
import GoBackButton from "../components/GoBackButton";
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";


export default function CartPage() {

  const { cartData, removeItem } = useGlobalApi();
  const [totlaPrice, setPrice] = useState(0);
  // const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if(cartData.length){
      const tPrice = cartData.map(i => i.price).reduce((a, t) => +a + +t)
      // setDiscount(tPrice * 0.1)
      setPrice(tPrice)
    }
  }, [])


  return (
    <div>
      <Navbar  icon={<GoBackButton />} text='My Cart' />
      {cartData.length > 0 &&
        <div className="md:flex md:px-[8%] px-3 md:mt-8 mt-4">
          <div className="flex-1 bg-white p-5">
            <h3 className="text-2xl text-right">المنتجات</h3>
            <table className="w-full bg-white">
              <thead className="">
                <tr className="text-right border-y">
                  <th className="p-2">السعر الكلي</th>
                  <th className="p-2">السعر الكلي</th>
                  <th className="p-2">السعر</th>
                  <th className="p-2">الكمية</th>
                  <th className="p-2">الإسم</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item, index) => (
                  <tr key={index} className="border-y rounded-md overflow-hidden border-4 border-white mb-[1rem]">
                    <td className="p-2">
                      <FiTrash className="text-red-500 text-xl" onClick={() => removeItem(item.id)} />
                    </td>
                    <td className="p-2">{item.price}</td>
                    <td className="p-2">{item.qty * item.price}</td>
                    <td className="p-2">{item.qty}</td>
                    <td className="flex items-center text-right p-2">
                      <div className="flex-1">{item.name}</div>
                      <img className="h-11 w-11 mr-2 rounded" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:w-[30%] bg-white md:ml-6 p-5 md:mt-0 mt-4">
            <h3 className="text-2xl text-right">تفاصيل الدفع</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-14 py-3">عدد المنتجات</td>
                  <td className="pl-10 py-3">{cartData.length}</td>
                </tr>
                <tr>
                  <td className="pr-14 py-3">السعر</td>
                  <td className="pl-10 py-3">{totlaPrice} SAR</td>
                </tr>
                <tr>
                  <td className="pr-14 py-3">التخفيض</td>
                  <td className="pl-10 py-3">{totlaPrice * 0.5} SAR</td>
                </tr>
                <tr>
                  <td className="pr-14 py-3">السعر الكلي</td>
                  <td className="pl-10 py-3">{totlaPrice - (totlaPrice * 0.5)} SAR</td>
                </tr>
              </tbody>
            </table>
            <div className="flex mt-4">
              <button className="bg-rose-700 text-white rounded px-4 py-2 mr-3">إزالة كل المنتجات</button>
              <button className="bg-green-700 text-white rounded px-4 py-2">تأكيد الطلب</button>
            </div>
          </div>
        </div>
        // <div className="md:flex md:px-[8%] px-4 py-14">
        //   <div className="flex-1 bg-gray-100 pmd:-5">
        //     <h3 className="text-xl font-semibold mb-4">Cart Details</h3>
        //     <table className="w-full bg-white">
        //       <thead className="">
        //         <tr className="text-left">
        //           <th className="p-2">Name</th>
        //           <th className="p-2">Qty</th>
        //           <th className="p-2">Price</th>
        //           <th className="p-2" colSpan={2}>Total Price</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {cartData.map((item, index) => (
        //           <tr key={index} className="rounded-md bg-gray-100 overflow-hidden border-4 border-white mb-[1rem]">
        //             <td className="flex items-center p-2">
        //               <img className="h-11 w-11 mr-2 rounded" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
        //               {item.name}
        //             </td>
        //             <td className="p-2">{item.qty}</td>
        //             <td className="p-2">{item.price}</td>
        //             <td className="p-2">{item.qty * item.price}</td>
        //             <td className="p-2">
        //               <FiTrash className="text-red-500 text-xl" onClick={() => removeItem(item.id)} />
        //             </td>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </div>
        //   <div className="bg-gray-100 px-7 py-3 md:ml-5 md:mt-0 mt-6">
        //     <span className="ext-xl font-semibold">Checkout Details</span>
            
        //     <button className="w-full bg-red-900 text-white rounded py-2 mt-4">Check out</button>
        //   </div>
        // </div>
      }
      <BottomNavbar />
    </div>
  )
}
