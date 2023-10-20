import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Carousel from "react-elastic-carousel";
import { useRef } from "react";


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

  const carouselRef = useRef()

  return (
    <div className="relative flex items-center md:mx-[8%] mx-[3%] py-14">
    <button className="absolute left-[-0.5rem] z-30 text-3xl bg-white/50 p-2 rounded-full" onClick={() => carouselRef.current.slideNext()}>
      <FiChevronLeft />
    </button>
    <Carousel className="z-20" breakPoints={breakPoints} ref={carouselRef} showArrows={false} outerSpacing={0} pagination={false}>
      {data.map(category => (
        <div className="w-full" key={category.name}>
          <div className="h-[200px]">
            <img src={`http://localhost:3001/${category.product_image}`} alt="" />
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