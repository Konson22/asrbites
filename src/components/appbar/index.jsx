import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../assets/staticData";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { FaBars, FaTicketAlt } from "react-icons/fa";
import { useGlobalApi } from "../../manager/ContextProvider";
import Dropdown from "./DropDownCard";

export default function MobileNav() {
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
        delay: 0.3,
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
    <>
      <nav className="flex justify-between items-center bg-white sticky left-0 top-0 w-full z-40 px-4 py-3">
        {logo}
        <div className="lg:flex hidden gap-8 text-md text-zinc-400 mr-16">
          {navigationLinks.map((link, index) => (
            <Link to={link.path} className="text- font-medium" key={index}>
              {link.text}
            </Link>
          ))}
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
            <FiShoppingCart className="md:text-3xl text-2xl text-cl1 md:mr-2" />
          </Link>
          <Link className="flex items-center mx-5" to="/my-reservation">
            <div className="relative">
              <FaTicketAlt className="md:text-3xl text-2xl text-cl1 md:mr-2" />
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
            <ProfileCard profile={profile} signOutUser={signOutUser} />
          ) : (
            <button
              className="md:px-4 px-2 py-1 bg-cl1 rounded text-sm text-white"
              onClick={() => setShowForm("login")}
            >
              Login
            </button>
          )}
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-cl1 border border-cl1 p-1 rounded ml-4"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-cl1 text-white p-5"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between mb-5">
                {logo}
                <p
                  className="cursor-pointer text-md text-white"
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
    </>
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
      className="text-2xl uppercase text-white text-right"
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
  console.log(profile.avatar);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const staticProfileImage =
    "https://th.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  return (
    <div className="flex items-center" onClick={toggleDropdown}>
      <img
        className="h-8 w-8 rounded-full"
        src={`${profile.avatar ? profile.avatar : staticProfileImage}`}
        alt=""
      />
      <span className="md:block hidden text-sm ml-2">
        {profile.name ? profile.name : "Profile"}
      </span>
      <Dropdown
        isOpen={isOpen}
        toggle={toggleDropdown}
        signOutUser={signOutUser}
      />
    </div>
  );
};
