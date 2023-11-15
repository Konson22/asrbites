import { useEffect, useState } from "react";
import { useGlobalApi } from "../contexts/ContextProvider";
import { categories } from "../assets/data";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";


export default function Products() {

  const { isLoading, candy, deleteProduct } = useGlobalApi();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(candy.length > 0){
      setData(candy);
      setMessage('')
    }else{
      setMessage('No data found!.');
    }
  }, [candy, isLoading]);
    
  return (
    <div className="md:mt-8">
      {message && <div className="">{message}</div>}
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-1">
        {isLoading && <div className="">Loading...</div>}
        {(!isLoading && data.length > 0) && data.map(item => (
          <div className="bg-white rounded-md overflow-hidden shadow-md mb-1 p-2" key={item.productID}>
            <div className="block md:h-[200px] h-[160px] md:w-full">
              <img src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
            </div>
            <div className="md:p-3 p-3">
              <p className="text-xl text-right font-bold text-slate-500 line-clamp-1">{item.name}</p>
              <p className="text-right line-clamp-1">{item.description}</p>
              <div className="md:flex items-center justify-between mt-2">
                <div className="flex justify-between items-center w-full">
                  <div className="md:fontbold flex items-center justify-end md:w-auto w-full">
                    <span>ر.س</span>
                    <h4 className="md:text-3xl text-xl text-cl4">{item.price}</h4>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link className="flex items-center bg-green-500 text-white px-2 text-sm py-1 rounded mr-2" to={`/admin/edit/${item.productID}`}>
                    <span className="">
                      <FaRegEdit />
                    </span>
                    Edit
                  </Link>
                  <button 
                    className="flex items-center bg-cl4 text-white px-2 py-1 rounded text-sm"
                    onClick={() => deleteProduct(item.productID)}
                  >
                    <span className="">
                      <FiTrash />
                    </span>
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CategoriesLinks({ handleAction }){
    return(
        <div className='md:flex hidden flex-wrap justify-end'>
            {categories.map(category => (
                <span 
                    className="md:h-[3rem] h-auto bg-whitee rounded cursor-pointer flex items-center ml-2 px-4 border"
                    onClick={() => handleAction(category.name)}
                >
                    {category.name}
                </span>
            ))}
            <span className="bg-whitee rounded cursor-pointer flex items-center ml-2 px-4 border"
                onClick={() => handleAction('all')}
            >
                All
            </span>
        </div>
    )
}
