import { Link } from "react-router-dom";
import diffDates from 'diff-dates'
import { useAdminContaxtApi } from "../contexts/AdminContext";


export default function Dashboard() {

   const { isLoading, orders, pendingOrders } = useAdminContaxtApi()

    const headingData = [
        {title:'جميع الطلبات', bg:'bg-cl2/50',  text:'grad grad1', count:orders.length, iconImage:'/images/complete.png', path:'/admin/orders'},
        {title:'المعلقة الطلبات ', bg:'bg-cl5/50', text:'grad grad2', count:pendingOrders.length, iconImage:'/images/test.png', path:'/admin'},
        {title:'Served Orders', bg:'bg-cl1/50', text:'grad grad3', count:0, iconImage:'/images/confirm.png', path:'/admin'},
        {title:'الزبائن', bg:'bg-cl3/50', text:'grad grad4', count:25, iconImage:'/images/target.png', path:'/admin'}
    ]

  return (
    <>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {headingData.map((c, index) => (
                <Link className={`md:flex justify-between items-center bg-white rounded md:p-5 shadow p-4`} key={index} to={c.path}>
                    <div className='md:h-[90px] md:w-[90px] h-[50px] w-[50px]'>
                        <img src={process.env.PUBLIC_URL+c.iconImage} alt="" />
                    </div>
                    <div className="md:flex-col flex items-end justify-between">
                        <div className={`${c.text} md:text-xl font-bold mb-2 text-center`}>{c.title}</div>
                        <span className={`${c.text} md:text-6xl text-4xl font-bold`}>{c.count}</span>
                    </div>
                </Link>
            ))}
        </div>
        <div className="md:flex mt-5">
            <div className="flex-1 bg-white shadow rounded border px-5 py-3 md:mr-5">
                <h3 className="text-2xl font-bold mb-7 text-right">
                    قائمة الطلبات
                </h3>
                {!isLoading ? <div className="">
                    <table className="w-full text-right">
                        <thead>
                            <tr>
                                <th className="text-left">الاجراء</th>
                                <th>الوقت المتبقي</th>
                                <th>رمز الحجز</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingOrders.length > 0 && pendingOrders.filter(i => i.served === 0).map(item => <OrderCard item={item} />)}
                        </tbody>
                    </table>
                </div>: 'Loading...'}
            </div>
            <div className="flex-1 bg-white rounded border p-4 md:mt-0 mt-6">
                <h3 className="flex text-2xl font-bold mb-3">
                    Map
                </h3>
                <img className="md:h-[300px] w-auto" src={process.env.PUBLIC_URL+'/images/map.png'} alt="" />
            </div>
        </div>
    </>
  )
}


function OrderCard({ item }){

    const present = Date.now()
    const romanianRevolution = new Date(item.collectionTime)
    const time = diffDates(romanianRevolution, present, "minutes")

    let dif;
    let bg = '';
    let text;
    if(time < 0){
        dif = diffDates(present, romanianRevolution, "minutes")
        bg = 'text-red-400'

        if(dif < 60){
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(present, romanianRevolution, "minutes")}
                <span className="ml-3">min ago</span>
            </div>
        }else{
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(present, romanianRevolution, "hours")}
                <span className="ml-3">hours ago</span>
            </div>
        }
    }else{
        dif = diffDates(romanianRevolution, present, "minutes")
        if(dif < 60){
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(romanianRevolution, present, "minutes")}
                <span className="ml-3">in minutes</span>
            </div>
        }else{
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(romanianRevolution, present, "hours")}
                <span className="ml-3">in hours</span>
            </div>
        }
    }
     
    return(
        <tr className={`border-y ${bg}`} id={item.id}>
            <td className="text-left">
                <Link className="bg-cl4 text-white rounded px-3 py-2 mr-2" to={`/admin/checkout/${item.code}`}>حفظ</Link>
            </td>
            <td className="">
                {text}
            </td>
            <td className="py-1">{item.code}</td>
        </tr>
    )
}