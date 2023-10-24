import { FaDashcube, FaSlidersH } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import Navbar, { BottomNavbar } from "../components/Navbar"
import { useGlobalApi } from "../contexts/ContextProvider"
import ItemCart from "../components/ItemCart"


export default function StorePage() {

    const { candy } = useGlobalApi();

  return (
    <div className="">
        <Navbar icon={<FaDashcube />} text='Welcome' />
        <div className="content-wraper">
            <div className="flex items-center bg-white p-1 shadow-md shadow-black/10 rounded-md border md:mx-[5%] mx-[3%] my-4 px-3">
                <span className="">
                    <FiSearch />
                </span>
                <input className="h-[2.5rem] bg-transparent w-full px-2" type="search" placeholder="...البحث" />
                <span className="bg-red-900 p-2 rounded text-white">
                    <FaSlidersH />
                </span>
            </div>
            <div className="content md:px-[5%] px-[3%] mt-8">
                <h3 className="text-2xl font-bold text-right">المنتجات</h3>
                <div className="flex-1 grid md:grid-cols-4 grid-cols-2 gap-5 mt-6">
                    {candy && candy.length > 0 && candy.map(item => <ItemCart item={item} key={item.id} />)}
                </div>
            </div>
        </div>
        <BottomNavbar />
    </div>
  )
}

