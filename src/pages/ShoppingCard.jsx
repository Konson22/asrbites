import { FiX } from "react-icons/fi";
import { useGlobalApi } from "../manager/ContextProvider";
import { useEffect, useState } from "react";

export default function ShoppingCard() {
  const { cartData, removeItem, setIsCheckingOut } = useGlobalApi();
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData
        .map((i) => i.price * i.qty)
        .reduce((a, t) => +a + +t);
      setTotalPrice(tPrice);
    }
  }, [cartData]);
  return (
    <div className="md:px-[8%] px-3 my-5">
      <div className="md:flex md:bg-transparent bg-white pb-1">
        <ItemsInCart
          cartData={cartData}
          removeItem={removeItem}
          cName="md:hidden block "
        />
        <div className="md:w-[35%] md:bg-white bg-gray-100 md:m-0 m-4 p-5 border">
          <div className="">
            <div className="flex justify-between font-bold">
              <span>{totalPrice}</span>
              <span>السعر الصافي</span>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <span>{totalPrice}</span>
              <span>السعر الإجمالي</span>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="border border-rd px-7 py-2 rounded-md"
              onClick={() => setIsCheckingOut(true)}
            >
              ضع الطلب
            </button>
          </div>
        </div>
        <ItemsInCart cartData={cartData} removeItem={removeItem} />
      </div>
    </div>
  );
}

function ItemsInCart({ cartData, removeItem, cName = "md:block hidden" }) {
  return (
    <div className={`flex-1 bg-white border md:ml-5 ${cName}`}>
      {cartData.length > 0 ? (
        <table className="w-full table-fixed text-right">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-5 md:w-[max-content]">حذف</th>
              <th className="md:block hidden md:w-[max-content] py-3 px-5">
                السعر الإجمالي
              </th>
              <th className="md:w-[max-content] py-3 px-5">السعر </th>
              <th className="md:w-[max-content] py-3 px-5">الكمية</th>
              <th className="py-3 px-5">منتجات</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className={`${index % 2 ? "bg-gray-50" : ""}`}>
                <td className="py-3 px-5">
                  <div
                    className="bg-rd text-white w-[max-content] cursor-pointer p-2"
                    onClick={() => removeItem(item.productID)}
                  >
                    <FiX />
                  </div>
                </td>
                <td className="py-3 px-5">{item.price * item.qty}</td>
                <td className="md:block hidden py-3 px-5">{item.price}</td>
                <td className="py-3 px-5">
                  <input className="w-14 h-8" type="number" value={item.qty} />
                </td>
                <td className="px-5 py-3 flex justify-end">
                  <div className="flex items-center">
                    <span className="md:block hidden">{item.name}</span>
                    <img
                      className="h-10 w-10 ml-3"
                      src={process.env.PUBLIC_URL + item.product_image}
                      alt=""
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-right">
          ليس لديك منتجات في عربة التسوق الخاصة بك
        </div>
      )}
    </div>
  );
}
