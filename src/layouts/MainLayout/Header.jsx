import {
  AppBar,
  Button,
  Grid,
  Link,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Icon from "../../components/Icon";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "transparent",
  },
  creator: {
    color: "#FF9C6B",
  },
  button: {
    borderRadius: 24,
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static" className={classes.appbar} elevation={2}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <RouterLink to="/">
                <Icon src="logo.png" />
              </RouterLink>
            </Grid>
            <Grid
              container
              item
              xs={11}
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/creator"
                  className={classes.creator}
                >
                  Become a creator
                </Link>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  component={RouterLink}
                  to="/login"
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Link color="textPrimary" component={RouterLink} to="/signup">
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
