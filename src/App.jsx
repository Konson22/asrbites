import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home";
import ScrollToTop from "./hooks/ScrollToTop";
import Navbar from "./components/Navbar";
import StorePage from "./pages/store";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import MainPage from "./pages/main";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <div className="text-gray-500">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/store' element={<StorePage />} />
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
