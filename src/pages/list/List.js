import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Datatable from '../../components/Datatable';

const List = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
