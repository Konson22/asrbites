import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../contexts/ContextProvider";
import { FiShoppingCart } from "react-icons/fi";


export default function ItemCart({ item }) {

    const { addItemToCart } = useGlobalApi()


    const handleAddItem = () => {
        const obj = {
            id:item.id,
            name:item.name,
            price:item.price,
            image:item.image,
        }
        addItemToCart(obj)
    }
  return (
    <div className="shadow bg-white rounded-md">
        <div className="h-[140px]">
            <img className="rounded-md" src={item.image} alt="" />
        </div>
        <div className="p-2">
            <p className="text-sm font-bold line-clamp-1">{item.name}</p>
            <p className="text-sm line-clamp-1">{item.text}</p>
            <div className="flex justify-between">
                <span className="flex items-center">
                    <FaStar />
                    {item.rate}
                </span>
                <span className="">{item.price}</span>
            </div>
            <div className="grid grid-cols-2 gap-1 mt-3">
                <Link 
                    className="w-full text-center bg-red-900 text-sm text-white py-1"
                    to={`/product/details/${item.id}`} key={item.id}
                >
                    Detail
                </Link>
                <button 
                    className="w-full flex items-center justify-center bg-red-900 text-sm text-white py-1"
                    onClick={() => handleAddItem()}
                >
                    <FiShoppingCart className="mr-1" /> Add
                </button>
            </div>
        </div>
    </div>
  )
}
