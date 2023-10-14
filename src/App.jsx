import { Route, Routes } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import HomePage from "./pages/HomePage";
import CandyDetails from "./pages/CandyDetails";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";


function App() {
  
  return (
    <div className="bg-lightgray">
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/product/details/:itemID' element={<CandyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
