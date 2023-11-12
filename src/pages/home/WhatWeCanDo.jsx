

export default function WhatWeCanDo() {
  return (
    <div className="px-[8%] md:py-[4rem]">
        <h2 className="title md:text-5xl text-3xl font-semibold text-lightpink text-center mb-8">What We Can Do</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {data.map(cake => (
            <div className="md:mb-5">
              <div className={`md:border-[10px] border-8 bg-white p-2 ${cake.border} rounded-full overflow-hidden md:h-[200px] h-[180px] md:w-[200px] w-[180px] mx-auto`}>
                <img className={`rounded-full `} src={cake.image} alt="" />
              </div>
              <div className="text-center">
                <h4 className={`text-3xl font-bold ${cake.color} my-4`}>{cake.title}</h4>
                <p>{cake.text}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}


const data = [
  {
    title:'Make Cake one',
    text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
    image:process.env.PUBLIC_URL+'/images/green.jpeg',
    color:'text-cl2',
    border:'border-cl2',
  },
  {
    title:'Make Cake one',
    text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
    image:process.env.PUBLIC_URL+'/images/cake-3.jpg',
    border:'border-cl1',
    color:'text-cl1',
  },
  {
    title:'Make Cake one',
    text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
    image:process.env.PUBLIC_URL+'/images/cream-forest-white-background-red.jpg',
    color:'text-cl2',
    border:'border-cl2',
  },
  {
    title:'Make Cake one',
    text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
    image:process.env.PUBLIC_URL+'/images/cream-forest-white-background-red.jpg',
    border:'border-dakrpink',
    color:'text-dakrpink',
  },
  // {
  //   title:'Make Cake one',
  //   text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
  //   image:process.env.PUBLIC_URL+'/images/cream-forest-white-background-red.jpg',
  //   color:'text-cl2',
  //   border:'border-cl2',
  // },
  // {
  //   title:'Make Cake one',
  //   text:'Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.',
  //   image:process.env.PUBLIC_URL+'/images/cream-forest-white-background-red.jpg',
  //   border:'border-dakrpink',
  //   color:'text-dakrpink',
  // },
]