import { FiTrash } from "react-icons/fi";
import { useGlobalApi } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";


export default function CartPage() {

  const { cartData, removeItem, clearSavedCartItem } = useGlobalApi();
  const [totlaPrice, setPrice] = useState(0);

  useEffect(() => {
    if(cartData.length){
      const tPrice = cartData.map(i => i.price).reduce((a, t) => +a + +t)
      console.log(tPrice)
      setPrice(tPrice)
    }
  }, [cartData])



  const handleReserve = async () => {
    const code = generateCode();
    try {
      const results = await axiosInstance.post('/products/reservation', {code, cartData}).then(res => res);
      if(results.data.done){
        clearSavedCartItem()
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const generateCode = () => {
    let code = '';
    [...new Array(4)].forEach(c => code += Math.round(Math.random() * 5));
    return code
  };

  return (
    <div>
      {cartData.length > 0 &&
        <div className="md:flex md:px-[8%] px-3 md:mt-8 mt-4">
          <div className="flex-1 bg-white md:p-5">
            <h3 className="text-2xl text-right m-2">المنتجات</h3>
            <table className="w-full bg-white">
              <thead className="">
                <tr className="text-right border-y">
                  <th className="p-2"></th>
                  <th className="p-2">السعر</th>
                  {/* <th className="p-2">السعر الكلي</th> */}
                  <th className="md:block hidden p-2">السعر</th>
                  <th className="p-2">الكمية</th>
                  <th className="p-2">الإسم</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item, index) => (
                  <tr key={index} className="border-y rounded-md overflow-hidden border-4 border-white mb-[1rem]">
                    <td className="p-2">
                      <FiTrash className="text-red-500 text-xl" onClick={() => removeItem(item.productID)} />
                    </td>
                    <td className="md:block hidden p-2">{item.price}</td>
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
                  <td className="pr-10 py-3">{cartData.length}</td>
                  <td className="pl-14 py-3 text-right">عدد المنتجات</td>
                </tr>
                <tr>
                  <td className="pr-10 py-3">{totlaPrice} ريال</td>
                  <td className="pl-14 py-3 text-right">السعر</td>
                </tr>
                <tr>
                  <td className="pr-10 py-3">{totlaPrice * 0.5} ريال</td>
                  <td className="pl-14 py-3 text-right">التخفيض</td>
                </tr>
                <tr>
                  <td className="pr-10 py-3">{totlaPrice - (totlaPrice * 0.5)} ريال</td>
                  <td className="pl-14 py-3 text-right">السعر الكلي</td>
                </tr>
              </tbody>
            </table>
            <div className="flex mt-4">
              <button className="bg-rose-700 text-white rounded px-4 py-2 mr-3">إزالة كل المنتجات</button>
              <button className="bg-green-700 text-white rounded px-4 py-2" onClick={handleReserve}>تأكيد الطلب</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
