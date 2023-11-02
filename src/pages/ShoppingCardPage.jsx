import { FiShoppingBag, FiShoppingCart, FiX } from "react-icons/fi";
import { useGlobalApi } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


export default function ShoppingCardPage() {

  const { cartData, removeItem, clearSavedCartItem } = useGlobalApi();
  const [openCard, setOpenCard] = useState(false);
  const [totlaPrice, setPrice] = useState(0);

  useEffect(() => {
    if(cartData.length){
      const tPrice = cartData.map(i => i.price).reduce((a, t) => +a + +t)
      setPrice(tPrice)
    }
  }, [cartData])



  const handleReserve = async () => {
    try {
      const results = await axiosInstance.post('/products/reservation', cartData).then(res => res);
      if(results.data.done){
        localStorage.setItem('code', JSON.stringify([results.data.code]))
        clearSavedCartItem()
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="md:px-[8%] px-3 md:mt-8 my-4">
      {openCard && <WhatsAppDilog data={cartData} setOpenCard={setOpenCard} />}
      {cartData.length > 0 ?
        <div className="md:flex">
          <div className="flex-1 bg-white">
            <div className="flex items-center justify-end p-2">
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
          <div className="md:w-[30%] md:ml-4">
            <div className="bg-white p-4 md:my-0 my-5">
              <div className="flex items-center justify-end p-2">
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
            <div className="text-center bg-white p-8 md:mt-5 mt-4">
              <div className="text-8xl text-green-700 flex justify-center">
                <FaWhatsapp />
              </div>
              <p className="my-4">
                استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم
              </p>
              <button 
                className="w-full bg-green-700 text-white rounded px-4 py-2" 
                onClick={() => setOpenCard(true)}
                >
                  اطلب
              </button>
            </div>
          </div>
        </div>:
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


function WhatsAppDilog({ data, setOpenCard }){

  const [method, setMethod] = useState('in person');
  const [selectedTime, setSelectedTime] = useState();

  const generateWhatsAppLink = () => {
    let items = "أود طلب:\n";
    data.forEach(product => items += "- " + product.name + ": " + product.qty + "\n");
    items += '- I would like to recieve it within: ' + selectedTime+' minute from now!\n'
    items += '- Collection method: '+method;
    return "https://wa.me/+249919913063?text=" + encodeURIComponent(items);
  }

  const handleCheckoutClick = () => {
    const confirmationMessage = "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href = generateWhatsAppLink();
    }
  }

  return(
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-black/50">
      <div className="bg-gray-100 flex md:w-[55%] w-[80%] rounded-md shadow-md md:overflow-hidden relative">
        <div className="absolute md:right-2 right-[-.6rem] md:top-2 top-[-.6rem] border border-red-600 bg-white p-2 rounded-full" onClick={() => setOpenCard(false)}>
          <FiX />
        </div>
        <div className="flex-1 p-8">
          <h3 className="text-right text-xl">إختر زمن الحجز</h3>
          {timeSchedule.map((time, index) => (
            <div class="flex items-center justify-end my-4" key={index}>
              <label for="purple-radio" class="mr-2 text-sm font-medium ">{time.text}</label>
              <input 
                id="purple-radio" 
                type="radio" 
                value={time.val} 
                name='time' 
                class="
                  w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500
                  dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                  dark:border-gray-600
                "
                onChange={e => setSelectedTime(e.target.value)}
              />
            </div>
          ))}
          <div className="text-right">
            Delivery method
          </div>
          <p className="text-right">سيتم توجيهك إلى واتساب.</p>
          <div className="flex items-center justify-end">
            <button 
              className="bg-green-400 text-white mt-3 px-5 py-2 rounded text-right" 
              onClick={handleCheckoutClick}
            >
              اطلب
            </button> 
          </div>
        </div>
        <div className="md:block hidden w-[60%]">
          <img src={process.env.PUBLIC_URL+'/images/lizzie.jpeg'} alt="" />
        </div>
      </div>
    </div>
  )
}

const timeSchedule = [
  {val:'10', text:'١٠  - ٢٠ دقيقة'},
  {val:'30', text:'٢٠ - ٤٠ دقيقة'},
  {val:'60', text:'٤٠ -  ٦٠ دقيقة'},
  {val:'120', text:'٤٠ -  ٦٠ دقيقة'},
]