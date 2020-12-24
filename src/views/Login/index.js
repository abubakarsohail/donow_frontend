import {
  Box,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  AccountCircleOutlined,
  LockOutlined,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import StyledButton from "../../components/StyledButton";
import { login } from "../../services/authService";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values.username, values.password);
        window.location = "/";
      } catch (ex) {
        snackbar("Error: " + ex.response?.data?.detail, { variant: "error" });
      }
    },
  });

  const { enqueueSnackbar: snackbar } = useSnackbar();

  return (
    <Box marginTop={10}>
      <Container maxWidth="xs">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Login
            </Typography>
          </Grid>

          {/* Username Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlined color="primary" />
                  </InputAdornment>
                ),
              }}
              placeholder="Username"
              {...formik.getFieldProps("username")}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined color="primary" />
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              {...formik.getFieldProps("password")}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          {/* Login Button */}
          <Grid container item justify="center">
            <Grid item xs={6}>
              {formik.isSubmitting ? (
                <Box display="flex" justifyContent="center">
                  <CircularProgress />
                </Box>
              ) : (
                <StyledButton
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={formik.handleSubmit}
                >
                  Login
                </StyledButton>
              )}
            </Grid>
          </Grid>

          {/* Remember Me Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox
                  icon={<RadioButtonChecked color="primary" />}
                  checkedIcon={<RadioButtonUnchecked color="primary" />}
                />
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
