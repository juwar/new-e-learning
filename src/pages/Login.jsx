import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SchoolIcon from "@mui/icons-material/School";
import ButtonComponent from "../layouts/components/ButtonComponent";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      username: data.get("username"),
      password: data.get("password"),
    }
    if(formData.username === 'admin' && formData.password === 'admin'){
      navigate('/teacher')
    }
    console.log(formData);
  };

  return (
    <Container component="main" className="Login__wrapper">
      <Box className="Login__box">
        <SchoolIcon className="Login__icon" />
        <Typography className="Login__text-header" component="h1" variant="h5">
          Hello Again !
        </Typography>
        <Typography className="Login__text-sub-header" variant="h6">
          Welcome to smart system e-learning
        </Typography>
        <Box
          className="Login__form"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <ButtonComponent
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </ButtonComponent>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
