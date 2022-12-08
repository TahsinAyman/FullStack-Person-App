import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SinglePersonView({ person }) {
  const navigate = useNavigate();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {person.getId()}
      </TableCell>
      <TableCell>{person.getName()}</TableCell>
      <TableCell>{person.getAge()}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          onClick={() => navigate(`/update/${person.getId()}`)}
        >
          Update
        </Button>
      </TableCell>
      <TableCell onClick={() => navigate(`/delete/${person.getId()}`)}>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
