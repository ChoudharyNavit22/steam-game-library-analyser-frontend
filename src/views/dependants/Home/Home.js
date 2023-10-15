
import { Box, Container, Grid, Typography, Button, TextField, Card, CardContent } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:
    {
      steamId: ''
    },
    validationSchema: () => {
      return Yup.object().shape({
        steamId: Yup.string().max(255)
          .required('Steam Id is required')
      });
    },
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus({ success: false });
      setSubmitting(false);
      navigate(`/user/${values.steamId}`)
    },
  });

  let content = (
    <Box sx={{
      backgroundImage:`url('https://www.gameinformer.com/sites/default/files/styles/full/public/2021/12/07/ae8f7cc9/halo-infinite-backside-2.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    }} >
      <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    }}>
        <Container maxWidth="lg" sx={{
              py: {
                xs: '100px',
                sm: window.screen.availHeight / 50
              }
            }}>
          <Grid container spacing={{ xs: 2, }}>
              <Grid sx={{mb: 4}} item xs={12} lg={12} alignItems="center" justifyContent="center">
                <Typography variant="h1" fontWeight={500} letterSpacing={2} align='center' color="common.white">
                    Steam Game Library
                </Typography>
              </Grid>
                <Grid item xs={12} lg={12}>
                  <Card>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 4 }} >
                      <Box sx={{ flexGrow: 1, mt: 3 }} >
                        <form noValidate onSubmit={formik.handleSubmit}>
                          <TextField
                            error={formik.touched.steamId && Boolean(formik.errors.steamId)}
                            fullWidth
                            helperText={formik.touched.steamId && formik.errors.steamId}
                            label="Steam Id"
                            margin="normal"
                            name="steamId"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.steamId}
                            variant="outlined"
                          />
                            <Box sx={{ mt: 2 }}>
                              <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                              >
                              Submit
                            </Button>
                          </Box>
                        </form>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
          </Grid>
        </Container>
      </Box>
      
    </Box>
  );
  return content;
};
