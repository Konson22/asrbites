import ItemCart from "../../components/ItemCart";
import { useGlobalApi } from "../../contexts/ContextProvider";
import { CategoriesLinks } from "../StorePage";


export default function ProductSection() {

    const { candy } = useGlobalApi();

    const filterByCategory = () => {}
  return (
    <div className="md:px-[5%] px-[3%] mt-8">
        <CategoriesLinks handleAction={filterByCategory} />
        {/* <div className="flex flex-wrap justify-end">
            <span className="bg-white rounded cursor-pointer ml-2 mt-4 px-2 py-1">
                All
            </span>
            {categories.map(category => (
                <span className="bg-white rounded cursor-pointer ml-2 mt-4 px-2 py-1">{category.name}</span>
            ))}
        </div> */}
        <div className="flex-1 grid md:grid-cols-4 grid-cols-2 gap-5 mt-6">
            {candy && candy.length > 0 && candy.slice(0,8).map(item => <ItemCart item={item} key={item.id} />)}
        </div>
        <button className="text-rose-600 border border-rose-600 px-6 py-2 rounded mx-auto mt-8 block">عرض الكل</button>
    </div>
  )
}
