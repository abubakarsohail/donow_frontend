import {
  Box,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import * as Yup from "yup";
import { Add } from "@material-ui/icons";
import { DatePicker, LocalizationProvider } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { useFormik } from "formik";
import { DropzoneArea } from "material-ui-dropzone";
import { useEffect, useState } from "react";
import StyledButton from "../../components/StyledButton";
import { createWorkshop, getCategories } from "../../services/workshopService";
import { useSnackbar } from "notistack";

const Creator = () => {
  const [date, setDate] = useState(new Date().toISOString());
  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar: snackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCategories();
      setCategories(data);
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "default",
      level: "Easy",
      price: "",
      quota_of_attendees: "",
      deadline: date,
      has_toolkit: false,
      language: "default",
      cover_image_path: "",
      cost_free_lesson: "undefined",
      no_of_lessons: 1,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      let formData = new FormData();
      for (var key in values) {
        formData.append(key, values[key]);
      }
      try {
        await createWorkshop(formData);
        snackbar("Workshop Created Successfully.", { variant: "success" });
        formik.resetForm();
      } catch (ex) {
        snackbar("Unable to create workshop.", { variant: "error" });
      }
    },
  });

  return (
    <Box sx={{ marginTop: 4 }}>
      <Container maxWidth="sm">
        <Typography
          color="textPrimary"
          variant="h4"
          align="center"
          gutterBottom
        >
          Become Creator Today!
        </Typography>
        <Typography variant="h6" color="primary" align="center" gutterBottom>
          Create your own workshop.
        </Typography>
        <Divider />

        {/* Workshop Form */}
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography color="primary">Type of Workshop</Typography>

              {/* Type of Workshop */}
              <RadioGroup name="type" row>
                <FormControlLabel
                  control={<Radio checked color="primary" />}
                  label="One-Time Workshop"
                />
                <FormControlLabel
                  control={<Radio checked={false} color="primary" />}
                  label="Recurring Workshop"
                />
              </RadioGroup>
            </Grid>

            {/* Title of Workshop */}
            <Grid item xs={12}>
              <Typography color="primary" gutterBottom>
                Title of Workshop
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Title"
                {...formik.getFieldProps("title")}
                helperText={formik.touched.title && formik.errors.title}
                error={formik.touched.title ? true : false}
              />
            </Grid>

            {/* Description of Workshop */}
            <Grid item xs={12}>
              <Typography color="primary" gutterBottom>
                Description
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Define you workshop with suitable bio"
                multiline
                rows={5}
                {...formik.getFieldProps("description")}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                error={formik.errors.description ? true : false}
              />
            </Grid>

            {/* Category of Workshop */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Category of Workshop
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                {...formik.getFieldProps("category")}
              >
                <MenuItem value="default" disabled>
                  Select Category
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.title}>
                    {category.title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Price of Workshop */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Price of Workshop
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("price")}
              />
            </Grid>

            {/* Leve of Course */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Level of Course
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                {...formik.getFieldProps("level")}
              >
                {["Easy", "Medium", "Difficult"].map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Quota */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Quota
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Quota"
                {...formik.getFieldProps("quota_of_attendees")}
              />
            </Grid>

            {/* Date of Workshop */}
            {/* <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Date of Workshop
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  renderInput={(params) => (
                    <TextField placeholder="Select Date" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid> */}

            {/* Time of Workshop */}
            {/* <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Time of Workshop
              </Typography>
              <Grid
                container
                item
                xs={12}
                justifyContent="space-between"
                spacing={1}
              >
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    placeholder="Start Time"
                  >
                    <option>Start Time</option>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    placeholder="End Time"
                  >
                    <option>End Time</option>
                  </TextField>
                </Grid>
              </Grid>
            </Grid> */}

            {/* Language */}
            <Grid item xs={12}>
              <Typography color="primary" gutterBottom>
                Language
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                {...formik.getFieldProps("language")}
              >
                <MenuItem value="default" disabled>
                  Select Language
                </MenuItem>
                <MenuItem value="English">English</MenuItem>
              </TextField>
            </Grid>

            {/* Toolkit */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Toolkit{" "}
                <Typography
                  color="textPrimary"
                  component="span"
                  variant="caption"
                >
                  (optional)
                </Typography>
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                {...formik.getFieldProps("has_toolkit")}
              >
                <MenuItem value={false}>No</MenuItem>
                <MenuItem value={true}>Yes</MenuItem>
              </TextField>
            </Grid>

            {/* Deadline */}
            <Grid item xs={6}>
              <Typography color="primary" gutterBottom>
                Deadline of Enrollment{" "}
                <Typography
                  color="textPrimary"
                  component="span"
                  variant="caption"
                >
                  (optional)
                </Typography>
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableToolbar
                  variant="inline"
                  inputVariant="outlined"
                  value={date}
                  onChange={(newDate) => setDate(newDate.toISOString())}
                  renderInput={(params) => (
                    <TextField placeholder="Select Date" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            {/* Add Images */}
            <Grid item xs={12}>
              <Typography color="primary" gutterBottom>
                Add Images
              </Typography>
              <input
                type="file"
                name="cover_image_path"
                onChange={(event) =>
                  formik.setFieldValue(
                    "cover_image_path",
                    event.currentTarget.files[0]
                  )
                }
              />
              {/* <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: 100,
                      background: "#F2F2F2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="caption" align="center" gutterBottom>
                      Add cover image
                    </Typography>
                    <Add />
                  </Box>
                  <Typography variant="caption" style={{ fontSize: 8 }}>
                    *Maximum Image Size is 10MB
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      border: "4px dashed #484343",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 100,
                    }}
                  >
                    <Typography variant="caption">Image 1</Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      border: "4px dashed #484343",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 100,
                    }}
                  >
                    <Typography variant="caption">Image 2</Typography>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <Box
                    sx={{
                      border: "4px dashed #484343",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 100,
                    }}
                  >
                    <Typography variant="caption">Image 1</Typography>
                  </Box>
                </Grid>
              </Grid> */}
            </Grid>

            {/*  Create */}
            <Grid container item xs={12} justifyContent="center">
              <Grid item xs={6}>
                <StyledButton
                  variant="contained"
                  fullWidth
                  pending={formik.isSubmitting}
                  onClick={formik.handleSubmit}
                >
                  Create
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Creator;
