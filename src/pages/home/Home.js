import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-[5]">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
