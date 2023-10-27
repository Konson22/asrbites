import { Link } from "react-router-dom";
// import { useGlobalApi } from "../contexts/ContextProvider";
import { FiShoppingCart } from "react-icons/fi";
import AnimatedCard from "./AnimateCard";


export default function ItemCart({ item }) {

    // const { addItemToCart } = useGlobalApi()
    // const [qty, setQty] = useState(1)


    // const handleAddItem = () => {
    //     const obj = {
    //         productID:item.productID,
    //         name:item.name,
    //         price:item.price,
    //         qty,
    //         product_image:item.product_image,
    //     }
    //     addItemToCart(obj)
    // }
  return (
    <AnimatedCard>
        <div className="bg-white shadow-md mb-4">
            <Link className="" to={`/product/details/${item.productID}`}>
                <div className="block md:h-[200px] h-[160px]">
                    <img className="" src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
                </div>
                <div className="p-3">
                    <p className="text-xl font-bold text-slate-500 line-clamp-1">{item.name}</p>
                    <div className="md:flex items-center justify-between mt-2">
                        <div className="flex justify-between items-center w-full">
                            <h4 className="font-bold text-rose-600">{item.price} ريال</h4>
                            <button className="
                                    flex items-center justify-center bg-rose-800 text-white py-1 px-3 
                                    rounded ml-4
                                "
                                // onClick={() => handleAddItem()}
                            >
                                <FiShoppingCart className="mr-2" />
                                إضافة
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </AnimatedCard>
  )
}
