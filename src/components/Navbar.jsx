import {
  FiBell,
  FiShoppingCart,
  FiHome,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../manager/ContextProvider";
import { FaBars, FaTicketAlt } from "react-icons/fa";
import { useState } from "react";
import { navigationLinks } from "../assets/staticData";

export default function Navbar() {
  const { cartData, bookingCodes, GoogleAuthHandler, signOutUser, profile } =
    useGlobalApi();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const logo = (
    <div className="flex items-center justify-end flex-1">
      <img
        className="md:h-14 w-14 h-9"
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt=""
      />
      <p className="logo-text text-2xl font-bold w-full">لي ثري</p>
    </div>
  );

  return (
    <nav
      className="
      flex items-center justify-between md:px-[5%] px-[5%] 
      bg-cl1 text-white shadow-mdd sticky left-0 top-0 w-full md:py-2 py-2 z-50
    "
    >
      <div className="md:hidden block mr-3" onClick={toggleMenu}>
        <FaBars className="text-xl" />
      </div>
      {logo}
      <div
        className={`
        md:static fixed md:h-auto h-screen inset-0 right-0 md:bg-transparent bg-cl1/50 z-50 md:mr-14
        md:translate-x-[0%] duration-300 ${
          openMenu ? "translate-x-[0%]" : "translate-x-[100%]"
        }
        md:pl-0 pl-24
      `}
      >
        <ul
          className={`md:flex md:bg-transparent bg-white h-full font-bold md:text-inherit text-gray-700`}
        >
          <div className="md:hidden border border-b flex items-center md:justify-between justify-end  px-4 py-3">
            {logo}
            <span
              onClick={toggleMenu}
              className="border border-cl1 text-xl p-1 ml-3 rounded text-cl1"
            >
              <FiX />
            </span>
          </div>
          {navigationLinks.map((link) => (
            <li className="" key={link.text}>
              <Link
                className="block text-right px-4 md:py-0 py-2"
                to={link.path}
                onClick={toggleMenu}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <Link className="flex items-center relative" to="/shopping-cart">
          {cartData.length > 0 && (
            <span
              className="h-4 w-4 flex items-center justify-center bg-red-500 text-[.6rem]
              text-white rounded-full absolute top-[-.4rem] right-[-.5rem]
            "
            >
              {cartData.length}
            </span>
          )}
          <FiShoppingCart className="text-3xl md:mr-2" />
        </Link>
        <Link className="flex items-center mx-5" to="/my-reservation">
          <div className="relative">
            <FaTicketAlt className="text-3xl md:mr-2" />
            {bookingCodes.length > 0 && (
              <span
                className="h-4 w-4 flex items-center justify-center bg-red-500 text-[.6rem]
                text-white rounded-full absolute top-[-.2rem] md:right-0 right-[-.4rem]
              "
              >
                {bookingCodes.length}
              </span>
            )}
          </div>
          {/* <span className="md:block hidden text-sm">My reservation</span> */}
        </Link>
        {profile ? (
          <div className="flex items-center" onClick={signOutUser}>
            <img
              className="h-9 w-9 rounded-full"
              src={`${profile.avatar}`}
              alt=""
            />
            <span className="md:block hidden text-sm ml-2">{profile.name}</span>
          </div>
        ) : (
          <button className="px-4 py-1 bg-rose-500" onClick={GoogleAuthHandler}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export function BottomNavbar() {
  const { cartData } = useGlobalApi();

  return (
    <div className="md:hidden flex items-center justify-between h-[4rem] text-red-900 fixed left-0 right-0 bottom-0 bg-white text-2xl py-2 px-[5%]">
      <Link className="py-2 px-4 rounded" to="/">
        <FiHome />
      </Link>
      <Link className="" to="/search">
        <FiSearch />
      </Link>
      <Link className="relative" to="/cart">
        <FiShoppingCart />
        {cartData.length > 0 && (
          <div className="h-5 w-5 flex items-center justify-center bg-red-500 text-[.7rem] text-white rounded-full absolute top-[-.5rem] right-[-1rem]">
            {cartData.length}
          </div>
        )}
      </Link>
      <Link className="" to="/search">
        <FiBell />
      </Link>
      <Link className="" to="/profile">
        <FiUser />
      </Link>
    </div>
  );
}
