import { useRef } from "react";
import Carousel from "react-elastic-carousel";
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

export default function TestimonialSection() {

  const carouselRef = useRef()

  return (
    <div className="md:mx-[8%] px-8 mt-[3rem] relative flex items-center">
        <button className="absolute md:left-[-1.5rem] left-[-.2rem] z-30 text-3xl text-rose-500 p-2 rounded-full" onClick={() => carouselRef.current.slidePrev()}>
          <FiChevronLeft />
        </button>
        <Carousel 
            className="z-20" 
            enableAutoPlay 
            breakPoints={breakPoints} 
            ref={carouselRef} 
            showArrows={false} outerSpacing={0} pagination={false}
        >
            {data.map((d, index) => (
                <div className=" bg-white p-4" key={index}>
                    <div className="md:h-[160px] h-[120px] md:w-[160px] w-[120px] mx-auto">
                        <img className="rounded-full" src={d.image} alt="" />
                    </div>
                    <div className="flex-1 md:text-center text-center">
                        <p>{d.text}</p>
                    </div>
                </div>
            ))}
        </Carousel>
        <button className="absolute md:right-[-1.5rem] right-[-.2rem] z-30 text-3xl text-rose-500 p-2 rounded-full" onClick={() => carouselRef.current.slidePrev()}>
          <FiChevronRight />
        </button>
    </div>
  )
}


const data = [
    {
        name:'',
        text:`
         منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا `,
        image:process.env.PUBLIC_URL+'/images/Image.png'
    },
    {
        name:'',
        text:`
         منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا `,
        image:process.env.PUBLIC_URL+'/images/Image-2.png'
    },
    {
        name:'',
        text:`
         منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا `,
        image:process.env.PUBLIC_URL+'/images/Image-1.png'
    },
    {
        name:'',
        text:`
         منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا `,
        image:process.env.PUBLIC_URL+'/images/Image-22.png'
    },
]