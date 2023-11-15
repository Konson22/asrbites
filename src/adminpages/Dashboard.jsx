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
                <Link className={`bg-white rounded md:p-5 shadow p-4`} key={index} to={c.path}>
                    <div className={`${c.text} md:text-xl font-bold mb-2 text-center`}>{c.title}</div>
                    <div className="flex items-center justify-between">
                        <span className='h-[75px]'>
                            <img src={process.env.PUBLIC_URL+c.iconImage} alt="" />
                        </span>
                        <span className={`${c.text} md:text-6xl text-4xl font-bold`}>{c.count}</span>
                    </div>
                </Link>
            ))}
        </div>
        <div className="md:flex mt-5">
            <div className="flex-1 bg-white shadow p-5 md:mr-5">
                <h3 className="text-2xl font-bold mb-5 text-right">
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
                            {pendingOrders.length > 0 && pendingOrders.map(item => {
                                const present = Date.now()
                                const romanianRevolution = new Date(item.collectionTime)
                                return(
                                    <tr className="border-y" id={item.id}>
                                        <td className="text-left">
                                            <Link className="bg-cl5 text-white rounded px-3 py-2 mr-2" to={`/admin/checkout/${item.code}`}>حفظ</Link>
                                        </td>
                                        {diffDates(romanianRevolution, present, "minutes") < 0 ?
                                            <td className="flex items-center justify-end py-2">
                                                <span className="text-sm">دقيقة</span>
                                                {diffDates(present, romanianRevolution, "minutes")}
                                            </td>:
                                            <td className="flex items-center justify-end py-2">
                                                <span className="text-sm">{diffDates(romanianRevolution, present, "minutes") <= 59 ? 'دقيقة':'Hours'}</span>
                                                {diffDates(romanianRevolution, present, "minutes") <= 59 ? 
                                                    diffDates(romanianRevolution, present, "minutes") : 
                                                    diffDates(romanianRevolution, present, "hours")
                                                }
                                            </td>
                                        }
                                        {/* <td className="py-1">{diffDates(romanianRevolution, present, "minutes")}</td> */}
                                        <td className="py-1">{item.code}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>: 'Loading...'}
            </div>
            <div className="flex-1 bg-white p-4 md:mt-0 mt-6">
                <h3 className="flex text-2xl font-bold mb-3">
                    Map
                </h3>
                <img className="md:h-[300px]" src={process.env.PUBLIC_URL+'/images/map.png'} alt="" />
            </div>
        </div>
    </>
  )
}


