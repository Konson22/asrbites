import { FaCartPlus, FaStar } from "react-icons/fa"
import Navbar, { BottomNavbar } from "../components/Navbar";
import { useGlobalApi } from "../contexts/ContextProvider";
import GoBackButton from "../components/GoBackButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import ItemCart from "../components/ItemCart";


export default function CandyDetails() {

    const { isLoading, candy } = useGlobalApi();
    const { itemID } = useParams();
    const [message, setMessage] = useState('')
    const [item, setItem] = useState(null)
    const [count, setCount] = useState(1)

    useEffect(() => {
        const result = !isLoading && candy.filter(c => c.productID === parseInt(itemID))[0]
        if(result){
            setItem(result);
            setMessage('');
        }else{
            setMessage('Not found!');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemID, candy]);

  return (
    <div>
        <Navbar icon={<GoBackButton />} text='Details' />
        <div className="md:mx-[8%] mx-[3%] my-5">
            <div className="flex-1">
                {item &&
                    <div className="md:flex bg-white">
                        <div className="md:h-[320px] h-[260px] flex-1">
                            <img className="rounded-[5%" src={`http://localhost:3001/${item.product_image}`} alt="" />
                        </div>
                        <div className="flex-1 md:p-6">
                            <h3 className="text-xl font-bold my-2">{item.name}</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex text-yellow-400 my-6">
                                    <FaStar className="mr-2" />
                                    <FaStar className="mr-2" />
                                    <FaStar className="mr-2" />
                                    <FaStar className="mr-2" />
                                    <FaStar className="mr-2" />
                                </div>
                            </div>
                            <p>
                                This is some description for this candy products
                                This is some description for this candy products
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold">{item.price}$</span>
                                <div className="flex items-center mt-3">
                                    <div className="flex items-center mr-3">
                                        <span className="cursor-pointer text-xl flex items-center justify-center rounded-full bg-red-100 p-1" onClick={() => count !== 1 && setCount(count - 1)}>
                                            <FiMinus />
                                        </span>
                                        <span className="text-xl font-bold px-3">{count}</span>
                                        <span className="cursor-pointer text-xl flex items-center justify-center rounded-full bg-red-200 p-1" onClick={() => setCount(count + 1)}>
                                            <FiPlus />
                                        </span>
                                    </div>
                                    <button className="bg-red-900 text-white px-3 py-2 rounded-md flex items-center justify-center">
                                        <FaCartPlus className="mr-2" />
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {message && <div className="p-8 text-center">{message}</div>}
            </div>
            <div className="flex-">
                <h3 className="text-2xl">Related Products</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-5 bg-white mt-8 content">
                    {candy && candy.length > 0 && candy.map(item => <ItemCart item={item} key={item.id} />)}
                </div>
            </div>
        </div>
        <BottomNavbar />
    </div>
  )
}
