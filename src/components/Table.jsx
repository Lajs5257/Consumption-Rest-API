import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/*supply_chain_id: number;
  id: number;
  plante: string;
  shipment: string;
  transline_name: string;
  transline_id: number;
  legacy_code: number;
  timezone: string;
  latitude: number;
  longitude: number;
  speed: number;
  distance_to_route?: any;
  distance_to_end_route?: any;
  odometer: string;
  code: string;
  altitude: string;
  ignition?: any;
  batery?: any;
  course: string;*/
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
// creamos un arreglo de 120 datos
const rows = [
  createData("1", 159, 6.0, 24, 4.0, 3.99),
  createData("2", 237, 9.0, 37, 4.3, 4.99),
  createData("3", 262, 16.0, 24, 6.0, 3.79),
  createData("4", 305, 3.7, 67, 4.3, 2.5),
  createData("5", 356, 16.0, 49, 3.9, 0.99),
  createData("6", 356, 16.0, 49, 3.9, 0.99),
  createData("7", 356, 16.0, 49, 3.9, 0.99),
  createData("8", 356, 16.0, 49, 3.9, 0.99),
  createData("9", 356, 16.0, 49, 3.9, 0.99),
  createData("10", 356, 16.0, 49, 3.9, 0.99),
  createData("11", 356, 16.0, 49, 3.9, 0.99),
  createData("12", 356, 16.0, 49, 3.9, 0.99),
  createData("13", 356, 16.0, 49, 3.9, 0.99),
  createData("14", 356, 16.0, 49, 3.9, 0.99),
  createData("15", 356, 16.0, 49, 3.9, 0.99),
  createData("16", 356, 16.0, 49, 3.9, 0.99),
  createData("17", 356, 16.0, 49, 3.9, 0.99),
  createData("18", 356, 16.0, 49, 3.9, 0.99),
  createData("19", 356, 16.0, 49, 3.9, 0.99),
  createData("20", 356, 16.0, 49, 3.9, 0.99),
  createData("21", 356, 16.0, 49, 3.9, 0.99),
  createData("22", 356, 16.0, 49, 3.9, 0.99),
  createData("23", 356, 16.0, 49, 3.9, 0.99),
  createData("24", 356, 16.0, 49, 3.9, 0.99),
  createData("25", 356, 16.0, 49, 3.9, 0.99),
  createData("26", 356, 16.0, 49, 3.9, 0.99),
  createData("27", 356, 16.0, 49, 3.9, 0.99),
  createData("28", 356, 16.0, 49, 3.9, 0.99),
  createData("29", 356, 16.0, 49, 3.9, 0.99),
  createData("30", 356, 16.0, 49, 3.9, 0.99),
  createData("31", 356, 16.0, 49, 3.9, 0.99),
];

function Tabla() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const data =null;
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {data &&
      <div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return <Row key={row.name} row={row} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      }
    </Paper>
  );
}

export default Tabla;
