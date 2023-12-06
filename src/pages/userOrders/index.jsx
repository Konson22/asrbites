import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../../manager/ContextProvider";
import axiosInstance from "../../hooks/useAxios";
import { formateTime } from "../../components/formateTime";
import { LoadingButton } from "../../components/Buttons";

export default function UserOrders() {
  const { userOrders, setUserOrders } = useGlobalApi();

  const deleteOrder = async (code) => {
    let res = false;
    try {
      const response = await axiosInstance
        .post("/orders/delete", { code })
        .then((res) => res);
      const newOrders = userOrders.filter(
        (order) => order.code !== response.data
      );
      setUserOrders(newOrders);
      console.log(newOrders);
    } catch (error) {
      console.log(error);
    } finally {
      res = true;
    }
    return res;
  };
  return (
    <div className="md:px-[8%] px-3 mt-4">
      <div className="">
        {userOrders.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {userOrders.map((order) => (
              <OrderCard
                setUserOrders={setUserOrders}
                order={order}
                deleteOrder={deleteOrder}
                key={order.code}
              />
            ))}
          </div>
        ) : (
          <div className="">you don't have orders</div>
        )}
      </div>
    </div>
  );
}

function OrderCard({ order, deleteOrder }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await deleteOrder(order.code);
    setIsLoading(false);
  };
  return (
    <div className="bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <span
          className={`px-4 py-1 text-white rounded ${
            order.served ? "bg-green-400" : "bg-rose-500"
          }`}
        >
          {order.served ? "Served" : "Pending"}
        </span>
        <div className="flex">
          <span>{order.code}</span>
          <span>Order Code</span>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <span>{order.items}</span>
        <span className="border border-dotted flex-1 mx-3"></span>
        <span>Items</span>
      </div>
      <div className="flex items-center mb-3">
        <span>{order.totalPrice}</span>
        <span className="border border-dotted flex-1 mx-3"></span>
        <span>Total Price</span>
      </div>
      <div className="flex items-center mb-3">
        <span>{formateTime(order.collectionTime).text}</span>
        <span className="border border-dotted flex-1 mx-3"></span>
        <span>Time</span>
      </div>
      <div className="flex items-center mb-3">
        <span>{order.collectionMethod}</span>
        <span className="border border-dotted flex-1 mx-3"></span>
        <span>Method</span>
      </div>
      <div className="flex items-center justify-end mt-3">
        <Link
          className="
          py-1 px-3 flex justify-center items-center  bg-green-500 hover:bg-green-500/80 focus:ring-blue-500 
          focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm 
          font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mr-2 rounded
        "
          to={`/view-order/${order.code}`}
        >
          View
        </Link>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <button
            className="
          py-1 px-3 flex justify-center items-center  bg-cl4 hover:bg-cl4/80 focus:ring-blue-500 
          focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm 
          font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded
        "
            onClick={handleDelete}
          >
            remove
          </button>
        )}
      </div>
    </div>
  );
}
