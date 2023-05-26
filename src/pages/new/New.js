import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ title, inputs }) => {
  return (
    <div className="flex w-full font-Nunito">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        {/* Top */}
        <div className="m-5 flex p-3 shadow-2xl">
          <h1 className="text-xl font-semibold text-zinc-500">{title}</h1>
        </div>
        {/* Bottom */}
        <div className="m-5 flex min-w-[41rem] max-w-[41rem] gap-5 p-3 shadow-2xl">
          {/* Bottom left */}
          <div className="flex flex-1 justify-center">
            <img
              className="h-[100px] w-[100px] rounded-full object-cover"
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="img"
            />
          </div>
          {/* Bottom right (Form) */}
          <div className="flex-[2]">
            <form className="flex flex-wrap justify-around gap-3 pr-3">
              {/* user img upload */}
              <div className="w-[40%]">
                <label htmlFor="file" className="cursor-pointer">
                  Image: <DriveFolderUploadOutlinedIcon />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              {/* map over form source for user inputs */}
              {inputs.map((input) => (
                <div className="w-[40%]" key={input.id}>
                  <label className="flex items-center gap-5">
                    {input.label}
                  </label>
                  <input
                    className="border-b-[1px] border-solid border-zinc-500"
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button className="w-[150px] rounded-md bg-blue-500 p-2 text-lg font-semibold tracking-wide text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
