import {
  DashboardIcon,
  PersonOutlineOutlinedIcon,
  Inventory2OutlinedIcon,
  CreditCardIcon,
  LocalShippingOutlinedIcon,
  InsertChartOutlinedIcon,
  NotificationsActiveOutlinedIcon,
  HealthAndSafetyOutlinedIcon,
  TopicOutlinedIcon,
  SettingsOutlinedIcon,
  AccountCircleOutlinedIcon,
  LogoutOutlinedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen min-w-[11.8rem] max-w-[11.8rem] flex-1 border-r-2 bg-white">
      {/* Top Sidebar */}
      <div className="flex h-[50px] items-center justify-center border-b-[1.5px]">
        <span className="text-2xl font-bold text-blue-500">dashadmin</span>
      </div>
      {/* Center Sidebar */}
      <div className="pl-4">
        <ul>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            MAIN
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <DashboardIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Dashboard</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            LISTS
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <PersonOutlineOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">User</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <Inventory2OutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Products</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <CreditCardIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Orders</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <LocalShippingOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Delivery</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            USEFUL
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <InsertChartOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Stats</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <NotificationsActiveOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Notifications</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            SERVICE
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <HealthAndSafetyOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">System Health</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <TopicOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Logs</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <SettingsOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Settings</span>
          </li>
          <p className="mb-2 mt-4 rounded-l-sm bg-zinc-300 p-1 pl-3 text-xs font-bold text-zinc-500">
            USER
          </p>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <AccountCircleOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Profile</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-l-md p-2 hover:bg-blue-100">
            <LogoutOutlinedIcon className="text-blue-500" />
            <span className="mx-3 text-zinc-800">Logout</span>
          </li>
        </ul>
      </div>
      {/* Bottom Sidebar */}
      <div className="m-3 ml-5 flex items-center">
        <div className="m-1 h-8 w-8 cursor-pointer rounded-md border-2 border-solid border-slate-500 bg-zinc-300"></div>
        <div className="m-1 h-8 w-8 cursor-pointer rounded-md border-2 border-solid border-slate-700 bg-zinc-800"></div>
      </div>
    </div>
  );
};

export default Sidebar;
