import { FiShoppingBag, FiX } from "react-icons/fi";
import IconBox from "./IconBox";
import { useGlobalApi } from "../../manager/ContextProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavCart() {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [isOpen, setIsOpen] = useState(false);
  const { cartData, removeItem, setIsCheckingOut } = useGlobalApi();

  useEffect(() => {
    if (cartData.length) {
      const tPrice = cartData
        .map((i) => i.price * i.qty)
        .reduce((a, t) => +a + +t);
      setTotalPrice(tPrice);
    }
  }, [cartData]);

  const toggleFn = () => {
    setIsOpen(false);
    setIsCheckingOut(true);
  };
  return (
    <div className="flex items-center relative md:border md:border-cl1 md:bg-cl1/20 cursor-pointer md:py-2 md:px-5 rounded-md">
      <div className="flex items-center" onClick={() => setIsOpen(true)}>
        <IconBox count={cartData.length} icon={<FiShoppingBag />} />
        <div className="md:flex items-center hidden">
          <div className="flex items-center ml-2">
            <span>ر.س</span>
            <span className="font-bold text-rd ml-1">{totalPrice}</span>
          </div>
          <div className="mx-2">-</div>
          <div className="flex">
            <span>منتجات</span>
            <span className="font-bold text-rd ml-1">{cartData.length}</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          !isOpen
            ? "md:translate-x-[-120%] translate-x-[-100%]"
            : "translate-x-0"
        } duration-500 md:absolute fixed md:h-auto h-[100dvh] z-50 left-0 md:w-auto w-full md:top-full top-0 bg-black/50`}
      >
        <div className="md:w-[350px] w-[80%] h-full flex flex-col bg-white shadow-md border rounded">
          <div className="bg-gray-100 flex items-center justify-between px-4 py-2">
            <div className="" onClick={() => setIsOpen(false)}>
              <FiX />
            </div>
            <span className="">بطاقة التسوق</span>
          </div>
          <div className="flex-1 overflow-y-scroll">
            {cartData.length > 0 ? (
              cartData.map((item, index) => (
                <div
                  className="flex items-center border-b border-cl1 px-2 py-4"
                  key={index}
                >
                  <div
                    className="bg-red-400 text-white p-1 mr-3"
                    onClick={() => removeItem(item.productID)}
                  >
                    <FiX />
                  </div>
                  <div className="flex items-center">
                    <span>ر.س</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="px-3">x{item.qty}</div>
                  <div className="flex-1 text-right line-clamp-2">
                    {item.name}
                  </div>
                  <img
                    className="h-10 w-10 ml-3"
                    src={"http://localhost:3001/" + item.product_image}
                    alt=""
                  />
                </div>
              ))
            ) : (
              <div className="p-7">No Items in you cart</div>
            )}
          </div>
          <div className="px-4 py-3">
            <div className="flex justify-between font-bold">
              <span>{totalPrice}</span>
              <span>السعر الصافي</span>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <span>{totalPrice}</span>
              <span>السعر الإجمالي</span>
            </div>
          </div>
          <div className="bg-gray-200 flex justify-evenly items-center p-3">
            <button
              className="border border-rd px-7 py-2 rounded-md"
              onClick={toggleFn}
            >
              ضع الطلب
            </button>
            <Link
              className="border border-rd px-7 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
              to="/shopping-cart"
            >
              عرض المنتجات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
