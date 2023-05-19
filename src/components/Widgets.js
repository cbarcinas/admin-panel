import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widgets = ({ type }) => {
  // {type} is received from Home component

  let data;

  // temp
  const amount = 800;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'View all users',
        icon: (
          <PersonOutlinedIcon
            fontSize="large"
            className="cursor-pointer self-end rounded-md bg-purple-200 p-[5px] text-purple-700 hover:scale-[109%]"
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            fontSize="large"
            className="cursor-pointer self-end rounded-md bg-orange-200 p-[5px] text-orange-700 hover:scale-[109%]"
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            fontSize="large"
            className="cursor-pointer self-end rounded-md bg-green-200 p-[5px] text-green-700 hover:scale-[109%]"
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'View balance',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            fontSize="large"
            className="cursor-pointer self-end rounded-md bg-blue-200 p-[5px] text-blue-700 hover:scale-[109%]"
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="mr-5 flex min-w-[11rem] flex-1 justify-between rounded-xl p-3 font-Nunito shadow-2xl">
      {/* Left Side */}
      <div className="flex flex-col justify-between">
        <span className="text-sm font-bold text-zinc-500">{data.title}</span>
        <span className="py-5 text-2xl font-light">
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className="w-max cursor-pointer border-b-[1px] text-xs hover:text-zinc-500">
          {data.link}
        </span>
      </div>
      {/* Right Side */}
      <div className="flex flex-col justify-between">
        <div className="text-md flex items-center text-green-600">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
