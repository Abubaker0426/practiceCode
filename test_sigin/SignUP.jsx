import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Box,
  Paper,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={6}
        style={{ padding: "20px", borderRadius: "10px", marginTop: "50px" }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setIsLogin(true)}
              disabled={isLogin}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setIsLogin(false)}
              disabled={!isLogin}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
        <Box mt={3}>
          {isLogin ? (
            <Box>
              <Typography variant="h5" component="h1">
                Login
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Login
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography variant="h5" component="h1">
                Signup
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="new-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default SignUp;
