import { FiX } from "react-icons/fi";
import { useGlobalApi } from "../../manager/ContextProvider";

export default function CardInformation() {
  const { cartData, removeItem } = useGlobalApi();
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
