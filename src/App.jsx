import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import ReservationPage from "./pages/ReservationPage";
import StorePage from "./pages/StorePage";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { useGlobalApi } from "./manager/ContextProvider";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  const { sendMessage } = useGlobalApi();
  return (
    <Suspense fallback={<Loader />}>
      <div className="text-gray-500">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/my-reservation" element={<ReservationPage />} />
          <Route path="/shopping-cart" element={<ShoppingCardPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <div
          className="bg-green-400 p-3 fixed right-2 bottom-5 rounded-full text-white text-3xl z-50"
          onClick={sendMessage}
        >
          <FaWhatsapp />
        </div>
      </div>
    </Suspense>
  );
}

function Loader() {
  return (
    <div className="bg-white text-xl flex items-center justify-center h-screen">
      Loading...
    </div>
  );
}
export default App;
