import { FaTicketAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


export default function Dashboard() {
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
        <div className="flex-1 bg-white p-5 md:mb-0 mb-5">
          <h3 className="text-2xl font-bold">Orders</h3>
        </div>
        <div className="md:w-[35%] bg-white p-5 md:ml-6">
          Dashboard
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