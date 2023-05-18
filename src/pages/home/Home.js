import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widgets from '../../components/Widgets';
import FeaturedChart from '../../components/FeaturedChart';
import Chart from '../../components/Chart';

const Home = () => {
  return (
    <div className="flex font-Nunito">
      <Sidebar />
      <div className=" flex-[6]">
        <Navbar />
        {/* Widgets */}
        <div className="flex gap-1 p-4">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        {/* Charts */}
        <div className="flex gap-5 px-6 py-4">
          <FeaturedChart />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
