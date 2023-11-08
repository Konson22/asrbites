import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { useParams } from "react-router-dom";


export function CheckoutPage(){

    const [orders, setOrder] = useState([])
    const { code } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axiosInstance.post(`/products/reservation/code`, {code}).then(res => res)
                setOrder(results.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [code])


    const handleCheckout = async () => {
        if(!code) return
        try {
            const results = await axiosInstance.post(`/products/reservation/checkout`, {code}).then(res => res)
            if(results.status === 200){
                window.location = '../dashboard'
            }
        } catch (error) {
            console.log(error)
        }
    }
    const totalPrice = orders.length > 0 && orders.map(o => parseInt(o.price) * parseInt(o.qty)).reduce((i, t) => i + t)

    return(
        <div className="md:flex mx-[10%] mt-7">
            <div className="flex-1 bg-white md:mr-3">
                <div className="border-b-2 flex items-center justify-between px-4 py-2">
                    <div className="text-2xl">
                        {code} code
                    </div>
                </div>
                <table className="w-full">
                    <thead className="">
                        <tr className="text-right border-b">
                            <th className="px-2 py-3">السعر الكلي</th>
                            <th className="px-2 py-3">السعر</th>
                            <th className="px-2 py-3">الكمية</th>
                            <th className="px-2 py-3">الإسم</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 && orders.map(order => (
                            <tr className="border-t">
                                <td className="py-2 text-right">{order.price * order.qty}</td>
                                <td className="py-2 text-right">{order.price}</td>
                                <td className="py-2 text-right">{order.qty}</td>
                                <td className="py-2 flex items-center justify-end">
                                    <span>{order.product_name}</span>
                                    <img 
                                        className="h-11 w-11 ml-2 rounded" 
                                        src={`${process.env.REACT_APP_API}/${order.product_image}`} alt="" 
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-white h-[max-content]">
                <div className="border-b-2 text-2xl px-5 py-2">
                    Check out details
                </div>
                <div className="p-5">
                    <div className="flex justify-end pb-6">
                        <span className="font-bold text-xl">{orders.length}</span>
                        <span className="w-[150px] text-right font-bold">عدد المنتجات</span>
                    </div>
                    <div className="flex justify-end pb-6">
                        <div className="flex">
                            <span>ر.س</span>
                            <span className="font-bold text-xl">{totalPrice}</span>
                        </div>
                        <span className="w-[150px] text-right font-bold">السعر الكلي</span>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-red-500 text-white px-5 py-2 rounded mr-2">Cancel Reservation</button>
                        <button className="bg-green-500 text-white px-5 py-2 rounded" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

