import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const Navbar = () => {
  return (
    <div className="text-md flex h-[50px] items-center text-zinc-600">
      <div className="flex w-full items-center justify-between p-5">
        {/* Search Input */}
        <div className="flex items-center rounded-sm border-[1px] border-zinc-400 ">
          <input
            type="text"
            placeholder="Search.."
            className="w-full rounded-md border-none bg-transparent p-1 pl-2 text-sm outline-none placeholder:text-xs"
          />
          <SearchOutlinedIcon className="cursor-pointer" />
        </div>
        {/* Secondary Nav Options */}
        <div className="flex items-center">
          <div className="item">
            <LanguageOutlinedIcon className="cursor-pointer" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
