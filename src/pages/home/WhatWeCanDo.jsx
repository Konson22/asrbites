export default function WhatWeCanDo() {
  return (
    <div className="px-[8%] md:py-[4rem]">
      <h2 className="title md:text-5xl text-3xl font-semibold text-lightpink text-center mb-8">
        خدماتنا
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {data.map((cake, index) => (
          <div className="md:mb-5" key={index}>
            <div
              className={`md:border-[10px] border-8 bg-white p-2 ${cake.border} rounded-full overflow-hidden md:h-[200px] h-[180px] md:w-[200px] w-[180px] mx-auto`}
            >
              <img className={`rounded-full `} src={cake.image} alt="" />
            </div>
            <div className="text-center">
              <h4 className={`text-3xl font-bold ${cake.color} my-4`}>
                {cake.title}
              </h4>
              <p>{cake.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "تشكيلة واسعة من الكعك",
    text: `نقدم مجموعة متنوعة من الكعك الطازجة، بدءًا من الكعك الكلاسيكي إلى الابتكارات الفريدة. يتم اختيار المكونات بعناية لضمان الجودة والطعم الرائع.
    `,
    image: process.env.PUBLIC_URL + "/images/green.jpeg",
    color: "text-cl2",
    border: "border-cl2",
  },
  {
    title: "تصميم خاص للمناسبات",
    text: ` يمكننا تقديم خدمة تصميم خاصة لمناسباتك، سواء كانت أعياد ميلاد، حفلات زفاف، أو أي مناسبة خاصة. نحرص على تلبية توقعاتك وجعل كل حدث فريدًا.`,
    image:
      process.env.PUBLIC_URL + "/images/cream-forest-white-background-red.jpg",
    color: "text-cl3",
    border: "border-cl2",
  },
  {
    title: "خدمة توصيل",
    text: ` لجعل تجربة التسوق أكثر راحة، نقدم خدمة التوصيل لطلباتك. سيتم توصيل الحلويات الطازجة مباشرة إلى باب منزلك.
    `,
    image:
      process.env.PUBLIC_URL + "/images/cream-forest-white-background-red.jpg",
    border: "border-cl5",
    color: "text-cl5",
  },
];
