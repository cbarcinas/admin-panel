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
    <div className="flex-1 border-r-2 min-h-screen bg-white">
      {/* Top Sidebar */}
      <div className="h-[50px] flex items-center justify-center">
        <span className="font-bold text-[20px] text-blue-500">DashAdmin</span>
      </div>
      <hr className="h-0" />
      {/* Center Sidebar */}
      <div className="pl-3">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>User</span>
          </li>
          <li>
            <Inventory2OutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon />
            <span>Delivery</span>
          </li>
          <li>
            <InsertChartOutlinedIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>
          <li>
            <HealthAndSafetyOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <TopicOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* Bottom Sidebar */}
      <div>Color Options</div>
    </div>
  );
};

export default Sidebar;
