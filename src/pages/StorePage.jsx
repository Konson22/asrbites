import { useState } from "react";
import { categories } from "../assets/staticData";
import ProductCart from "../components/ProductCart";
import { useGlobalApi } from "../manager/ContextProvider";
import { FiChevronDown, FiChevronLeft, FiFilter } from "react-icons/fi";

export default function StorePage() {
  const { isLoading, candy } = useGlobalApi();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:px-[5%] px-2 md:mt-6 mt-5">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <div
            className="
              h-[3rem] flex items-center rounded relative bg-white
              bg-transparent border cursor-pointer border-cl1 text-right px-3 mr-2
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            categories
            <FiChevronDown className="" />
            {isOpen && (
              <div className="bg-white w-[130px] border border-cl1 rounded py-2 absolute top-full left-0 right-0">
                {categories.map((category) => (
                  <div
                    className="px-3 py-1 border-b"
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border bg-white border-cl1 rounded flex-1">
            <input
              className="h-[3rem] bg-transparent border-none focus:border-none focus:outline-none text-right w-full px-4"
              type="search"
              placeholder="...البحث"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center border px-4 py-2 rounded">
          <span>filter</span>
          <FiFilter />
        </span>
        <div className="flex items-center text-xl ">
          <span className="text-right">{selectedCategory}</span>
          <FiChevronLeft />
          <span className="text-right font-bold text-cl1">منتجأت</span>
        </div>
      </div>
      <div className="md:mt-8">
        <div className="flex-1 grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 mt-6">
          {isLoading && <div className="">Loading...</div>}
          {!isLoading &&
            candy.length > 0 &&
            candy.map((item) => <ProductCart item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
}
