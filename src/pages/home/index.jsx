import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CategorySection from "./CategorySection";
// import { useGlobalApi } from "../contexts/ContextProvider";



export default function HomePage() {

  // const { candy } = useGlobalApi();

  return (
   <div className="">
    <Navbar />
    <header className="header-container md:py-[23vh] py-[7vh] flex items-center px-[8%]">
      <div className="md:w-[65%]">
        <h1 className="md:text-7xl text-4xl text-white font-bold">Sugar, Spice, and Everything Nice – All in One Place!</h1>
        <h1 className="hidden text-7xl text-white font-bold">Where Every Treat is a Sweet Surprise!</h1>
        <Link className="w-[max-content] bg-red-900 flex items-center justify-center text-white rounded px-5 py-3 mt-12" to='/store'>
          <span className="text-base">Buy Candy</span>
          <FaArrowRight className="ml-2" />
        </Link> 
      </div>
    </header>
    <CategorySection />
    {/* promotion */}
    <div className="promation py-[5rem]">
      <h2 className="text-4xl">made from sugar, corn syrup, and flavorings.
    with lollipops, peppermint candies, and butterscotch candies</h2>
    </div>
    <div className="px-[8%] py-[4rem]">
      <h3 className="text-4xl font-bold text-gray-600">TOP PRODUCTS</h3>
    </div>
   </div>
  )
}




