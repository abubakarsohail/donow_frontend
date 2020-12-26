import { Box } from "@material-ui/core";

const Hero = ({ src, children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <img src={`/static/images/${src}`} alt={src} width="100%" height="100%" />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Hero;
