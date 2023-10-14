import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function WelcomePage() {
  return (
    <div className="h-screen welcome-page flex flex-col justify-end px-10 py-[6rem]">
        <h1 className="text-4xl font-bold">Enjoy the testies Cakes near you.</h1>
        <Link className="w-[max-content] bg-red-900 flex items-center text-white rounded px-5 py-3 mt-12" to='/home'>
            <span className="text-xl">Get Started</span>
            <FaArrowRight className="ml-2" />
        </Link>
    </div>
  )
}
