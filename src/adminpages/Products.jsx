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
    
    
    const filterByCategory = e => {
      if(e === 'all'){
        setData(candy);
        setMessage('');
      }else{
        const filteredResults = candy.filter(item => item.category === e);
        if(filteredResults.length > 0){
          setData(filteredResults);
          setMessage('');
        }else{
          setMessage(`Sorry ${e} is out of stock please check soon.`);
        }
      }
    }
  return (
    <div className="">
        <div className="flex justify-between">
            <CategoriesLinks handleAction={filterByCategory} />
            <div className="flex-1 flex items-center bg-white rounded-md border">
                <input className="md:h-[3rem] h-[2.9rem] bg-transparent text-right w-full px-3 mr-2" type="search" placeholder="...البحث" />
                <button className="flex items-center md:bg-primary md:text-white text-rose-700 h-full md:px-5 px-3">
                    <span className="md:block hidden">البحث</span>
                </button>
            </div>
        </div>
        <div className="md:flex items-center justify-between">
        </div>
        <div className="md:mt-8">
          {message && <div className="">{message}</div>}
          <div className="flex-1 grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-1 mt-6">
            {isLoading && <div className="">Loading...</div>}
            {(!isLoading && data.length > 0) && data.map(item => (
              <div className="bg-white rounded-md overflow-hidden shadow-md mb-1 p-2">
                <div className="block md:h-[200px] md:w-full">
                  <img src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
                </div>
                <div className="md:p-3 py-3">
                  <p className="text-xl text-right font-bold text-slate-500 line-clamp-1">{item.name}</p>
                  <p className="text-right line-clamp-2">{item.description}</p>
                  <div className="md:flex items-center justify-between mt-2">
                    <div className="flex justify-between items-center w-full">
                      <div className="md:fontbold flex items-center">
                        <span>ر.س</span>
                        <h4 className="md:text-2xl text-xl text-cl4">{item.price}</h4>
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
