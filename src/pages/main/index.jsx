import CategorySection from "./CategorySection";
import ContactSection from "./ContactSection";
import Header from "./Header";
import PromitionSection from "./PromitionSection";
import Testimonials from "./Testimonials";


export default function MainPage() {

  return (
   <div className="">
    <Header />
    <CategorySection />
    {/* <ProductSection /> */}
    <PromitionSection />
    <Testimonials />
    <ContactSection />
    {/* <SocialMediaSection /> */}
   </div>
  )
}




