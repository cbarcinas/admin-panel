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
            <div className="cursor-pointer rounded-md border-[1px] border-zinc-400 px-2 py-1 text-zinc-500 hover:bg-zinc-300">
              View
            </div>
            <div className="cursor-pointer rounded-md border-[1px] border-red-400 px-2 py-1 text-red-500 hover:bg-red-300">
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="min-w-max">
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
