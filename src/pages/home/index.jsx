import { Link } from "react-router-dom";
import { AnimateLeft, AnimateRight } from "../../components/AnimateCards";
import CategoriesSection from "./CategoriesSection";
import Header from "./Header";
import PricingPage from "./PricingPage";
import TestimonialSection from "./TestimonialSection";


export default function HomePage() {
  return (
    <div>
      <Header />
      <CategoriesSection />
      <div className="md:flex items-center md:px-[8%] px-3 my-[4rem]">
        <AnimateRight cName="md:hidden block">
          <img src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
        </AnimateRight>
        <AnimateLeft cName="flex-1 md:mr-[-20%] md:py-9 z-30">
          <div className="bg-white shadow-md rounded md:p-[3rem] p-[1rem] text-center">
            <h3 className="md:text-4xl text-2xl font-bold text-right text-primary">استمتع بخصم يصل إلى 50٪ على منتجاتنا الرائعة</h3>
            <p className="text-xl text-right my-4">
              استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"
            </p>
            <Link className="bg-primary text-white px-5 py-2 rounded" to='/store'>إبدأ التسوق</Link>
          </div>
        </AnimateLeft>
        <AnimateRight cName="md:w-[60%] h-[480px] md:block hidden z-10">
          <img src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
        </AnimateRight>
      </div>
      <div className="">
        <div className="media md:h-[10rem] h-[5rem]"></div>
        <div className="md:flex md:flex-1 items-center bg-darkcl text-white md:px-[10%] px-[5%] py-[1rem]">
          <AnimateLeft cName="flex-1 md:hidden block mb-4">
            <img className="rounded-md" src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
          </AnimateLeft>
          <AnimateLeft cName="md:flex-1 text-right md:px-8">
            <h3 className="md:text-6xl text-3xl font-bold text-right">استمتع بخصم</h3>
            <p className="text-right md:text-xl text-sm md:my-5 my-3">
              استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية
            </p>
            <button className="bg-primary text-xl border rounded px-5 py-2">Order now</button>
          </AnimateLeft>
          <AnimateRight cName="flex-1 md:block hidden">
            <img className="rounded-md" src={process.env.PUBLIC_URL+'/images/offer.jpg'} alt="" />
          </AnimateRight>
        </div>
        <div className="media md:h-[10rem] h-[5rem] rotate-180"></div>
      </div>
      <PricingPage />
      <TestimonialSection />
    </div>
  )
}
