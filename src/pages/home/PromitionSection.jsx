

export default function PromitionSection() {
  return (
    <div className="md:flex items-center md:px-[8%] my-[4rem]">
        <div className="md:w-[65%]">
            <img src={process.env.PUBLIC_URL+'/images/pistachio.jpeg'} alt="" />
        </div>
        <div className="flex-1 md:ml-[-20%] md:py-9">
            <div className="bg-white md:p-[4rem] p-[1rem] text-center">
                <h2 className="text-5xl font-bold text-rose-700">أكثر من 10 آلاف عميل سعيد! استمتع بخصم يصل إلى 50٪ على منتجاتنا الرائعة</h2>
                <h2 className="text-4xl ont-bold text-darkpink my-4">GET UPTO 50%</h2>
                <p className="text-right">
                    استعرض تشكيلتنا واحجز منتجك المفضل بالمدة التي تختارها. يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية تخصيص الكيك حسب رغبتك.توصيل سريع وموثوق.انضم إلينا اليوم وكن جزءًا من تجربة الكيك الاستثنائية!"
                </p>
                <button className="bg-rose-700 px-5 py-2 rounded-xl text-xl mt-4 text-white">
                    Reserve now
                </button>
            </div>
        </div>
    </div>
  )
}
