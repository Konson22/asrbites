import { FiShoppingBag, FiShoppingCart, FiX } from "react-icons/fi";
import { useGlobalApi } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


export default function ShoppingCardPage() {

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
    try {
      const results = await axiosInstance.post('/products/reservation', cartData).then(res => res);
      if(results.data.done){
        localStorage.setItem('code', JSON.stringify([results.data.code]))
        // clearSavedCartItem()
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="md:flex md:px-[3%] px-3 md:mt-8 my-4">
      {cartData.length > 0 ?
        <>
          <div className="md:bg-secondary/50 text-white md:flex flex-1 md:mr-3 md:p-3">
            <div className="flex-1 bg-secondary/80 md:mb-0 mb-5 md:mr-3">
              <div className="bg-darkcl/60 flex items-center justify-end p-2">
                <h3 className="md:text-xl text-xl text-right">المنتجات</h3>
                <FiShoppingCart className="md:text-3xl text-3xl ml-3" />
              </div>
              <table className="w-full">
                <thead className="">
                  <tr className="text-right border-y">
                    <th className="px-2 py-3"></th>
                    <th className="px-2 py-3">السعر الكلي</th>
                    <th className="md:block hidden px-2 py-3">السعر</th>
                    <th className="px-2 py-3">الكمية</th>
                    <th className="px-2 py-3">الإسم</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => (
                    <tr key={index} className="text-right rounded-md overflow-hidden border-t mb-[1rem]">
                      <td className="p-2">
                        <button 
                          className="flex items-center bg-red-700 hover:bg-red-500 text-white rounded px-2 py-1"
                          onClick={() => removeItem(item.productID)}
                        >
                          <span className="md:block hidden">إزالة</span>
                          <FiX className="md:ml-2" />
                        </button>
                      </td>
                      <td className="p-2">{Math.round(item.qty * item.price)} ر.س</td>
                      <td className="md:block hidden p-2">{item.price} ر.س</td>
                      <td className="p-2">{item.qty}</td>
                      <td className="flex items-center text-right p-2">
                        <div className="flex-1">{item.name}</div>
                        <img className="h-11 w-11 ml-2 rounded" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:w-[27%] bg-secondary/80">
              <div className="bg-darkcl/60 flex items-center justify-end p-2">
                <h3 className="md:text-xl text-xl text-right">تفاصيل الدفع</h3>
                <FiShoppingCart className="md:text-3xl text-3xl ml-3" />
              </div>
              <table className="w-full border-t border-primary">
                <thead>
                  <tr>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary">
                    <td className="pl-3 pr-10 py-3">{cartData.length}</td>
                    <td className="pr-3 pl-14 py-3 text-right">عدد المنتجات</td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="pl-3 pr-10 py-3">{totlaPrice} ر.س</td>
                    <td className="pr-3 pl-14 py-3 text-right">السعر</td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="pl-3 pr-10 py-3">{Math.floor(totlaPrice * 0.05)} ر.س</td>
                    <td className="pr-3 pl-14 py-3 text-right">التخفيض</td>
                  </tr>
                  <tr className="border-b border-primary">
                    <td className="pl-3 pr-10 py-3">{Math.floor(totlaPrice - (totlaPrice * 0.05))} ر.س</td>
                    <td className="pr-3 pl-14 py-3 text-right">السعر الكلي</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end m-4">
                <button className="bg-green-700 text-white rounded px-4 py-2" onClick={handleReserve}>احجز</button>
              </div>
            </div>
          </div>
          <div className="md:w-[18%] h-[max-content] text-center bg-white p-8 md:mt-0 mt-4">
            <div className="text-8xl text-green-700 flex justify-center">
              <FaWhatsapp />
            </div>
            <p className="my-4">
              استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم
            </p>
            <button className="w-full bg-green-700 text-white rounded px-4 py-2" onClick={handleReserve}>اطلب</button>
          </div>
        </>:
        <>
        <div className="flex-1 bg-white rounded-md mt-4">
          <div className="bg-gray-200 flex items-center justify-end p-3">
            <h3 className="md:text-2xl text-xl text-right">المنتجات</h3>
            <FiShoppingCart className="md:text-4xl text-3xl ml-3" />
          </div>
          <div className="px-6 py-10">
            <p className="text-xl text-right">سلة التسوق فارغة! استمتع بتصفح تشكيلتنا الرائعة من الكيك والحلويات. انقر على الزر لبدء التسوق الآن."</p>
            <Link className="flex justify-end" to='/store'>
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
      }
    </div>
  )
}
