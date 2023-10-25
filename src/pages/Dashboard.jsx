import { FiShoppingCart } from "react-icons/fi";


export default function Dashboard() {
  return (
    <div className='mx-[8%] mt-5'>
      <div className="grid grid-cols-4 gap-5">
        {data.map(order => (
          <div className={`bg-white shadow-md rounded p-5 ${order.title}`}>
            <div className="flex items-center justify-evenly mt-2">
              {order.icon}
              <div className="flex-">
                <span className="text-5xl font-bold">{order.qty}</span>
                <p>{order.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-7">
        <div className="flex-1 bg-white p-5">
          Dashboard
        </div>
        <div className="w-[35%] bg-white p-5 ml-6">
          Dashboard
        </div>
      </div>
    </div>
  )
}


const data = [
  {title:'Current Stock', qty:10, icon:<FiShoppingCart className="text-6xl opacity-75" />, cName:'bg-red-300'},
  {title:'Served Orders', qty:10, icon:<FiShoppingCart className="text-6xl opacity-75" />, cName:'bg-green-300'},
  {title:'Pending Orders', qty:10, icon:<FiShoppingCart className="text-6xl opacity-75" />, cName:'bg-yellow-300'},
  {title:'Low Stock', qty:10, icon:<FiShoppingCart className="text-6xl opacity-75" />, cName:'bg-red-300'},
]