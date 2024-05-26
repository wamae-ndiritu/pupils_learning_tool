import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../images/e-soma.jpeg"
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/actions/userActions";
const Sidebar = () => {
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    // dispatch(logout());
  };
  return (
    <div className='bg-indigo-500 text-white w-48 py-4'>
      <div className='w-full border-b px-2 flex flex-col items-center'>
        <img
          src={logo}
          alt='e-soma logo'
          className='w-32 h-14 object-cover rounded'
        />
        <h5 className='my-3 text-xl font-semibold'>eSoma Dashboard</h5>
      </div>
      <div className='px-2 py-4'>
          <ul className='list-type-none px-4'>
            <li className='my-1'>
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 p-2 bg-gray-200 text-gray-900"
                    : "flex gap-3 p-2 hover:bg-gray-200 hover:text-gray-900"
                }
                end
              >
                <DashboardIcon />
                <h6>Dashboard</h6>
              </NavLink>
            </li>
            <li className='my-1'>
              <NavLink
                to='/dashboard/classes'
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 p-2 bg-gray-200 text-gray-900"
                    : "flex gap-3 p-2 hover:bg-gray-200 hover:text-gray-900"
                }
              >
                <InsightsIcon />
                <h6>Classes</h6>
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/dashboard/profile'
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 p-2 bg-gray-200 text-gray-900"
                    : "flex gap-3 p-2 hover:bg-gray-200 hover:text-gray-900"
                }
              >
                <AccountCircleIcon />
                <h6>Profile</h6>
              </NavLink>
            </li>
            <li className='my-1'>
              <button
                className='flex gap-3 p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-900'
                onClick={handleLogout}
              >
                <LogoutIcon />
                <h6>Logout</h6>
              </button>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Sidebar;
