import { FaHome, FaPhoneAlt } from "react-icons/fa"
import { FiHome, FiTag } from "react-icons/fi"

export const navigationLinks = [
  {text:'اتصل بنا', path:'/', icon:<FaPhoneAlt />},
  {text:'من نحن', path:'/', icon:<FiHome />},
  {text:'عروض خاصة', path:'/', icon:<FiTag />},
  {text:'متجر', path:'/store', icon:<FiHome />},
  {text:'الرئيسية', path:'/', icon:<FaHome />},
]

export const categories = [
  {
    name:'معجنات', 
    text:'طعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"', 
    image:process.env.PUBLIC_URL+'/images/categories/majanat.jpg'},
  {
    name:'حلا', 
    text:'طعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"', 
    image:process.env.PUBLIC_URL+'/images/categories/sweet.jpg'},
  {
    name:'كيك', 
    text:'طعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"', 
    image:process.env.PUBLIC_URL+'/images/categories/keke.jpg'},
  {
    name:'أسر منتجة', 
    text:'طعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"', 
    image:process.env.PUBLIC_URL+'/images/categories/home-products.jpg'},
  {
    name:'جميع', 
    text:'طعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"', 
    image:process.env.PUBLIC_URL+'/images/categories/keke.jpg'},
]

export const timeSchedule = [
  { val: 10, text: "١٠  - ٢٠ دقيقة" },
  { val: 30, text: "٢٠ - ٤٠ دقيقة" },
  { val: 60, text: "٤٠ -  ٦٠ دقيقة" },
  { val: 120, text: "٤٠ -  ٦٠ دقيقة" },
];
