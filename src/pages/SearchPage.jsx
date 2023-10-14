import GoBackButton from "../components/GoBackButton";
import Navbar, { BottomNavbar } from "../components/Navbar";


export default function SearchPage() {
  return (
    <div>
      <Navbar icon={<GoBackButton />} text='Search' />
      <BottomNavbar />
    </div>
  )
}
