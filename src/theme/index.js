import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FF6868" },
    secondary: { main: "#4EA5F1" },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

theme.overrides = {
  MuiButton: {
    label: {
      color: "white !important",
    },
  },
};

export default theme;
