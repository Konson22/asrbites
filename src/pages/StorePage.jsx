import { useEffect, useState } from "react";
import { categories } from "../assets/staticData";
import ProductCart from "../components/ProductCart";
import { useGlobalApi } from "../manager/ContextProvider";
import { FiChevronDown, FiChevronLeft, FiFilter } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { FaSwift } from "react-icons/fa";

export default function StorePage() {
  const { isLoading, candy } = useGlobalApi();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [param, setQuery] = useSearchParams(false);
  const query = param.get("category");

  const handleCategory = (e) => {
    setMessage("");
    if (e === "جميع") {
      setQuery();
    } else {
      setQuery({ category: e });
    }
  };

  useEffect(() => {
    if (!query) {
      setData(candy);
      setMessage("");
    } else {
      if (candy.length > 0) {
        const results = candy.filter((item) => item.category.startsWith(query));
        if (results.length > 0) {
          setData(results);
        } else {
          setMessage("No Item found");
        }
      }
    }
  }, [candy, query]);

  return (
    <div className="md:px-[5%] px-2 md:mt-14 mt-5">
      <div className="flex items-center justify-between">
        {categories.map((category) => (
          <div
            className="flex flex-col items-center justify-center"
            key={category.name}
            onClick={() => handleCategory(category.name)}
          >
            <div className="h-12 w-12 border border-cl1 text-3xl text-cl1 rounded-full">
              <img className="rounded-full" src={category.image} alt="" />
            </div>
            {category.name}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center border px-4 py-2 rounded">
          <span>filter</span>
          <FiFilter />
        </span>
        <div className="flex items-center text-xl ">
          {query && (
            <>
              <span className="text-right">{query}</span>
              <FiChevronLeft />
            </>
          )}
          <span className="text-right font-bold text-cl1">منتجأت</span>
        </div>
      </div>
      {message && <div className="py-10 text-center font-bold">{message}</div>}
      <div className="md:mt-8">
        <div className="flex-1 grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 mt-6">
          {isLoading && <div className="">Loading...</div>}
          {data.length > 0 &&
            !message &&
            data.map((item) => (
              <ProductCart item={item} key={item.productID} />
            ))}
        </div>
      </div>
    </div>
  );
}
