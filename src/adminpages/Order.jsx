import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import diffDates from 'diff-dates'


export default function Orders() {

  const [ isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchData(){
      setIsLoading(true)
      try{
        const results = await axiosInstance('/products/reservation').then(res => res)
        if(isMuted){
          setOrders(results.data)
        }
      }catch(error){
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchData()

    return () => {
      controller.abort()
      isMuted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl">Orders</h2>
        <div className="bg-white flex w-[400px]">
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
                <td className="px-3 py-4">السعر الكلي</td>
                <td className="px-3 py-4">السعر</td>
                <td className="px-3 py-4">عدد المنتجات</td>
                <td className="px-3 py-4">المنتج</td>
                <td className="px-3 py-4">رمز الحجز</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                // const time = new Date() - new Date();
                const present = Date.now()
                const romanianRevolution = new Date(order.collectionTime)
                // console.log(diffDates(romanianRevolution, present, "minutes"));
                return(
                  <tr className={index % 2 ? 'bg-lightgray':''} key={order.id}>
                    <td className="text-left px-3 py-2">
                      <button className="bg-red-500 text-white px-3 py-1 mr-2">ازاله</button>
                    </td>
                    <td className="flex justify-end px-3 py-2">
                      <p>دقيقة</p>
                      <span>{diffDates(romanianRevolution, present, "minutes")}</span>
                      {/* <span>بعد</span> */}
                    </td>
                    <td className="justify-end px-3 py-2">
                      <span>ر.س</span>
                      <span className="font-bold">{order.price * order.qty}</span>
                    </td>
                    <td className="px-3 py-2 font-bold">{order.price}</td>
                    <td className="px-3 py-2">{order.qty}</td>
                    <td className="px-3 py-2">{order.product_name}</td>
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
