import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Datatable from '../../components/Datatable';

const List = () => {
  return (
    <div className="flex w-full font-Nunito">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-[6] pr-2">
        <Navbar />
        <div className="flex p-5">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default List;
