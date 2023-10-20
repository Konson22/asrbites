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
            image:item.product_image,
        }
        addItemToCart(obj)
    }
  return (
    <div className="shadowrounded-md">
        <div className="h-[200px]">
            <img className="rounded-md" src={`http://localhost:3001/${item.product_image}`} alt="" />
        </div>
        <div className="p-2">
            <p className="text-xl font-bold line-clamp-1">{item.name}</p>
            <div className="flex text-sm">
                <FaStar className="mr-2" />
                <FaStar className="mr-2" />
                <FaStar className="mr-2" />
                <FaStar className="mr-2" />
                <FaStar className="mr-2" />
            </div>
            <p className="text-sm line-clamp-1">{item.description}</p>
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
                    to={`/product/details/${item.productID}`} key={item.productID}
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
