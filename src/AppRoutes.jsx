import { Outlet, Navigate } from 'react-router-dom';
import { useGlobalApi } from './contexts/ContextProvider';
import DashNav from './adminpages/DashNav';
import Sidebar from './adminpages/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export function AdminRoutes() {
    const { isAdmin } = useGlobalApi()

    return isAdmin ? 
    <div className="h-screen">
        <DashNav />
        <div className="flex">
            <Sidebar />
            <div className="dashboard-wraper flex-1 overflow-y-scroll p-5">
                <Outlet />
            </div>
        </div>
    </div> : <Navigate to='/admin/login' />
}


export function LoginRoutes() {
    const { isAdmin } = useGlobalApi()

    return isAdmin ? <Navigate to='/admin/dashboard' /> : <Outlet />
}


export function UsersRoutes() {

    return(
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
