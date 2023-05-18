import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FeaturedChart = () => {
  return (
    <div className="flex-[2] rounded-xl p-6 shadow-2xl">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-zinc-500">Total Revenue</h1>
        <MoreVertIcon fontSize="small" className="cursor-pointer" />
      </div>
      {/* Bottom */}
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <div className="h-28 w-28">
          <CircularProgressbar value={70} text="70%" strokeWidth={6} />
        </div>
        <p className="text-lg font-medium text-zinc-600">
          Total Sales made today:
        </p>
        <p className="text-3xl font-semibold text-zinc-700">$420</p>
        <p className="text-sm text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, non
          reiciendis!
        </p>
        {/* Bottom Total Amounts */}
        <div className="mt-5 flex w-full items-center justify-between text-center">
          <div>
            <div className="text-sm text-zinc-600 ">Yesterday</div>
            <div className="mt-2 flex items-center text-sm font-semibold text-green-600">
              <KeyboardArrowUpIcon
                fontSize="small"
                className="cursor-pointer"
              />
              <div>$12.4k</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-zinc-600 ">Last Week</div>
            <div className="mt-2 flex items-center text-sm font-semibold text-red-600">
              <KeyboardArrowDownIcon
                fontSize="small"
                className="cursor-pointer"
              />
              <div>-$12.4k</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-zinc-600 ">Last Month</div>
            <div className="mt-2 flex items-center text-sm font-semibold text-green-600">
              <KeyboardArrowUpIcon
                fontSize="small"
                className="cursor-pointer"
              />
              <div>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;
