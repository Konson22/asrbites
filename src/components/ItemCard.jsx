import { useState } from "react";
import { useGlobalApi } from "../manager/ContextProvider";

export default function ItemCard({ item }) {
  const [val, setVal] = useState(1);
  const { addItemToCart } = useGlobalApi();
  const [message, setMessage] = useState("");

  const handleAddItem = () => {
    const res = addItemToCart({
      productID: item.productID,
      name: item.name,
      price: item.price,
      qty: val,
      product_image: item.product_image,
    });
    res && setMessage(res);
  };

  return (
    <div>
      <div className="md:h-[150px] h-[150px] rounded overflow-hidden">
        <img
          src={`${process.env.REACT_APP_API}/${item.product_image}`}
          alt=""
        />
      </div>
      <div className="bg-white p-3">
        <p className="text-right line-clamp-2">
          قائمتنا مليئة بالكعك الطازج، من الكعك الكلاسيكي إلى الإبداعات الفريدة
          التي تناسب جميع الأذواق. يتم اختيار
        </p>
        <span className="flex items-center justify-end mb-3">
          <span>ر.س</span>
          <span className="font-bold">{item.price}</span>
        </span>
        {message && (
          <span className="text-rd p-3 text-sm mb-2 block">{message}</span>
        )}
        <div className="flex items-center justify-between h-7">
          <div
            className="h-full flex-3 border border-rd px-3 rounded mr-3"
            onClick={handleAddItem}
          >
            add to cart
          </div>
          <div className="h-full flex-1">
            <input
              className="border border-rd h-full w-full"
              type="number"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
