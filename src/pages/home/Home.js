import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widgets from '../../components/Widgets';
import FeaturedChart from '../../components/FeaturedChart';
import Chart from '../../components/Chart';
import TableDisplay from '../../components/TableDisplay';

const Home = () => {
  return (
    <div className="flex font-Nunito">
      <Sidebar />
      <div className="flex-[6] pr-2">
        {/* Navbar */}
        <Navbar />
        {/* Widget Section */}
        <div className="flex gap-5 p-5">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        {/* Charts Section */}
        <div className="flex gap-5 px-6 py-4">
          <FeaturedChart />
          <Chart />
        </div>
        {/* List Section */}
        <div className="m-5 rounded-xl p-3 shadow-2xl">
          <TableDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
