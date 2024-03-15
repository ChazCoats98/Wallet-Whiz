import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Company Name',
    },
    {
      id: 'symbol',
      numeric: false,
      disablePadding: false,
      label: 'ticker Symbol',
    },
    {
      id: 'change',
      numeric: true,
      disablePadding: false,
      label: 'Change',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Current Price',
    },
    {
      id: 'changesPercentage',
      numeric: true,
      disablePadding: false,
      label: 'Change Percentage',
    },
  ];


function EnhancedTableHead() {
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
            >
              <TableSortLabel
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  
  function EnhancedTableToolbar() {
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Todays biggest Losers
          </Typography>
      </Toolbar>
    );
  }
  
  export default function MarketLosersTable(data) {
    console.log(data);
    const rows = data.data.fetchMarketLosers
  
    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                rowCount={rows.length}
              />
              <TableBody>
                {rows.slice(0, 5).map((row) => {
                  return (
                    <TableRow
                      key={row._id}
                    >
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        className='table-text'
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right" className='table-text'>{row.symbol}</TableCell>
                      <TableCell align="right"><span className='expense-text'>-${Math.round((row.change*-1)*100)/100}</span></TableCell>
                      <TableCell align="right" className='table-text'>${Math.round(row.price*100)/100}</TableCell>
                      <TableCell align="right" className='table-text'><span className='expense-text'>{Math.round(row.changesPercentage*100)/100}%</span></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    );
  }