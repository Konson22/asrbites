import { Outlet, Navigate } from 'react-router-dom';
import { useGlobalApi } from './contexts/ContextProvider';
import DashNav from './adminpages/DashNav';
import Sidebar from './adminpages/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export function AdminRoutes() {
    const { isAdmin } = useGlobalApi()

    return isAdmin ? 
        <div className="h-screen flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <DashNav />
                <div className="flex-1 overflow-y-scroll md:p-5 p-3">
                    <Outlet />
                </div>
            </div>
        </div> : <Navigate to='/admin/login' />
}


export function LoginRoutes() {
    const { isAdmin } = useGlobalApi()

    return isAdmin ? <Navigate to='/admin' /> : <Outlet />
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
