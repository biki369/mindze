
import React from 'react';
import { Container, TextField, Button, Typography, makeStyles, Paper, InputAdornment, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import BackCurrent from '../../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';
import { resetPassword } from '../../../api';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& .paper-card": {
      padding: theme.spacing(3),
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ResetPassword = () => {
  const classes = useStyles();
  const location = useLocation();
  let userName = location.state?.username || "";
  // if(userName === null) { 
  //   userName = "";
  // }
  const [showPassword, setShowPassword] = React.useState(false);

  const [ResetPassword, setResetPassword] = React.useState({ username: userName, password: "", otp: "", confirmPassword: "" });

  const handelReset = (property, event) => {
    const accountCopy = { ...ResetPassword };
    accountCopy[property] = event.target.value;
    setResetPassword(accountCopy);
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ResetPassword.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: `Password must be at least 6 characters`,
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    // Add your logic for form submission here
    const payload = {
      username: ResetPassword.username,
      otp: ResetPassword.otp,
      password: ResetPassword.password
    };
    resetPassword("api/reset_password", payload).then((data) => {
      if (data) {
        Swal.fire({
          icon: "success",
          title: `Password reset successfully`,
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      }
    }).catch((error) => {
      // console.log(error);
      Swal.fire({
        icon: "error",
        title: `${error.error} Something went wrong`,
        showConfirmButton: false,
        timer: 1500
      })
    })
  };


  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      {/* <CssBaseline /> */}
      <BackCurrent link="/forgot-password" name="forgot password" />
      <Paper className="paper-card">

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="username"
                  label="username"
                  type="text"
                  id="text"
                  // autoComplete="current-password"
                  value={ResetPassword.username}
                  onChange={(e) => handelReset("username", e)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="otp"
                  label="top"
                  type="number"
                  id="text"
                  // autoComplete="current-password"
                  value={ResetPassword.otp}
                  onChange={(e) => handelReset("otp", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={ResetPassword.password}
                  onChange={(e) => handelReset("password", e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}

                />
              </Grid>
              {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={ResetPassword.confirmPassword}
                onChange={(e) => handelReset("confirmPassword", e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reset Password
            </Button>
          </form>
        </div>
      </Paper>

    </Container>
  );
};

export default ResetPassword;
