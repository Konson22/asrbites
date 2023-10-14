import { FiTrash } from "react-icons/fi";
import GoBackButton from "../components/GoBackButton";
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";


export default function CartPage() {

  const { cartData } = useGlobalApi()

  return (
    <div>
      <Navbar  icon={<GoBackButton />} text='My Cart' />
      {cartData.length ?
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Name</th>
                <th>Qty</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={index} className="">
                  <td className="flex items-center px-3 py-2">
                    <img className="h-14 w-14 mr-2 rounded" src={item.image} alt="" />
                    {item.name}
                  </td>
                  <td className="px-3 py-2">{Math.floor(Math.random() * 9)}</td>
                  <td className="px-3 py-2">{item.price}</td>
                  <td>
                    <FiTrash className="text-red-500 text-xl" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>:
        <div className="">No Items in your cart</div>
      }
      <BottomNavbar />
    </div>
  )
}
