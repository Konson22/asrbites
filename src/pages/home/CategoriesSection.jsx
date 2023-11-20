import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../../assets/staticData";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemPadding: [5, 5] },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  {
    width: 850,
    itemsToShow: 4,
    itemPadding: [7, 7],
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

export default function CategoriesSection() {
  const carouselRef = useRef();

  return (
    <>
      <div className={` bg-cl22 flex justify-center mt-5`}>
        <span className="title md:text-5xl text-3xl font-bold text-dakrpink">
          استعرض تشكيلتنا
        </span>
      </div>
      <div className="flex items-center relative md:mx-[5%] mx-4 md:py-[2rem] py-[.5rem] overflow-hiddn">
        <button
          className="md:h-10 md:w-10 flex items-center justify-center absolute md:left-[-2.2rem] left-[-.6rem] z-30 md:text-3xl text-4xl md:opacity-100 opacity-50 md:bg-lightred/30 hover:bg-lightred rounded-full"
          onClick={() => carouselRef.current.slidePrev()}
        >
          <FiChevronLeft />
        </button>
        <Carousel
          className="overflow-hidde z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {categories.map((category, index) => (
            <Link
              className="bg-white rounded-md overflow-hidden md:mx-2 p-2"
              key={index}
              to={`/store?category=${category.category}`}
            >
              <div className="md:h-[200px] h-[220px]">
                <img src={category.image} alt="" />
              </div>
              <div className="md:p-4 p-2">
                <h3 className="text-2xl text-right">{category.name}</h3>
                <p className="line-clamp-3 text-right">{category.text}</p>
                <p className="line-clamp-3 text-right">{category.price}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">15</span>
                    <span>ر.س</span>
                  </div>
                  <button className="bg-dakrpink text-white rounded px-5 py-1 md: text-xl">
                    start
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <button
          className="md:h-10 md:w-10 flex items-center justify-center absolute md:right-[-2.2rem] right-[-.6rem] z-30 md:text-3xl text-4xl md:opacity-100 opacity-50 md:bg-primary/30 hover:bg-primary rounded-full"
          onClick={() => carouselRef.current.slideNext()}
        >
          <FiChevronRight />
        </button>
      </div>
    </>
  );
}
