import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Single = () => {
  return (
    <div className="flex w-full font-Nunito">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-[6] pr-2">
        <Navbar />
        single
      </div>
    </div>
  );
};

export default Single;
