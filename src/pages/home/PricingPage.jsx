

export default function PricingPage() {
  return (
    <div className="">
      <div className="px-[8%] py-[2rem]">
        <h3 className="md:text-4xl text-center  text-white px-8 py-2">OUR PRICING</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {prices.map(price => (
            <div className='bg-lightgray w-[250px] rounded-t-full overflow-hidden'>
              <div 
                className={`bg-white
                  h-[210px] w-[210px] mx-auto border-[11px] border${price.color}
                   rounded-full overflow-hidden mt-[20px] p-2
                `}
              >
                <img className={`rounded-full ${price.bg}`} src={price.image} alt="" />
              </div>
              <div className={`text-4xl font-bold text-center text-${price.color} py-4`}>
                {price.price}
              </div>
              <div className={`${price.bg} p-5 text-white`}>
                <h4 className="text-xl text-center">{price.text}</h4>
              </div>
              <button className={`bg${price.color} py-2 w-full`}>Test</button>
            </div>
          ))}
        </div>
      </div>
      <div className="promo-container text-white md:px-[15%] px-4 md:pb-[6rem] md:pt-[14rem] md:py-0 py-6">
        <h2 className="md:text-6xl text-3xl font-bold text-center text-white">استعرض تشكيلتنا واحجز منتجك .</h2>
        <p className="text-2xl text-center my-3">
          يمكنك طلب منتجك عبر تطبيق WhatsApp وسنقوم بالتوصيل مباشرة إلى باب منزلك!مميزات خدمتنا:جودة عالية وطعم لا يقاوم.تشكيلة واسعة تناسب جميع الأذواق.إمكانية
        </p>
        <button className="bg-secondary block text-2xl mx-auto mt-5 px-5 py-2">يمكنك طلب</button>
      </div>
    </div>
  )
}


const prices = [
  {
    item:'Candy', 
    image:process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png', 
    border:'border-cl2', 
    bg:'bg-cl2/70',
    color:'-cl2',
    text:'Just Cupcakes + Free Order', 
    price:'ر.س 13'
  },
  {
    item:'Candy', 
    image:process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png', 
    border:'border-cl1', 
    bg:'bg-cl1/50',
    color:'-cl1',
    text:'Just Cupcakes + Free Order', 
    price:'ر.س 13'
  },
  {
    item:'Candy', 
    image:process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png', 
    border:'border-dakrpink', 
    bg:'bg-dakrpink/60',
    color:'-dakrpink/80',
    text:'Just Cupcakes + Free Order', 
    price:'ر.س 13'
  },
  {
    item:'Candy', 
    image:process.env.PUBLIC_URL+'/images/—Pngtree—ordinary colorful candy feast_5516292.png', 
    border:'border-cl3', 
    bg:'bg-cl3/70',
    color:'-cl3',
    text:'Just Cupcakes + Free Order', 
    price:'ر.س 13'
  },
]