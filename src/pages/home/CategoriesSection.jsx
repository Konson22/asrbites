import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../../assets/staticData";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 2] },
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
    <div className="md:mx-[5%] mx-0">
      <div className="flex items-center justify-between my-3 px-3">
        <div className="flex items-center">
          <button
            className="
              md:h-10 md:w-10 h-7 w-7 flex items-center justify-center 
              md:text-2xl text-2xl md:opacity-100 opacity-50 
              bg-cl1 text-white hover:bg-cl1 rounded-full
            "
            onClick={() => carouselRef.current.slidePrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            className="
              md:h-10 md:w-10 h-7 w-7 flex items-center justify-center 
              md:text-2xl text-2xl md:opacity-100 opacity-50 
              bg-cl1 text-white hover:bg-cl1 rounded-full ml-4
            "
            onClick={() => carouselRef.current.slideNext()}
          >
            <FiChevronRight />
          </button>
        </div>
        <span className="title md:text-5xl text-2xl font-bold text-dakrpink">
          تشكيلتنا
        </span>
      </div>
      <div className="flex items-center relative md:py-[2rem] py-[.5rem] overflow-hiddn">
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
              className="bg-white rounded-md overflow-hidden border border-cl1/50"
              key={index}
              to={`/store?category=${category.category}`}
            >
              <div className="md:h-[200px] h-[120px]">
                <img src={category.image} alt="" />
              </div>
              <div className="text-center md:p-4 p-2">
                <h3 className="text-2xl">{category.name}</h3>
                <p className="line-clamp-3">{category.price}</p>
                <div className="flex justify-center items-end">
                  <span>ر.س</span>
                  <span className="text-xl font-bold">15</span>
                </div>
                <button className="bg-cl1 text-white rounded px-5 py-1 text-sm mx-auto">
                  start
                </button>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
