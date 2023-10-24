import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header-container md:py-[18vh] py-[7vh] flex items-center justify-end px-[8%]">
        <div className="md:w-[60%]">
        <h1 className="md:text-6xl text-3xl text-white font-bold text-right">تذوق لذة الحلا مع تشكيلتنا الرائعة من الكيك والشوكولاتة</h1>
        <div className="flex justify-end">
            <Link className="bg-rose-700 flex font-bold items-center text-white rounded px-5 py-3 mt-12" to='/store'>
            <FaArrowLeft className="mr-2" />
            <span className="text-base">الدخول</span>
            </Link> 
        </div>
        </div>
    </header>
  )
}
