import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Single = () => {
  return (
    <div className="flex w-full font-Nunito">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-[6] pr-2">
        <Navbar />
        {/* Top Section */}
        <div className="flex gap-5 p-5">
          {/* top left */}
          <div className="relative min-w-[24rem] flex-1 p-3 shadow-2xl">
            <div className="absolute right-0 top-0 cursor-pointer rounded-bl-md bg-blue-100 px-2 py-1 text-blue-500">
              Edit
            </div>
            <h1 className="mb-4 text-lg font-semibold text-zinc-500">
              User Information
            </h1>
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg"
                alt="user avatar"
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <div className="pl-5">
                <h3 className="mb-2 text-zinc-700">John Smith</h3>
                <div className="mb-2 flex flex-col text-sm text-zinc-700">
                  <span className="font-semibold">Email: </span>
                  <span className="text-xs underline">jsmith@gmail.com</span>
                </div>
                <div className="mb-2 flex flex-col text-sm text-zinc-700">
                  <span className="font-semibold">Phone: </span>
                  <span className="text-xs underline">+1 (702) 834-1235</span>
                </div>
                <div className="mb-2 flex flex-col flex-wrap text-sm text-zinc-700">
                  <span className="font-semibold">Address: </span>
                  <span className="text-xs underline">
                    12345 Alphabet Dr, Las Vegas, 89102
                  </span>
                </div>
                <div className="mb-2 flex flex-col text-sm text-zinc-700">
                  <span className="font-semibold">Country: </span>
                  <span className="text-xs underline">United States</span>
                </div>
              </div>
            </div>
          </div>
          {/* top right */}
          <div className="flex-[2]"></div>
        </div>
        {/* Bottom Section */}
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
