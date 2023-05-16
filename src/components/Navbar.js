import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const Navbar = () => {
  return (
    <div className="text-md flex h-[50px] items-center border-b-[1.5px] text-zinc-600">
      <div className="flex w-full items-center justify-between p-4">
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
          <div className="mr-4 flex items-center">
            <LanguageOutlinedIcon className="cursor-pointer" />
            English
          </div>
          <div className="mr-4 flex items-center ">
            <DarkModeOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="mr-4 flex items-center ">
            <FullscreenExitOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="relative mr-4 flex items-center ">
            <NotificationsNoneOutlinedIcon className="cursor-pointer" />
            <div className="text-md absolute right-[-5px] top-[-3px] flex h-[16px] min-h-[16px] w-[16px] min-w-[16px] items-center justify-center rounded-full bg-red-500 font-semibold text-zinc-100">
              1
            </div>
          </div>
          <div className="relative mr-4 flex items-center ">
            <ChatBubbleOutlineOutlinedIcon className="cursor-pointer" />
            <div className="text-md absolute right-[-5px] top-[-3px] flex h-[16px] min-h-[16px] w-[16px] min-w-[16px] items-center justify-center rounded-full bg-red-500 font-semibold text-zinc-100">
              2
            </div>
          </div>
          <div className="mr-4 flex items-center ">
            <FormatListBulletedOutlinedIcon className="cursor-pointer" />
          </div>
          <div className="mr-4 flex items-center ">
            <img
              src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg"
              alt="avatar"
              className="h-[30px] min-h-[30px] w-[30px] min-w-[30px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
