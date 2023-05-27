import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ title, inputs }) => {
  return (
    <div className="flex w-full font-Nunito">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        {/* Top Section */}
        <div className="m-5 max-w-[30rem]">
          <div className="mb-5 bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-center shadow-2xl">
            <h1 className="text-xl font-semibold tracking-wide text-zinc-100">
              {title}
            </h1>
          </div>
          {/* Bottom Section */}
          <div className="flex min-w-[30rem] flex-col gap-5 p-3 pt-7 shadow-2xl ">
            {/* Bottom left (display image) */}
            <div className="flex flex-1 justify-center">
              <img
                className="h-[100px] w-[100px] rounded-full object-cover"
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt="img"
              />
            </div>
            {/* Bottom right (form container) */}
            <div className="flex-[2] p-4">
              <form className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2">
                  {/* Map over form source for user/product inputs */}
                  {inputs.map((input) => (
                    <div className="mb-5" key={input.id}>
                      <label className="font-semibold text-zinc-600">
                        {input.label}
                      </label>
                      <input
                        className="border-b-[1px] border-solid border-zinc-500"
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))}
                  {/* user img upload */}
                  <div>
                    <label
                      htmlFor="file"
                      className="cursor-pointer font-semibold text-zinc-600"
                    >
                      Image :
                      <DriveFolderUploadOutlinedIcon
                        fontSize="large"
                        className="ml-2 text-zinc-600"
                      />
                    </label>
                    <input type="file" id="file" style={{ display: 'none' }} />
                  </div>
                </div>
                <button className="w-[150px] rounded-md bg-blue-500 py-2 text-lg font-semibold tracking-wide text-white transition-all duration-150 ease-in-out hover:scale-[104%]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
