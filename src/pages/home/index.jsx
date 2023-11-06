import { Link } from "react-router-dom";
import { AnimateLeft, AnimateRight } from "../../components/AnimateCards";
import CategoriesSection from "./CategoriesSection";
import Header from "./Header";
import TestimonialSection from "./TestimonialSection";
import WhatWeCanDo from "./WhatWeCanDo";
import PricingSection from "./PricingSection";


export default function HomePage() {
  return (
    <div>
      <Header />
      <CategoriesSection />
      
      <div className="">
        <div className="redsvg md:h-[10rem] h-[5rem]"></div>
        <div className="md:flex md:flex-1 items-center bg-lightred text-white md:px-[10%] px-[5%]">
          <AnimateLeft cName="flex-1 md:hidden block mb-4">
            <img className="rounded-md" src={process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png'} alt="" />
          </AnimateLeft>
          <AnimateLeft cName="md:flex-1 text-right md:px-8">
            <h3 className="md:text-6xl text-3xl font-bold text-right">استمتع بخصم</h3>
            <p className="text-right md:text-xl text-sm md:my-5 my-3">
              استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية
            </p>
            <button className="bg-cl5 text-xl rounded px-5 py-2">ا طلب</button>
          </AnimateLeft>
          <AnimateRight cName="flex-1 md:block hidden">
              <img className="h-[400px] rounded-md" src={process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png'} alt="" />
          </AnimateRight>
        </div>
        <div className="redsvg md:h-[10rem] h-[5rem] rotate-180"></div>
      </div>
      <WhatWeCanDo />
      <div className="md:flex items-center md:px-[8%] px-5 md:my-[4rem] my-6">
        <AnimateRight cName="h-[300px] md:hidden block">
          <img src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
        </AnimateRight>
        <AnimateLeft cName="flex-1 md:mr-[-20%] md:py-9 z-30">
          <div className="md:bg-white rounded md:p-[3rem] p-[1rem] text-center">
            <h3 className="md:text-4xl text-2xl font-bold text-right text-lightpink">استمتع بخصم يصل إلى 50٪ على منتجاتنا الرائعة</h3>
            <p className="text-xl text-right my-4">
              استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"
            </p>
            <div className="mt-8">
              <Link className="bg-lightred text-white px-5 py-3 rounded" to='/store'>إبدأ التسوق</Link>
            </div>
          </div>
        </AnimateLeft>
        <AnimateRight cName="md:w-[60%] h-[480px] md:block hidden z-10">
          <img src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
        </AnimateRight>
      </div>
      <PricingSection />
      <TestimonialSection />
    </div>
  )
}
