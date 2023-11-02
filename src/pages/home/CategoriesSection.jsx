import { useRef } from 'react';
import { categories } from '../../assets/data'
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const breakPoints = [
  { width: 1, itemsToShow: 2, itemPadding:[5, 5] },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { 
    width: 850, 
    itemsToShow: 4,
    itemPadding:[7, 7]
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

export default function CategoriesSection() {

  const carouselRef = useRef()

  return (
    <>
    {/* <div className="flex justify-center mt- bg-secondary">
      <span className="btn bg-darkcl text-white md:text-3xl px-[3rem] md:py-4 py-2">استعرض تشكيلتنا</span>
    </div> */}
    <div className="flex items-center relative md:mx-[5%] md:py-[3rem] py-[1rem] overflow-hiddn">
      <button className="md:h-10 md:w-10 flex items-center justify-center absolute md:left-[-2.2rem] left-[-.3rem] z-30 text-3xl md:bg-primary/30 hover:bg-primary rounded-full" onClick={() => carouselRef.current.slidePrev()}>
        <FiChevronLeft />
      </button>
      <Carousel className="overflow-hidde z-20" enableAutoPlay breakPoints={breakPoints} ref={carouselRef} showArrows={false} outerSpacing={0} pagination={false}>
        {categories.map((category, index) => (
          <div className="bg-white hover:bg-secondary hover:text-white px-2 md:mx-2" key={index}>
            <div className="text-center md:text-2xl text-xl md:py-2 py-1">
              {category.name}
            </div>
            <div className="md:h-[200px] h-[130px]">
              <img src={category.image} alt="" />
            </div>
            <div className="md:p-4 p-2">
              <p className="line-clamp-3 text-right">{category.text}</p>
              <button className="btn bg-primary text-white rounded w-full py-1 md:text-xl mt-3">start</button>
            </div>
          </div>
        ))}
      </Carousel>
      <button className="md:h-10 md:w-10 flex items-center justify-center absolute md:right-[-2.2rem] right-[-.3rem] z-30 text-3xl md:bg-primary/30 hover:bg-primary rounded-full" onClick={() => carouselRef.current.slideNext()}>
        <FiChevronRight />
      </button>
    </div>
    </>
  )
}
