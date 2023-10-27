import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import { useGlobalApi } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";


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

export default function CategorySection() {

  const { candy } = useGlobalApi();

  const carouselRef = useRef()

  return (
    <main className="md:mx-[8%] mx-[3%] py-14">
      <h2 className="text-4xl font-bold mb-7 text-center text-rose-700">أفضل المنتجات</h2>
      <div className="relative flex items-center">
        <button className="absolute md:left-[-1.5rem] left-0 z-30 text-3xl text-rose-500 p-2 rounded-full" onClick={() => carouselRef.current.slidePrev()}>
          <FiChevronLeft />
        </button>
        <Carousel className="z-20" enableAutoPlay breakPoints={breakPoints} ref={carouselRef} showArrows={false} outerSpacing={0} pagination={false}>
          {(candy && candy.length > 0) && candy.map((item, index) => (
            <Link className="bg-white block shadow-md w-full border" key={index} to={`/product/details/${item.productID}`}>
              <div className="h-[230px]">
                <img src={`${process.env.REACT_APP_API}/${item.product_image}`} alt="" />
              </div>
              {/* <div className="p-3">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="line-clamp-2 text-xl">{item.description}</p>
              </div> */}
            </Link>
          ))}
        </Carousel>
        <button className="absolute md:right-[-1.5rem] right-0 z-30 text-3xl text-rose-500 p-2 rounded-full" onClick={() => carouselRef.current.slideNext()}>
          <FiChevronRight />
        </button>
      </div>
    </main>
  )
}



