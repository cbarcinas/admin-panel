import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatableSource';

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3">
            <div className="cursor-pointer rounded-md bg-zinc-200 px-3 py-2 text-zinc-500">
              View
            </div>
            <div className="cursor-pointer rounded-md bg-red-200 px-3 py-2 text-red-500">
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-max p-4">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
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
