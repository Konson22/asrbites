import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Navbar from "./components/Navbar";
import StorePage from "./pages/store";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import Footer from "./components/Footer";
import Login from "./pages/forms/Login";
import Upload from "./pages/forms/Upload";
import Dashboard from "./pages/dashboard";
import { CheckoutPage } from "./pages/dashboard/Checkout";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <div className="text-gray-500">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/checkout/:code' element={<CheckoutPage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/shopping-cart' element={<ShoppingCardPage />} />
        </Routes>
        <Footer />
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
