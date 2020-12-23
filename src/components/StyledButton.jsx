import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background:
      "transparent linear-gradient(90deg, #DF4242 0%, #EF3838 51%, #FF6868 100%) 0% 0% no-repeat padding-box",
    borderRadius: 24,
    color: "white",
    padding: 8,
    fontWeight: "bold",
  },
})(Button);

export default StyledButton;
