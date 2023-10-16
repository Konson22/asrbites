import { FaCartPlus, FaStar } from "react-icons/fa"
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";
import GoBackButton from "../components/GoBackButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function CandyDetails() {

    const { candy } = useGlobalApi();
    const { itemID } = useParams();
    const [message, setMessage] = useState('Not found')
    const [item, setItem] = useState(null)
    const [count, setCount] = useState(1)

    useEffect(() => {
        const result = candy.filter(c => c.id === parseInt(itemID))[0]
        result ? setItem(result) : setMessage('Not found!');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemID]);

  return (
    <div>
        <Navbar icon={<GoBackButton />} text='Details' />
        {item &&
            <div className="bg-white m-[8%]">
                <div className="h-[260px]">
                    <img className="rounded-[5%]" src={item.image} alt="" />
                </div>
                <div className="p-3">
                    <h3 className="text-xl font-bold my-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex text-yellow-400 my-6">
                            <FaStar className="mr-2" />
                            <FaStar className="mr-2" />
                            <FaStar className="mr-2" />
                            <FaStar className="mr-2" />
                            <FaStar className="mr-2" />
                        </div>
                        <div className="flex items-center">
                            <span className="h-7 w-7 text-3xl flex items-center justify-center rounded-full bg-red-200" onClick={() => count !== 1 && setCount(count - 1)}>-</span>
                            <span className="text-2xl font-bold px-3">{count}</span>
                            <span className="h-7 w-7 text-2xl flex items-center justify-center rounded-full bg-red-200" onClick={() => setCount(count + 1)}>+</span>
                        </div>
                    </div>
                    <p>
                        This is some description for this candy products
                        This is some description for this candy products
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{item.price}$</span>
                        <button className="bg-red-900 text-white px-3 py-2 mt-3 rounded-md flex items-center justify-center">
                            <FaCartPlus className="mr-2" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        }
        {message && <div className="p-8 text-center">{message}</div>}
        <BottomNavbar />
    </div>
  )
}
