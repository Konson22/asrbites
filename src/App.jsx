import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home";
import CandyDetails from "./pages/CandyDetails";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import UploadProduct from "./pages/forms/UploadProduct";
import StorePage from "./pages/StorePage";
import ScrollToTop from "./hooks/ScrollToTop";
import LoginPage from "./pages/forms/Login";
import Signup from "./pages/forms/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <div className="text-gray-500">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/upload' element={<UploadProduct />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/details/:itemID' element={<CandyDetails />} />
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
