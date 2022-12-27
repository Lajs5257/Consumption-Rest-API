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
import { Spinner } from "react-bootstrap";
import useData from "../hooks/useData";

function createData(
  supply_chain_id,
  id,
  plante,
  shipment,
  transline_name,
  transline_id,
  legacy_code,
  timezone,
  latitude,
  longitude,
  speed,
  distance_to_route,
  distance_to_end_route,
  odometer,
  code,
  altitude,
  ignition,
  batery,
  course
) {
  return {
    supply_chain_id,
    id,
    plante,
    shipment,
    details: [
      transline_name,
      transline_id,
      legacy_code,
      timezone,
      latitude,
      longitude,
      speed,
      distance_to_route,
      distance_to_end_route,
      odometer,
      code,
      altitude,
      ignition,
      batery,
      course,
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
          {row.supply_chain_id}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.plante}</TableCell>
        <TableCell align="right">{row.shipment}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalles
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Transline name</TableCell>
                    <TableCell>Transline id</TableCell>
                    <TableCell>Legacy code</TableCell>
                    <TableCell>Timezone</TableCell>
                    <TableCell>Latitude</TableCell>
                    <TableCell>Longitude</TableCell>
                    <TableCell>Speed</TableCell>
                    <TableCell>Distance to route</TableCell>
                    <TableCell>Distance to end route</TableCell>
                    <TableCell>Odometer</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Altitude</TableCell>
                    <TableCell>Ignition</TableCell>
                    <TableCell>Batery</TableCell>
                    <TableCell>Course</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.supply_chain_id}>
                      <TableCell component="th" scope="row">
                        {row.transline_name}
                      </TableCell>
                      <TableCell>{row.transline_id}</TableCell>
                      <TableCell>{row.legacy_code}</TableCell>
                      <TableCell>{row.timezone}</TableCell>
                      <TableCell>{row.latitude}</TableCell>
                      <TableCell>{row.longitude}</TableCell>
                      <TableCell>{row.speed}</TableCell>
                      <TableCell>{row.distance_to_route}</TableCell>
                      <TableCell>{row.distance_to_end_route}</TableCell>
                      <TableCell>{row.odometer}</TableCell>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.altitude}</TableCell>
                      <TableCell>{row.ignition}</TableCell>
                      <TableCell>{row.batery}</TableCell>
                      <TableCell>{row.course}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
/*
Row.propTypes = {
  row: PropTypes.shape({
    supply_chain_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    plante: PropTypes.string.isRequired,
    shipment: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        transline_name: PropTypes.string.isRequired,
        transline_id: PropTypes.number.isRequired,
        legacy_code: PropTypes.number.isRequired,
        timezone: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        distance_to_route: PropTypes.string,
        distance_to_end_route: PropTypes.string,
        odometer: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        altitude: PropTypes.string.isRequired,
        ignition: PropTypes.string,
        batery: PropTypes.string,
        course: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
*/
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
  const { data } = useData();
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      { typeof  data.length=== 'undefined' ? (
        <div> </div>
      ) : (
        <>
          <h1>Datos de trackeo resultantes</h1>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Supply chain id</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Plante</TableCell>
                  <TableCell>Shipment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return <Row key={row.id} row={row} />;
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}

export default Tabla;
