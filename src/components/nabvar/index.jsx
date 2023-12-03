import { Link } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiX } from "react-icons/fi";
import { FaBars, FaTicketAlt } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalApi } from "../../manager/ContextProvider";
import Dropdown from "./Dropdown";
import { navigationLinks } from "../../assets/staticData";

export default function Navbar() {
  const { cartData, bookingCodes, setShowForm, signOutUser, profile } =
    useGlobalApi();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const logo = (
    <div className="flex items-center justify-start flex-1">
      <img
        className="md:h-10 w-10 h-8"
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt=""
      />
      <p className="md:block hidden logo-text text-2xl font-bold w-full">
        لي ثري
      </p>
    </div>
  );
  return (
    <div className="bg-white relative">
      <div className="flex justify-between items-center md:pt-8 md:pb-14 md:px-[8%] px-3 py-4">
        <div
          className="md:hidden block border border-cl1 p-1 mr-4"
          onClick={toggleMenu}
        >
          <FaBars className="md:text-3xl text-2xl text-cl1" />
        </div>
        {logo}
        <div className="flex items-center">
          <Link to="/shopping-cart">
            <IconBox
              count={cartData.length}
              icon={
                <FiShoppingCart className="md:text-2xl text-2xl text-cl1" />
              }
            />
          </Link>
          {profile ? (
            <>
              <Link to="/reservation">
                <IconBox
                  count={bookingCodes.length}
                  icon={
                    <FaTicketAlt className="md:text-2xl text-2xl text-cl1" />
                  }
                />
              </Link>
              <ProfileCard profile={profile} signOutUser={signOutUser} />
            </>
          ) : (
            <button
              className="md:px-4 px-2 py-2 border border-cl1 rounded text-sm text-cl1 ml-4"
              onClick={() => setShowForm("login")}
            >
              تسجيل الدخول
            </button>
          )}
        </div>
      </div>
      <div className="md:block hidden absolute -bottom-5 left-0 right-0 bg-cl1 text-white px-[10%] mx-[10%] rounded-md ">
        <ul className="flex justify-evenly">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link className="block py-4" to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-white p-5"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between mb-5">
                {logo}
                <p
                  className="cursor-pointer text-md border border-cl1 p-1 rounded text-slate-600"
                  onClick={toggleMenu}
                >
                  <FiX />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-start font-lora items-end gap-4 "
              >
                {navigationLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden py-2">
                      <MobileNavLink
                        key={index}
                        title={link.text}
                        href={link.path}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// mobile
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

// mobile navb links
const MobileNavLink = ({ title, href, toggleMenu }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-right"
    >
      <Link to={href} onClick={toggleMenu}>
        {title}
      </Link>
    </motion.div>
  );
};

// proffile card
const ProfileCard = ({ profile, signOutUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const staticProfileImage =
    "https://th.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  return (
    <div
      className="flex items-center ml-4 relative cursor-pointer"
      onClick={toggleDropdown}
    >
      <img
        className="h-8 w-8 rounded-full"
        src={`${profile.avatar ? profile.avatar : staticProfileImage}`}
        alt=""
      />
      <span className="md:flex items-center hidden text-sm ml-2">
        {profile.name ? profile.name : "Profile"}
        <FiChevronDown
          className={`${isOpen ? "rotate-180" : ""} duration-300 text-xl ml-2`}
        />
      </span>
      <Dropdown
        isOpen={isOpen}
        toggle={toggleDropdown}
        signOutUser={signOutUser}
      />
    </div>
  );
};

function IconBox({ icon, count = 0, cName = "" }) {
  return (
    <span
      className={`h-8 w-8 flex items-center justify-center relative bg-gray-200 p-[0.4rem] rounded-full ml-5 ${cName}`}
    >
      {count > 0 && (
        <span
          className="h-4 w-4 flex items-center justify-center bg-red-500 text-[.6rem]
          text-white rounded-full absolute top-[-.4rem] right-[-.5rem]
        "
        >
          {count}
        </span>
      )}
      {icon}
    </span>
  );
}
