import { FiBell, FiShoppingCart, FiHome, FiSearch, FiUser, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useGlobalApi } from "../contexts/ContextProvider"
import { FaBars } from "react-icons/fa"
import { useState } from "react";



export default function Navbar({ text, icon }) {

  const { cartData, profile } = useGlobalApi();
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu);
  const logo = (
    <div className="flex items-center flex-1">
      <img className="md:h-14 w-14 h-9" src={process.env.PUBLIC_URL+'/images/logo.png'} alt="" />
      <p className="logo-text text-2xl font-bold w-full">لي ثري</p>
    </div>
  )

  const authUserContent = (user) => {
    return(
      <div className="flex items-center">
        <span className="text-2xl">
          <FiUser />
        </span>
        {user.name}
      </div>
    )
  }

  const guestUserContent = (
    <Link className="bg-red-900 text-white px-5 py-2 rounded ml-4" to='/login'>Login | Sign up</Link>
  )
  return (
    <nav className="
      flex items-center justify-between text-rose-700 md:px-[5%] px-[5%] 
      bg-white shadow-md sticky left-0 top-0 w-full md:py-3 py-4 z-50
    ">
      {logo}
      <div className={`
        md:static fixed md:h-auto h-screen inset-0 md:bg-transparent bg-white z-50 md:mr-14
        md:translate-x-[0%] duration-300 ${openMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}
      `}>
        <div className="md:hidden bg-gray-50 mb-3 flex items-center justify-between px-4 py-3">
          {logo}
          <span onClick={toggleMenu} className="p-1"><FiX /></span>
        </div>
        <ul className={`md:flex font-bold`}>
          {links.map(link => (
            <li className="">
              <Link className="block px-4 md:py-0 py-2" to={link.path} onClick={toggleMenu}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link className="flex items-center relative mr-7" to='/cart'>
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
      <div className="md:hidden block" onClick={toggleMenu}>
        <FaBars className="text-xl" />
      </div>
      <div className="md:flex items-center hidden">
        {profile ? authUserContent(profile) : guestUserContent}
      </div>
    </nav>
  )
}

// function NavigationLinks({ logo }){

//   const [openMenu, setOpenMenu] = useState(false)

//   const toggleMenu = () => setOpenMenu(!openMenu);


//   return(
//     <div className={`
//       md:static fixed md:h-auto h-screen inset-0 bg-transparent bg-white z-50
//       md:translate-x-[0%] duration-300 ${openMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}
//     `}>
//         <div className="md:hidden bg-gray-50 mb-3 flex items-center justify-between px-4 py-3">
//           {logo}
//           <span onClick={toggleMenu} className="p-1"><FiX /></span>
//         </div>
//         <ul className={`md:flex`}>
//           {links.map(link => (
//             <li className="">
//               <Link className="block px-5 md:py-0 py-2" to={link.path} onClick={toggleMenu}>{link.text}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//   )
// }

export function BottomNavbar(){

  const { cartData } = useGlobalApi()

  return(
    <div className="md:hidden flex items-center justify-between h-[4rem] text-red-900 fixed left-0 right-0 bottom-0 bg-white text-2xl py-2 px-[5%]">
      <Link className="py-2 px-4 rounded" to='/'>
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
  {text:'الرئيسية', path:'/'},
  {text:'حلا', path:'/store'},
  {text:'الخدمات', path:'/'},
  {text:'عن لي ثري', path:'/'},
  {text:'تواصل معنا', path:'/'},
  {text:'لمزيد', path:'/'},
]