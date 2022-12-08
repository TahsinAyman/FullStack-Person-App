import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SinglePersonView from "./SinglePersonView";
import { Grid, Pagination } from "@mui/material";

export default function PersonListView({ persons, setPage, totalPages }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((person) => (
              <SinglePersonView person={person} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="center">
        <Pagination
          count={totalPages}
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </Grid>
    </>
  );
}
