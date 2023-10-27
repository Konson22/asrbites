import { FiSearch } from "react-icons/fi"
import { useGlobalApi } from "../contexts/ContextProvider"
import ItemCart from "../components/ItemCart"
import { categories } from "../assets/data";


export default function StorePage() {

    const { candy } = useGlobalApi();

    const categoriesContent = (cName) => {
        return (
            <div className={`${cName}`}>
                {categories.map(category => (
                    <span className="bg-white rounded ml-2 mt-4 px-2 py-1">{category.name}</span>
                ))}
            </div>
        )
    }

  return (
    <div className="">
        <div className="md:flex items-center justify-between md:mx-[5%] mx-[3%] my-6">
            {categoriesContent('md:flex hidden')}
            <div className="md:w-[400px] flex items-center bg-white p-1 shadow-md shadow-black/10 rounded-md border  px-3">
                <input className="h-[2.5rem] bg-transparent text-right w-full px-2" type="search" placeholder="...البحث" />
                <span className="">
                    <FiSearch />
                </span>
            </div>
            {categoriesContent('md:hidden flex flex-wrap justify-end')}
        </div>
        <div className="content md:px-[5%] px-[3%] mt-8">
            <h3 className="text-2xl font-bold text-right">المنتجات</h3>
            <div className="flex-1 grid md:grid-cols-4 grid-cols-2 gap-5 mt-6">
                {candy && candy.length > 0 && candy.map(item => <ItemCart item={item} key={item.id} />)}
            </div>
        </div>
    </div>
  )
}

