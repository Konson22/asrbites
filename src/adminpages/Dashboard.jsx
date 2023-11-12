import { FaAffiliatetheme, FaBusinessTime, FaUsers } from "react-icons/fa"
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { Link } from "react-router-dom";


export default function Dashboard() {

  const [ isLoading, setIsLoading] = useState(false)
  const [servedOrders, setServedOrders] = useState([])
  const [pendingOrders, setPendingOrders] = useState([])

    useEffect(() => {
        const controller = new AbortController();
        let isMuted = true
        async function fetchData(){
            setIsLoading(true)
            try{
                const results = await axiosInstance('/products/reservation').then(res => res)
                if(results.data.length > 0){
                    const servedOrders = getUniqueData(results.data, 1)
                    const pendingOrders = getUniqueData(results.data, 0)

                    if(isMuted){
                        setServedOrders(servedOrders)
                        setPendingOrders(pendingOrders)
                    }
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


    const getUniqueData = (data, status) => {
        const filteredData = data.filter(o => o.served === status)
        const rawData = filteredData.map(item => item.code);
        return [...new Set(rawData)]
    }
   
    const headingData = [
        {title:'All Orders', bg:'bg-cl2/50',  bg2:'text-cl2', count:pendingOrders.length+servedOrders.length, icon:<FaAffiliatetheme />},
        {title:'Pending Orders', bg:'bg-cl5/50', bg2:'text-cl5', count:pendingOrders.length, icon:<FaBusinessTime />},
        {title:'Served Orders', bg:'bg-cl1/50', bg2:'text-cl1', count:servedOrders.length, icon:<FaAffiliatetheme />},
        {title:'Clients', bg:'bg-cl3/50', bg2:'text-cl3', count:25, icon:<FaUsers />},
    ]

  return (
    <>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {headingData.map(c => (
                <div className={`bg-white rounded`}>
                    <div className={`${c.bg} md:text-xl font-bold md:p-3 p-2`}>
                        <span className="">{c.title}</span>
                    </div>
                    <div className="flex items-center justify-between p-5">
                        <span className={`${c.bg2} text-6xl`}>
                            {c.icon}
                        </span>
                        <span className="text-5xl font-bold">{c.count}</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:flex mt-5">
            <div className="flex-1 bg-white md:mr-5">
                <div className="bg-cl5/50 flex text-2xl font-bold p-2">
                    Orders List
                </div>
                {!isLoading ? <div className="p-5">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th>Reserve Code</th>
                                <th>Time Left</th>
                                <th className="text-right">End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingOrders.length > 0 && pendingOrders.map(item => (
                                <tr className="">
                                    <td className="border-y py-1">{item}</td>
                                    <td className="border-y py-1">30 minutes</td>
                                    <td className="border-y text-right py-2">
                                        <Link className="bg-cl3 text-white rounded py-1 px-3 mr-2" to={`/admin/checkout/${item}`}>Serve</Link>
                                        <button className="bg-lightred text-white rounded py-1 px-3">cancel</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>: 'Loading...'}
            </div>
            <div className="flex-1 bg-white md:mt-0 mt-6">
                <div className="bg-cl5/50 flex text-2xl font-bold p-2">
                    products
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:p-6 p-3">
                    
                </div>
            </div>
        </div>
    </>
  )
}


