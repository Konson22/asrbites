import { FaTruckMoving, FaUber, FaUsers } from "react-icons/fa"
import { FiChevronDown, FiHome, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useGlobalApi } from "../contexts/ContextProvider"


export default function Sidebar() {

    const { isAdmin, openSidebar, setOpenSidebar } = useGlobalApi()

  return (
    <div 
        className={`
            dashboard-wraper md:flex md:static fixed flex-col md:w-[17%] 
            w-full bg-cl5/80 text-white md:translate-x-0 duration-300
            ${openSidebar ? 'translate-x-0':'translate-x-[-100%]'}
        `}
    >
        <div className="flex-1 h-full my-5">
            <ul>
                {links.map(link => (
                    <li>
                        <Link 
                            className="flex items-center hover:bg-white hover:text-cl5 px-5 py-2" 
                            to={link.path}
                            onClick={() => setOpenSidebar(false)}
                        >
                            <span className="text-4xl mr-3">{link.icon}</span>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center bg-cl5 px-5 py-2">
            <img 
                className="h-[40px] w-[40px] rounded-full mr-2" 
                src={isAdmin.profile_image} 
                alt="" 
            />
            <span className="flex-1">{isAdmin.name}</span>
            <span className="text-2xl">
                <FiChevronDown />
            </span>
        </div>
    </div>
  )
}


const links = [
    {text:'Dashboard', path:'/admin/dashboard', icon:<FiHome />},
    {text:'Products', path:'/admin/products', icon:<FaUber />},
    {text:'Orders', path:'/admin/orders', icon:<FaTruckMoving />},
    {text:'Messages', path:'/', icon:<FiMail />},
    {text:'Stuff', path:'/', icon:<FaUsers />},
    {text:'Report', path:'/', icon:<FaUber />},
    {text:'Stuff', path:'/', icon:<FaUber />},
]