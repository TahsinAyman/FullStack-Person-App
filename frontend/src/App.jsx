import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Routing from "./routing/Routing";
import Header from "./views/header/Header";

export default function App() {
  return (
    <ThemeProvider
      theme={createTheme({ palette: { mode: "dark" } })}
    >
      <CssBaseline />
      <Header />
      <Routing />
    </ThemeProvider>
  );
}
