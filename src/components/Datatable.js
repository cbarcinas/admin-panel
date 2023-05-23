import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatableSource';

const Datatable = () => {
  return (
    <div className="h-[26rem] p-5">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
