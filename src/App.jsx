import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import StorePage from "./pages/store";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import Login from "./pages/forms/Login";
import Dashboard from "./adminpages/Dashboard";
import Products from "./adminpages/Products";
import Upload from "./adminpages/Upload";
import Orders from "./adminpages/Order";
import { AdminRoutes, LoginRoutes, UsersRoutes } from "./AppRoutes";
import { CheckoutPage } from "./adminpages/Checkout";
import Notfound from "./pages/_404";
import EditProduct from "./adminpages/EditProduct";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="text-gray-500">
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<UsersRoutes />}>
            <Route path='' element={<HomePage />} />
            <Route path='store' element={<StorePage />} />
            <Route path='shopping-cart' element={<ShoppingCardPage />} />
            <Route path='admin/login' element={<LoginRoutes />}>
              <Route path="" element={<Login />} />
            </Route>
          </Route>
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='edit/:id' element={<EditProduct />} />
            <Route path='checkout/:code' element={<CheckoutPage />} />
            <Route path='products' element={<Products />} />
            <Route path='upload' element={<Upload />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </Suspense>
  );
}


function Loader(){
  return(
    <div className="bg-white text-xl flex items-center justify-center h-screen">
      Loading...
    </div>
  )
}
export default App;
