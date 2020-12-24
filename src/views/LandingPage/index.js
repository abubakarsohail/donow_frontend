import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Search, Tune, ImportExport } from "@material-ui/icons";
import clsx from "clsx";
import Hero from "../../components/Hero";
import WorkshopCard from "./WorkshopCard";

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: "white",
    textShadow: "0px 3px 34px #00000080",
  },
  heading: {
    fontWeight: "bold",
  },
  filter: {
    borderRadius: 14,
    background: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: 0,
      },
    },
    "&:hover": {
      background: "white",
    },
  },
}));

const CategoryBox = ({ src, title }) => {
  return (
    <Box
      position="relative"
      height={50}
      width="100%"
      borderRadius={6}
      style={{
        background: "#000000 0% 0% no-repeat padding-box",
      }}
    >
      <img
        src={src}
        alt={src}
        width="100%"
        height="100%"
        style={{
          opacity: 0.6,
          borderRadius: 6,
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        {title}
      </Box>
    </Box>
  );
};

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Hero src="landingpage.png">
        <Box width="100%" height="100%">
          <Container maxWidth="md" style={{ height: "100%" }}>
            <Grid
              container
              spacing={2}
              alignContent="flex-end"
              style={{ height: "100%" }}
            >
              {/* Heading */}
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    color="textSecondary"
                    className={clsx(classes.textColor, classes.heading)}
                  >
                    Learning by doing
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.textColor}
                    gutterBottom
                  >
                    Start your experiential learning journey today!
                  </Typography>
                </Grid>
              </Grid>

              {/* Search Box */}
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    placeholder="Search"
                    variant="outlined"
                    className={classes.filter}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="inherit"
                    className={classes.filter}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Tune />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="inherit"
                    className={classes.filter}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <ImportExport />
                  </IconButton>
                </Grid>
              </Grid>

              {/* Categories */}
              <Grid container item xs={12} spacing={2}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={2}>
                    <CategoryBox
                      src="/static/images/landingpage.png"
                      title="Baking"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Hero>

      {/* Workshops */}

      <Container maxWidth="md">
        <Box marginY={5}>
          <Typography variant="h3">Designing</Typography>
          <Box marginTop={2}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={3}>
                  <WorkshopCard
                    src="/static/images/landingpage.png"
                    rating={4.96}
                    number={141}
                    category="Graphic Design"
                    title="Banner Design Workshop"
                    price={16}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Workshops */}
      <Container maxWidth="md">
        <Box marginY={5} flexWrap="noWrap">
          <Typography variant="h3">Designing</Typography>
          <Box marginTop={2}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={3}>
                  <WorkshopCard
                    src="/static/images/landingpage.png"
                    rating={4.96}
                    number={141}
                    category="Graphic Design"
                    title="Banner Design Workshop"
                    price={16}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
