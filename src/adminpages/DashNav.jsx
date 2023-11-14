import { FaBars, FaUpload } from "react-icons/fa";
import { FiBell, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../contexts/ContextProvider";


export default function DashNav() {
  const { openSidebar, setOpenSidebar } = useGlobalApi()


  return (
    <nav className="h-[4rem] flex items-center md:justify-end justify-between bg-white px-5">
      <div className="md:hidden flex items-center flex-1">
        <img className="md:h-14 w-14 h-9" src={process.env.PUBLIC_URL+'/images/logo.png'} alt="" />
        <p className="logo-text text-2xl font-bold w-full">لي ثري</p>
      </div>
      <div className="flex items-center">
        <Link className="flex items-center md:bg-cl5 text-white md:px-5 py-2" to='/admin/upload'>
          <FaUpload className="md:text-base text-2xl mr-2" />
          <span className="md:block hidden">Upload</span>
        </Link>
        <span className="text-3xl mx-5">
          <FiBell />
        </span>
        <span className="text-3xl">
          <FiMail />
        </span>
        <span className="text-3xl ml-3" onClick={() => setOpenSidebar(!openSidebar)}>
          <FaBars />
        </span>
      </div>
    </nav>
  )
}
