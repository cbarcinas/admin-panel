import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    // sidebar
    <div className="min-h-screen min-w-[11.5rem] max-w-[11.5rem] flex-1 border-r-2 bg-white font-Nunito">
      {/* Top Sidebar */}
      <div className="flex h-[50px] items-center justify-center border-b-[1.5px]">
        <span className="font-Nunito text-2xl font-bold text-blue-500">
          dashadmin
        </span>
      </div>
      {/* Center Sidebar */}
      <div className="pl-4">
        <ul>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            MAIN
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <DashboardIcon className="text-blue-600" />
            <span className="mx-3">Dashboard</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            LISTS
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <PersonOutlineOutlinedIcon className="text-blue-600" />
            <span className="mx-3">User</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <Inventory2OutlinedIcon className="text-blue-600" />
            <span className="mx-3">Products</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <CreditCardIcon className="text-blue-600" />
            <span className="mx-3">Orders</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <LocalShippingOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Delivery</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            USEFUL
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <InsertChartOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Stats</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <NotificationsActiveOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Notifications</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            SERVICE
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <HealthAndSafetyOutlinedIcon className="text-blue-600" />
            <span className="mx-3">System Health</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <TopicOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Logs</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <SettingsOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Settings</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            USER
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <AccountCircleOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Profile</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-200">
            <LogoutOutlinedIcon className="text-blue-600" />
            <span className="mx-3">Logout</span>
          </li>
        </ul>
      </div>
      {/* Bottom Sidebar */}
      <div className="m-3 flex items-center">
        <div className="m-1 h-8 w-8 cursor-pointer rounded-md border-2 border-solid border-slate-500 bg-zinc-300"></div>
        <div className="m-1 h-8 w-8 cursor-pointer rounded-md border-2 border-solid border-slate-700 bg-zinc-800"></div>
      </div>
    </div>
  );
};

export default Sidebar;
