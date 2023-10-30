import { FaTicketAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalApi } from "../../contexts/ContextProvider";


export default function Dashboard() {

    const { isLoading, candy } = useGlobalApi();

  return (
    <div className='md:mx-[8%] mx-4 mt-5'>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2">
        {data.map(order => (
          <div className={`bg-white shadow-md rounded md:p-5 p-3 ${order.title}`}>
            <div className="md:flex items-center justify-evenly mt-2">
              <div className={`md:text-7xl text-6xl ${order.cName}`}>
                {order.icon}
              </div>
              <div className="flex-">
                <p>{order.title}</p>
                <span className="text-4xl font-bold">{order.qty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex mt-7">
        <div className="md:w-[40%] bg-white p-5 md:mr-6">
          Dashboard
        </div>
        <div className="flex-1 bg-white md:mb-0 mb-5">
            <div className="p-5">
                <h3 className="text-2xl font-bold">Orders</h3>
            </div>
          {isLoading && "Loading..."}
          {(!isLoading && candy.length > 0) &&
            <table className="w-full text-right">
                <thead>
                    <tr className="border-y">
                        <th className="px-4 py-2">السعر</th>
                        <th className="px-4 py-2">السعر</th>
                        <th className="px-4 py-2">الكمية</th>
                        <th className="px-4 py-2">المنتج</th>
                    </tr>
                </thead>
                <tbody>
                    {candy.map(item => (
                        <tr className="border-t" key={item.productID}>
                            <td className="px-4 py-2">
                                <button className="bg-rose-500 text-white px-4 py-1 mr-2">Edit</button>
                                <button className="bg-green-500 text-white px-4 py-1">Edit</button>
                            </td>
                            <td className="px-4 py-2">
                                {item.price}
                            </td>
                            <td className="px-4 py-2">
                                {item.quantity}
                            </td>
                            <td className="flex items-center justify-end px-4 py-2">
                                {item.name}
                                <img className="h-16 w-16 ml-2 rounded-full" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  )
}


const data = [
  {title:'Current Stock', qty:10, icon:<FiShoppingCart />, cName:'text-red-300'},
  {title:'Served Orders', qty:10, icon:<FaTicketAlt />, cName:'text-green-300'},
  {title:'Pending Orders', qty:10, icon:<FiShoppingCart />, cName:'text-yellow-300'},
  {title:'Low Stock', qty:10, icon:<FiShoppingCart />, cName:'text-red-300'},
]