import { formateTime } from "../components/formateTime";
import { useGlobalApi } from "../manager/ContextProvider";

export default function ReservationPage() {
  const { bookingCodes, removeReservation } = useGlobalApi();

  return (
    <div className="md:px-[10%] px-4 py-6">
      {bookingCodes.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {bookingCodes.map((reservation) => {
            const time = formateTime(reservation.collectionTime);
            return (
              <div className="bg-white shadow border" key={reservation.code}>
                <div className="flex items-center justify-end border-b px-5 py-2">
                  رمز الحجز {reservation.code}
                </div>
                <div className="px-5 py-2">
                  <div className="flex items-center justify-between mb-4">
                    <span>{time.text}</span>
                    <span>الوقت المتبقي</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span>{reservation.items}</span>
                    <span>عدد المنتجات</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span>{reservation.price}</span>
                    <span>السعر</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span>{Math.round(reservation.price * 0.05)}</span>
                    <span>التخفيض%5</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span>
                      {reservation.price - Math.round(reservation.price * 0.1)}
                    </span>
                    <span>السعر الكلي</span>
                  </div>
                  <div className="flex items-center justify-end my-3">
                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">
                      edit
                    </button>
                    <button
                      className="bg-rose-500 text-white px-4 py-1 rounded"
                      onClick={() => removeReservation(reservation.code)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">No Reservations</div>
      )}
    </div>
  );
}
