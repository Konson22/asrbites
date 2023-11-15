import diffDates from 'diff-dates'
import { useAdminContaxtApi } from "../contexts/AdminContext";
import { Button } from '../components/Buttons';


export default function Orders() {

  const { isLoading, orders } = useAdminContaxtApi()


  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl">Orders</h2>
        <div className="bg-white flex md:w-[400px]">
          <input type="search" className="h-[3rem] w-full bg-white px-3 border" placeholder="Search by code" />
        </div>
      </div>
      {isLoading && 'Loading.................'}
      <div className="bg-white p-5">
        {(!isLoading && orders.length > 0) &&
          <table className="w-full text-right">
            <thead className="bg-lightgray">
              <tr>
                <td className="px-3 py-4 text-left">Actions</td>
                <td className="px-3 py-4">الوقت المتبقي</td>
                <td className="px-3 py-4">رمز الحجز</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const present = Date.now()
                const romanianRevolution = new Date(order.collectionTime)
                return(
                  <tr className={index % 2 ? 'bg-lightgray':''} key={order.id}>
                    <td className="text-left px-3 py-2">
                      {/* <LoadingButton /> */}
                      <Button text='ازاله' />
                    </td>
                    <td className="flex justify-end px-3 py-2">
                      <p>دقيقة</p>
                      <span>{diffDates(romanianRevolution, present, "minutes")}</span>
                      {/* <span>بعد</span> */}
                    </td>
                    {/* <td className="md:block hidden px-3 py-2 font-bold">{order.price}</td> */}
                    <td className="px-3 py-2">{order.code}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}
