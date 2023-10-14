import { FaCartPlus } from "react-icons/fa"
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";
import GoBackButton from "../components/GoBackButton";


export default function CandyDetails() {

    const { candy } = useGlobalApi();

  return (
    <div>
        <Navbar icon={<GoBackButton />} text='Details' />
        <div className="bg-white m-[5%]">
            <div className="h-[230px]">
                <img className="rounded-md" src={candy[0].image} alt="" />
            </div>
            <div className="p-3">
                <h3 className="text-xl font-bold my-2">Sweet Candy</h3>
                <p>
                    This is some description for this candy products
                    This is some description for this candy products
                </p>
                <button className="bg-red-900 text-white px-3 py-2 mt-3 rounded-md flex items-center justify-center">
                    <FaCartPlus className="mr-2" />
                    Add to cart
                </button>
            </div>
        </div>
        <BottomNavbar />
    </div>
  )
}
