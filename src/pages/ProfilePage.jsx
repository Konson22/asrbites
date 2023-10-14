import GoBackButton from "../components/GoBackButton";
import Navbar, { BottomNavbar } from "../components/Navbar";


export default function ProfilePage() {
  return (
    <div>
      <Navbar icon={<GoBackButton />} text='My Profile' />
      <BottomNavbar />
    </div>
  )
}
