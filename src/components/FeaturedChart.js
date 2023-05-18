import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FeaturedChart = () => {
  return (
    <div className=" flex-[2] rounded-xl px-6 py-4 shadow-2xl">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Total Revenue</h1>
        <MoreVertIcon fontSize="small" className="cursor-pointer" />
      </div>
      {/* Bottom */}
      <div className="flex flex-col items-center justify-center gap-2 p-5 text-center">
        <div className="h-28 w-28">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="text-lg font-medium text-zinc-600">
          Total Sales made today:
        </p>
        <p className="text-3xl font-semibold text-zinc-500">$420</p>
        <p className="text-sm text-zinc-600">
          Lorem ipsum dolor sit, amet consectetur
        </p>
      </div>
    </div>
  );
};

export default FeaturedChart;
