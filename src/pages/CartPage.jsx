import { FiTrash } from "react-icons/fi";
import GoBackButton from "../components/GoBackButton";
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";


export default function CartPage() {

  const { cartData, removeItem } = useGlobalApi();

  return (
    <div>
      <Navbar  icon={<GoBackButton />} text='My Cart' />
      {cartData.length ?
        <div className="content-wraper p-3 md:mx-[15%]">
          <table className="w-full bg-white">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Qty</th>
                <th className="p-2" colSpan={2}>price</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={index} className="rounded-md bg-gray-100 overflow-hidden border-4 border-white mb-[1rem]">
                  <td className="flex items-center p-2">
                    <img className="h-14 w-14 mr-2 rounded" src={item.image} alt="" />
                    {item.name}
                  </td>
                  <td className="p-2">{Math.floor(Math.random() * 9)}</td>
                  <td className="p-2">{item.price}</td>
                  <td className="p-2">
                    <FiTrash className="text-red-500 text-xl" onClick={() => removeItem(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr className="border-t-8 bg-gray-50">
                <td colSpan={4} className="p-2 text-xl font-bold">Checkout Details</td>
              </tr>
              <tr>
                <td className="p-2">
                  Items: {cartData.length > 0 && cartData.length}
                </td>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td className="p-2">
                  Total price: {cartData.length > 0 && cartData.length}
                </td>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td className="p-2">
                  Discount: {cartData.length > 0 && cartData.length} %
                </td>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td className="p-2">
                  Net price: {cartData.length > 0 && cartData.length}
                </td>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td className="p-2">
                  <button className="bg-green-500 text-white rounded py-2 w-full">Checkout</button>
                </td>
                <td colSpan={3}>
                  <button className="bg-red-500 text-white rounded py-2 w-full">Clear</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>:
        <div className="">No Items in your cart</div>
      }
      <BottomNavbar />
    </div>
  )
}
