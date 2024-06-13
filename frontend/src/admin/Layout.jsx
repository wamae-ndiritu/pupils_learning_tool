import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet, Navigate } from "react-router-dom";

export default function DashboardLayout() {
  const { userInfo } = useSelector((state) => state.user);
  if (userInfo?.token?.access) {
    return (
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          <main>
            <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return <Navigate to='/sign-in' />;
}
