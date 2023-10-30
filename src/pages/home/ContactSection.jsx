import { FaBusinessTime, FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="md:bg-transparent bg-lightteal">
    <div className="md:bg-white md:flex md:px-[8%] mt-[4rem] md:pt-[4rem] pt-5">
        <div className="flex-1 md:bg-transparent bg-lightpink md:px-16 p-8 md:m-0 m-4">
            <h3 className="text-4xl">تواصل معنا</h3>
            <form>
                <div className="mb-5">
                    <input className="h-[3rem] w-full bg-gray-100 border-none outline-none" type="text" placeholder="Name" />
                </div>
                <div className="mb-5">
                    <input className="h-[3rem] w-full bg-gray-100 border-none outline-none" type="text" placeholder="Name" />
                </div>
                <div className="mb-5">
                    <textarea className="h-[7rem] w-full bg-gray-100 border-none outline-none" type="text" placeholder="Your message..."></textarea>
                </div>
                <button className="bg-lightpink px-5 py-2">Send</button>
            </form>
        </div>
        <div className="socila-mediaa bg-lightteal text-white flex flex-col items-end md:w-[35%] md:mb-[-4rem] p-8">
            <div className="">
                <span>ساعات العمل</span>
                <ul>
                    <li className="flex items-center justify-end mb-4">
                        <span>ساعات العمل</span>
                        <span className="border rounded-full ml-3 p-2">
                            <FaMapMarkerAlt className="text-xl" />
                        </span>
                    </li>
                    <li className="flex items-center justify-end mb-4">
                        <span>0544024948</span>
                        <span className="border rounded-full ml-3 p-2">
                            <FaWhatsapp className="text-xl" />
                        </span>
                    </li>
                    <li className="flex items-center justify-end mb-4">
                        <span>0544024948</span>
                        <span className="border rounded-full ml-3 p-2">
                            <FaPhone className="text-xl" />
                        </span>
                    </li>
                    <li className="flex items-center justify-end mb-4">
                        <p>2:00  ظهر</p> - <p>11:00 مساءاً</p>
                        <span className="border rounded-full ml-3 p-2">
                            <FaBusinessTime className="text-xl" />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl text-center">تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="flex justify-evenly text-3xl">
                    <span className="rounded-full p-2">
                        <FaFacebook />
                    </span>
                    <span className="rounded-full p-2">
                        <FaInstagram />
                    </span>
                    <span className="rounded-full p-2">
                        <FaTwitter />
                    </span>
                    <span className="rounded-full p-2">
                        <FaYoutube />
                    </span>
                    <span className="rounded-full p-2">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className="md:bg-lightpink py-10">
        dd
    </div>
    </div>
    // <div className="md:flex md:mx-[8%] my-[4rem] bg-lightteal text-white">
    //     <div className="flex-1 px-12 py-8">
    //         <h3 className="text-4xl">تواصل معنا</h3>
    //         <form>
    //             <div className="mb-5">
    //                 <input className="h-[3rem] w-full bg-white border-none outline-none" type="text" placeholder="Name" />
    //             </div>
    //             <div className="mb-5">
    //                 <input className="h-[3rem] w-full bg-white border-none outline-none" type="text" placeholder="Name" />
    //             </div>
    //             <div className="mb-5">
    //                 <textarea className="h-[7rem] w-full bg-white border-none outline-none" type="text" placeholder="Your message..."></textarea>
    //             </div>
    //             <button className="bg-lightpink px-5 py-2">Send</button>
    //         </form>
    //     </div>
    //     <div className="socila-media flex flex-col items-end md:w-[35%] p-8">
    //         <div className="">
    //             <span>ساعات العمل</span>
    //             <ul>
    //                 <li className="flex items-center justify-end mb-4">
    //                     <span>ساعات العمل</span>
    //                     <span className="border rounded-full ml-3 p-2">
    //                         <FaMapMarkerAlt className="text-xl" />
    //                     </span>
    //                 </li>
    //                 <li className="flex items-center justify-end mb-4">
    //                     <span>0544024948</span>
    //                     <span className="border rounded-full ml-3 p-2">
    //                         <FaWhatsapp className="text-xl" />
    //                     </span>
    //                 </li>
    //                 <li className="flex items-center justify-end mb-4">
    //                     <span>0544024948</span>
    //                     <span className="border rounded-full ml-3 p-2">
    //                         <FaPhone className="text-xl" />
    //                     </span>
    //                 </li>
    //                 <li className="flex items-center justify-end mb-4">
    //                     <p>2:00  ظهر</p> - <p>11:00 مساءاً</p>
    //                     <span className="border rounded-full ml-3 p-2">
    //                         <FaBusinessTime className="text-xl" />
    //                     </span>
    //                 </li>
    //             </ul>
    //         </div>
    //         <div className="mt-5">
    //             <h3 className="text-2xl text-center">تابعنا على وسائل التواصل الاجتماعي</h3>
    //             <div className="flex justify-evenly text-3xl">
    //                 <span className="rounded-full p-2">
    //                     <FaFacebook />
    //                 </span>
    //                 <span className="rounded-full p-2">
    //                     <FaInstagram />
    //                 </span>
    //                 <span className="rounded-full p-2">
    //                     <FaTwitter />
    //                 </span>
    //                 <span className="rounded-full p-2">
    //                     <FaYoutube />
    //                 </span>
    //                 <span className="rounded-full p-2">
    //                     <FaLinkedinIn />
    //                 </span>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}
