import { FiChevronDown, FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react";
import { useGlobalApi } from "../../contexts/ContextProvider";
import { categories } from "../../assets/data";
import ProductCart from "../../components/ProductCard";


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
    <div className="md:px-[5%] px-2 md:mt-6 mt-3">
        <div className="flex justify-between">
            <CategoriesLinks handleAction={filterByCategory} />
            <div className="flex-1 flex items-center bg-white rounded-md border">
                <input className="md:h-[3rem] h-[2.9rem] bg-transparent text-right w-full px-3 mr-2" type="search" placeholder="...البحث" />
                <button className="flex items-center md:bg-primary md:text-white text-rose-700 h-full md:px-5 px-3">
                    <span className="md:block hidden">البحث</span>
                    {/* <FiSearch /> */}
                </button>
            </div>
            {/* <DropdownCategories /> */}
        </div>
        <div className="md:flex items-center justify-between">
        </div>
        <div className="md:mt-8">
            {message && <div className="">{message}</div>}
            <div className="flex-1 grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-1 mt-6">
                {isLoading && <div className="">Loading...</div>}
                {(!isLoading && data.length > 0) && data.map(item => <ProductCart item={item} key={item.id} />)}
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

function DropdownCategories(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="h-[3rem] md:hidden relative flex items-center border bg-white rounded md:px-5 px-3"
            onClick={() => setIsOpen(!isOpen)}
        >
            <FiChevronDown className={`mr-1 duration-200 ${isOpen ? 'rotate-[180deg]':''}`} />
            الأصناف
            {isOpen && 
                <div className="absolute duration-700 top-[103%] right-0 bg-white border w-[140%] py-2">
                    {categories.map(category => (
                        <div className="text-right px-6 py-1" key={category.name}>{category.name}</div>
                    ))}
                </div>
            }
        </div>
    )
}