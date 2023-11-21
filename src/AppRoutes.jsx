import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useGlobalApi } from "./manager/ContextProvider";
import Sidebar from "./admin/Sidebar";
import DashNav from "./admin/DashNav";
import AdminCotextProvider from "./manager/AdminCotextProvider";
import { FaWhatsapp } from "react-icons/fa";

export function AdminRoutes() {
  const { profile } = useGlobalApi();

  return !profile ? (
    <AdminCotextProvider>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <DashNav />
          <div className="flex-1 overflow-y-scroll md:p-5 p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </AdminCotextProvider>
  ) : (
    <Navigate to="/admin/login" />
  );
}

// export function LoginRoutes() {
//   const { profile } = useAdminContaxtApi();

//   return profile ? <Navigate to="/admin" /> : <Outlet />;
// }

export function UsersRoutes() {
  const { sendMessage } = useGlobalApi();
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="bg-green-400 p-3 fixed right-2 bottom-5 rounded-full text-white text-3xl z-50"
        onClick={sendMessage}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
}
