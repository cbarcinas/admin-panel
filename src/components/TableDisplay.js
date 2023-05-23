import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableDisplay = () => {
  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: '1 March',
      amount: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2342353,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'John Smith',
      date: '1 March',
      amount: 35,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '1 March',
      amount: 920,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Harold Carol',
      date: '1 March',
      amount: 2000,
      method: 'Online',
      status: 'Pending',
    },
    {
      id: 23834655,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      customer: 'Carol App',
      date: '5 March',
      amount: 1000,
      method: 'Online',
      status: 'Pending',
    },
  ];

  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-zinc-500">
        Latest Transactions
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell class="text-left font-Nunito">Tracking ID</TableCell>
              <TableCell class="text-left font-Nunito">Product</TableCell>
              <TableCell class="text-left font-Nunito">Customer</TableCell>
              <TableCell class="text-left font-Nunito">Date</TableCell>
              <TableCell class="text-left font-Nunito">Amount</TableCell>
              <TableCell class="text-left font-Nunito">Method</TableCell>
              <TableCell class="text-left font-Nunito">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} class="border-b-2 border-b-zinc-300">
                <TableCell class="py-4 pl-3 font-Nunito">{row.id}</TableCell>
                <TableCell class="font-Nunito">
                  <div className="flex items-center">
                    <img
                      src={row.img}
                      alt={row.product}
                      className="mr-3 h-[32px] w-[32px] rounded-full object-cover"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell class="font-Nunito">{row.customer}</TableCell>
                <TableCell class="font-Nunito">{row.date}</TableCell>
                <TableCell class="font-Nunito">$ {row.amount}</TableCell>
                <TableCell class="font-Nunito">{row.method}</TableCell>
                <TableCell
                  class={`font-semibold ${
                    row.status === 'Approved'
                      ? 'text-green-600'
                      : 'text-yellow-500'
                  }`}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDisplay;
