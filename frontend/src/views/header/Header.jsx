import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Full Stack
          </Typography>
          <Button onClick={() => navigate("/add")}>+</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
