import { Link } from "react-router-dom";
import { useGlobalApi } from "../contexts/ContextProvider";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";


export default function ItemCart({ item }) {

    const { addItemToCart } = useGlobalApi()
    const [qty, setQty] = useState(1)


    const handleAddItem = () => {
        const obj = {
            productID:item.productID,
            name:item.name,
            price:item.price,
            qty,
            product_image:item.product_image,
        }
        addItemToCart(obj)
    }
  return (
    <div className="bg-white mb-4">
        <Link className="block md:h-[200px] h-[180px]" to={`/product/details/${item.productID}`}>
            <img className="" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
        </Link>
        <div className="p-3">
            <p className="text-xl font-bold text-slate-500 line-clamp-1">{item.name}</p>
            <div className="md:flex items-center justify-between mt-2">
                <h4 className="font-bold text-rose-600 flex-1">{item.price}</h4>
                <div className="flex justify-between items-center">
                    <span className="flex items-center">
                        <FiHeart className="text-rose-600 text-xl" />
                        15
                    </span>
                    <button className="
                            flex items-center justify-center bg-darkpink text-white py-1 px-3 
                            rounded ml-4
                        "
                        onClick={() => handleAddItem()}
                    >
                        <FiShoppingCart className="mr-2" />
                        إضافة
                    </button>
                </div>
            </div>
        </div>
    </div>
    // <div className="shadowrounded-md">
    //     <Link className="block h-[200px]" to={`/product/details/${item.productID}`}>
    //         <img className="" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
    //     </Link>
    //     <div className="p-2">
    //         <p className="text-xl font-bold line-clamp-1">{item.name}</p>
    //         <p className="text-sm line-clamp-1">{item.description}</p>
    //         <div className="flex justify-between">
    //             <span className="flex items-center">
    //                 <FaStar />
    //                 {item.rate}
    //             </span>
    //         </div>
    //         <div className="flex items-center justify-between mt-3">
    //             <span className="text-xl font-bold">{item.price}</span>
    //             <Link 
    //                 className="w-full text-center bg-red-900 text-sm text-white py-2"
    //                 to={`/product/details/${item.productID}`} key={item.productID}
    //             >
    //                 Detail
    //             </Link>
    //             <div className="flex items-center">
    //                 <div className="flex items-center mr-3">
    //                     <span className="cursor-pointer flex items-center justify-center rounded-full bg-red-100 p-1" onClick={() => qty !== 1 && setQty(qty - 1)}>
    //                         <FiMinus />
    //                     </span>
    //                     <span className="text-xl font-bold px-3">{qty}</span>
    //                     <span className="cursor-pointer flex items-center justify-center rounded-full bg-red-200 p-1" onClick={() => setQty(qty + 1)}>
    //                         <FiPlus />
    //                     </span>
    //                 </div>
    //                 <button 
    //                     className="w-full flex items-center justify-center bg-red-900 text-sm text-white px-5 py-1"
    //                     onClick={() => handleAddItem()}
    //                 >
    //                     <FiShoppingCart className="mr-1" /> Add
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}
