import { categories } from "../../assets/data";
import ItemCart from "../../components/ItemCart";
import { useGlobalApi } from "../../contexts/ContextProvider";


export default function ProductSection() {

    const { candy } = useGlobalApi();

  return (
    <div className="md:px-[5%] px-[3%] mt-8">
        <div className="flex items-center justify-end">
            <div className="px-3 font-bold">All</div>
            {categories.map(category => (
                <div className="px-3 font-bold">{category.name}</div>
            ))}
        </div>
        <div className="flex-1 grid md:grid-cols-4 grid-cols-2 gap-5 mt-6">
            {candy && candy.length > 0 && candy.slice(0,8).map(item => <ItemCart item={item} key={item.id} />)}
        </div>
        <button className="text-rose-600 border border-rose-600 px-6 py-2 rounded mx-auto mt-8 block">View All</button>
    </div>
  )
}
