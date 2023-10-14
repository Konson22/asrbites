import { FiBell, FiShoppingCart, FiHome, FiSearch, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useGlobalApi } from "../contexts/ContextProvider"



export default function Navbar({ text, icon }) {

  // const { cartData } = useGlobalApi()

  return (
    <nav className="flex items-center justify-between text-red-900 md:px-[8%] px-[5%] bg-white sticky top-0 w-full py-4">
      <div className="bg-gray-100 rounded-full p-2">
        {icon}
      </div>
      <span className="md:text-3xl text-xl">{text}</span>
      <div className="">
        <div className="shadow shadow-black/30 rounded-md p-2">
          <FiBell className="text-xl" />
        </div>
      </div>
    </nav>
  )
}



export function BottomNavbar(){

  const { cartData } = useGlobalApi()

  return(
    <div className="h-[4rem] text-red-900 fixed left-0 right-0 bottom-0 bg-white flex items-center justify-between text-2xl py-2 px-[5%]">
      <Link className="bg-red-900 text-white py-2 px-4 rounded" to='/home'>
        <FiHome />
      </Link>
      <Link className="" to='/search'>
        <FiSearch />
      </Link>
      <Link className="relative" to='/cart'>
        <FiShoppingCart />
        {cartData.length > 0 &&
          <div className="h-5 w-5 flex items-center justify-center bg-red-500 text-[.7rem] text-white rounded-full absolute top-[-.5rem] right-[-1rem]">
            {cartData.length}
          </div>
        }
      </Link>
      <Link className="" to='/search'>
        <FiBell />
      </Link>
      <Link className="" to='/profile'>
        <FiUser />
      </Link>
    </div>
  )
}