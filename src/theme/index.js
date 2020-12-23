import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FF6868" },
    secondary: { main: "#4EA5F1" },
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
