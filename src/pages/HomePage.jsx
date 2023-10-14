import { FaDashcube, FaSlidersH } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import Navbar, { BottomNavbar } from "../components/Navbar"
import { useGlobalApi } from "../contexts/ContextProvider"
import ItemCart from "../components/ItemCart"


export default function HomePage() {

    const { candy } = useGlobalApi();

  return (
    <div className="">
        <Navbar icon={<FaDashcube />} text='Welcome' />
        <div className="content-wraper">
            <div className="flex items-center bg-white p-1 shadow-md shadow-black/10 rounded-md border mx-[5%] my-4">
                <span className="">
                    <FiSearch />
                </span>
                <input className="h-[2.5rem] bg-transparent w-full px-2" type="search" placeholder="Search..." />
                <span className="bg-red-900 p-2 rounded text-white">
                    <FaSlidersH />
                </span>
            </div>
            <div className="flex items-center m-[5%] shadow-md p-4 rounded-lg bg-white mt-4">
                <span className="flex-1 text-2xl font-bold">We got your desire Candy</span>
                {(candy && candy.length > 0) && <img className="rounded-md h-[130px] w-[150px]" src={candy[2].image} alt="" />}
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:px-[8%] px-[5%] mt-8 content">
                {candy.map(item => <ItemCart item={item} key={item.id} />)}
            </div>
        </div>
        <BottomNavbar />
    </div>
  )
}

