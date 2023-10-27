import { FiSearch } from "react-icons/fi"
import { useGlobalApi } from "../contexts/ContextProvider"
import ItemCart from "../components/ItemCart"
import { categories } from "../assets/data";
import { useEffect, useState } from "react";


export default function StorePage() {

    const { isLoading, candy } = useGlobalApi();
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
        <div className="md:flex items-center justify-between md:mx-[5%] mx-[3%] md:my-6 my-3">
            <h3 className="md:text-2xl text-xl font-bold text-right md:mb-0 mb-2">المنتجات</h3>
            <div className="md:w-[400px] flex items-center bg-white p-1 shadow-md shadow-black/10 rounded-md border  px-3">
                <input className="h-[2.5rem] bg-transparent text-right w-full px-2" type="search" placeholder="...البحث" />
                <span className="">
                    <FiSearch />
                </span>
            </div>
        </div>
        <div className="content md:px-[5%] px-[3%] md:mt-8">
            <CategoriesLinks handleAction={filterByCategory} />
            {message && <div className="">{message}</div>}
            <div className="flex-1 grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 mt-6">
                {isLoading && <div className="">Loading...</div>}
                {(!isLoading && data.length > 0) && data.map(item => <ItemCart item={item} key={item.id} />)}
            </div>
        </div>
    </div>
  )
}

export function CategoriesLinks({ handleAction }){
    return(
        <div className='flex flex-wrap justify-end'>
            {categories.map(category => (
                <span 
                    className="bg-white rounded cursor-pointer ml-2 mt-4 px-2 py-1"
                    onClick={() => handleAction(category.name)}
                >
                    {category.name}
                </span>
            ))}
            <span className="bg-white rounded cursor-pointer ml-2 mt-4 px-2 py-1"
                onClick={() => handleAction('all')}
            >
                All
            </span>
        </div>
    )
}