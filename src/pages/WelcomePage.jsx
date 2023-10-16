import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { 
    width: 850, 
    itemsToShow: 3,
    itemPadding:[0, 10]
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]


export default function WelcomePage() {

  const carouselRef = useRef()
  return (
   <div className="">
    <Navbar />
    <header className="header-container md:py-[23vh] py-[10vh] flex items-center px-[8%]">
      <div className="md:w-[65%]">
        <h1 className="md:text-7xl text-4xl text-white font-bold">Sugar, Spice, and Everything Nice – All in One Place!</h1>
        <h1 className="hidden text-7xl text-white font-bold">Where Every Treat is a Sweet Surprise!</h1>
        <Link className="w-[max-content] bg-red-900 flex items-center justify-center text-white rounded px-5 py-3 mt-12" to='/home'>
          <span className="text-base">Buy Candy</span>
          <FaArrowRight className="ml-2" />
        </Link> 
      </div>
    </header>
    <div className="relative flex items-center md:mx-[8%] mx-[3%] py-14">
      <button className="absolute left-[-0.5rem] z-30 text-3xl bg-white/50 p-2 rounded-full" onClick={() => carouselRef.current.slideNext()}>
        <FiChevronLeft />
      </button>
      <Carousel className="z-20" breakPoints={breakPoints} ref={carouselRef} showArrows={false} outerSpacing={0} pagination={false}>
        {data.map(category => (
          <div className="w-full " key={category.name}>
            <div className="h-[200px]">
              <img src={category.image} alt="" />
            </div>
            <div className="p-3">
              <h3 className="text-xl">{category.name}</h3>
              {/* <p className="text-xl">{category.text}</p> */}
            </div>
          </div>
        ))}
      </Carousel>
      <button className="absolute right-[-0.5rem] z-30 text-3xl bg-white/50 p-2 rounded-full" onClick={() => carouselRef.current.slidePrev()}>
        <FiChevronRight />
      </button>
    </div>
    {/* promotion */}
    <div className="promation py-[5rem]">
      <h2 className="text-4xl">made from sugar, corn syrup, and flavorings.
    with lollipops, peppermint candies, and butterscotch candies</h2>
    </div>
   </div>
  )
}


const data = [
  {
    name:'Chocolate',
    text:`:
    made from sugar, corn syrup, and flavorings.
    with lollipops, peppermint candies, and butterscotch candies.`,
    image:process.env.PUBLIC_URL+'/images/chocolates-1737503_1280.jpg'
  },
  {
    name:'Caramels',
    text:`
      Soft candies have a chewy or gummy texture. with gummy bears, fruit chews, and licorice.
   `,
    image:process.env.PUBLIC_URL+'/images/dessert-352475_1280.jpg'
  },
  {
    name:'Cookie',
    text:`
      Jelly candies are soft and gel-like, often made from fruit juice or puree.
      Examples include jellybeans and gumdrops.
   `,
    image:process.env.PUBLIC_URL+'/images/chocolate-183543_1280.jpg'
  },
  {
    name:'Bakery',
    text:`
      These candies contain various types of nuts, often coated in sugar or chocolate.
      Examples include almond clusters and peanut butter cups.
   `,
    image:process.env.PUBLIC_URL+'/images/chocolate-183543_1280.jpg'
  },
]


// function Header() {
//   return(
//     <div className="
//       h-screen flex flex-col justify-end 
//     ">
//       <div className="flex-1 welcome-page"></div>
//       <div className="bg-white rounded-t-[7%] mt-[-6rem] px-10 pt-14 pb-[5rem]">
//         <h2 className="text-3xl font-bold">Find And Get Your Best Cake</h2>
//         <p className="my-6">
//           Find the most populer cake with the best quality here
//         </p>
//         <Link className="w-full bg-red-900 flex items-center justify-center text-white rounded-xl px-5 py-3 mt-12" to='/home'>
//           <span className="text-base">Get Started</span>
//           <FaArrowRight className="ml-2" />
//         </Link> 
//       </div>
//     </div>
//   )
// }