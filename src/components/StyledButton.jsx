import { withStyles } from "@material-ui/core/styles";
import { LoadingButton } from "@material-ui/lab";

const StyledButton = withStyles({
  root: {
    background:
      "transparent linear-gradient(90deg, #DF4242 0%, #EF3838 51%, #FF6868 100%) 0% 0% no-repeat padding-box",
    borderRadius: 24,
    color: "white",
    padding: 8,
    fontWeight: "bold",
  },
})(LoadingButton);

export default StyledButton;
