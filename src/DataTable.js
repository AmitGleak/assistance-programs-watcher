import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TreatmentsList from './TreatmentsList.js'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataTable = (props) => {
  const classes = useStyles();
  const programs = props.programs;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Assistance Program Name</TableCell>
            <TableCell align="left">Eligible Treatments</TableCell>
            <TableCell align="left">Open/Closed Status</TableCell>
            <TableCell align="left">Grant Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.name}>
              <TableCell align="left">{program.name}</TableCell>
              <TableCell align="left">
                  <TreatmentsList treatments={program.treatmentsCovered} />
              </TableCell>
              <TableCell align="left">{program.status}</TableCell>
              <TableCell align="left">{program.maxAwardLevel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;