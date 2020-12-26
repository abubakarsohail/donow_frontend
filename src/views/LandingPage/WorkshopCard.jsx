import { Box, IconButton, Link, Typography } from "@material-ui/core";
import { Favorite, Star } from "@material-ui/icons";

const WorkshopCard = ({ src, rating, number, category, title, price }) => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: 250,
          width: "100%",
          borderRadius: 14,
          backgroundImage: `url(${src})`,
          backgroundSize: "100% 100%",
        }}
      >
        <Box sx={{ position: "absolute", top: 0, right: 2 }}>
          <IconButton>
            <Favorite />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Star />
        {rating}
        <span>({number})</span>
        <Link color="primary">{category}</Link>
      </Box>
      <Typography>{title}</Typography>
      <Typography>From ${price}</Typography>
    </Box>
  );
};

export default WorkshopCard;
