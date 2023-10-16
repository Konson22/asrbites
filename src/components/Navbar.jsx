import { FiBell, FiShoppingCart, FiHome, FiSearch, FiUser, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useGlobalApi } from "../contexts/ContextProvider"
import { FaBars, FaUser } from "react-icons/fa"
import { useState } from "react";



export default function Navbar({ text, icon }) {

  const { cartData } = useGlobalApi();
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav 
      className="
        flex items-center justify-between text-red-900 md:px-[8%] px-[5%] 
        bg-white sticky top-0 w-full py-4
    ">
      <div className="flex">
        <span className="text-3xl font-bold">Leee3</span>
      </div>
      <div className="md:hidden flex">
        {icon && <div className="bg-gray-100 rounded-full p-2">
          {icon}
        </div>}
        <span className="md:text-3xl text-xl">{text}</span>
      </div>
      <div className={`
        md:w-auto w-full md:h-auto h-[100vh]
        md:translate-x-0 translate-x-[100%] duration-300 ${openMenu ? 'translate-x-0':''}
          md:bg-transparent bg-white
          md:static fixed left-0 bottom-0 top-0 z-40
      `}>
        <div className="md:hidden bg-gray-50 mb-3 flex items-center justify-between px-4 py-3">
          <span className="text-4xl">Leee3</span>
          <span onClick={() => setOpenMenu(false)} className="p-1"><FiX /></span>
        </div>
        <ul className={`md:flex`}>
          {links.map(link => (
            <li className="">
              <Link className="block px-5 md:py-0 py-2" to={link.path} onClick={() => setOpenMenu(false)}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden block shadow shadow-black/30 rounded-md p-2" onClick={() => setOpenMenu(true)}>
        <FaBars className="text-xl" />
      </div>
      <div className="md:flex items-center hidden">
        <div className="flex items-center border border-red-900 px-3 py-2 rounded">
          <Link className="relative mr-2" to='/cart'>
            <FiShoppingCart className="text-2xl" />
            {cartData.length > 0 &&
              <span 
                className="h-4 w-4 flex items-center justify-center bg-red-500 text-[.6rem]
                text-white rounded-full absolute top-[-.4rem] right-[-.5rem]
              ">
                {cartData.length}
              </span>
            }
          </Link>
          <span className="">0.00$</span>
        </div>
        <span className="text-2xl mx-6">
          <FiBell />
        </span>
        <span className="text-2xl">
          <FaUser />
        </span>
      </div>
    </nav>
  )
}



export function BottomNavbar(){

  const { cartData } = useGlobalApi()

  return(
    <div className="md:hidden flex items-center justify-between h-[4rem] text-red-900 fixed left-0 right-0 bottom-0 bg-white text-2xl py-2 px-[5%]">
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


const links = [
  {text:'Home', path:'/home'},
  {text:'Buy Candy', path:'/'},
  {text:'Services', path:'/'},
  {text:'About', path:'/'},
  {text:'Contact', path:'/'},
]