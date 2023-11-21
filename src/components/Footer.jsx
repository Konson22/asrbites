import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-cl1 text-white px-[8%] py-4">
        <div className="md:flex items-center justify-between py-5">
          <div className="flex items-center justify-center md:mb-0 mb-6">
            <img
              className="md:h-14 md:w-14 h-9 w-9"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt=""
            />
            <p className="logo-text text-2xl font-bold">لي ثري</p>
          </div>
          <div className="flex justify-evenly">
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center md:text-3xl text-2xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaTwitter />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaInstagram />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
            <span
              className="
              md:h-[50px] md:w-[50px] h-[45px] w-[45px] flex items-center justify-center text-3xl hover:rounded-md hover:bg-white/90 bg-white/50 
              rounded-full md:ml-4
            "
            >
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className="border-y-2 border-white py-2 my-6"></div>
        <div className="md:flex justify-between mt-4">
          <div className="">
            <h3 className="text-3xl">Contacts & Address</h3>
          </div>
          <div className="">
            <h3 className="text-3xl">address</h3>
          </div>
          <div className="">
            <h3 className="text-3xl">Contacts & Address</h3>
            <ul>
              <li className="flex items-center my-2">
                <span className="border p-2 rounded-full mr-2">
                  <FaMapMarkerAlt />
                </span>
                somewhare, near something
              </li>
              <li className="flex items-center my-2">
                <span className="border p-2 rounded-full mr-2">
                  <FaPhoneAlt />
                </span>
                +966544024948
              </li>
              <li className="flex items-center my-2">
                <span className="border p-2 rounded-full mr-2">
                  <FaWhatsapp />
                </span>
                +966544024948
              </li>
              <li className="flex items-center my-2">
                <span className="border p-2 rounded-full mr-2">
                  <FiMail />
                </span>
                info@leeethree.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
