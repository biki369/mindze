import React, { useEffect, } from 'react';
import { Avatar, Button, Grid, IconButton, InputAdornment, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate, } from "react-router-dom";
import image from "../../../../public/Home_page/1.jpg";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Swal from 'sweetalert2';
import { loginUser, registerNewUser } from '../../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .link-from-switch": {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main
      }
    }
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login(props) {
  const classes = useStyles();
  let navigate = useNavigate();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [account, setAccount] = React.useState({ username: "", password: "", email: "", first_name: "", last_name: "" });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    if (account.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: `Password must be at least 6 characters`,
        showConfirmButton: false,
        timer: 1600
      })
    } else {
      if (isSignUp) {
        registerNewUser("api/register/", account).then((e) => {
          Swal.fire({
            icon: "success",
            title: e.Success,
            text: "OTP has been sent to registered email id",
            showConfirmButton: false,
            timer: 2300
          })
          setIsSignUp(false);
          if (e) {
            navigate("/mail-verification", { state: { username: account.username } });
          }
        }).catch((e) => {
          const { email, password, username, last_name } = e.response.data;
          const errorMsg = `
          <p> ${email || ""}</p>
          <p> ${last_name && "Last Name "} ${last_name || ""}</p>
          <p> ${username || ''}</p>
          <p> ${password || ''}</p>
          `;
          Swal.fire({
            icon: "error",
            html: errorMsg,
            // title: `${email[0] || password[0] || username[0] || last_name[0]}`,
            showConfirmButton: false,
            timer: 2300
          })
        });
      }
      else {
        loginUser("api/login/", account).then((e) => {
          if (e.token) {
            localStorage.setItem("token", e.token);
            navigate("/login-user");
            Swal.fire({
              icon: "success",
              title: "success",
              showConfirmButton: false,
              timer: 1600
            })
          }
        }).catch((e) => {
          const { non_field_errors, info } = e.response.data;
          if (info) {
            Swal.fire({
              title: 'Email not verified',
              text: "Please verify your email ok to continue",
              icon: "error",
              // showConfirmButton: false,
              // timer: 1900
            })
              .then((result) => {
                if (result.isConfirmed) {
                  navigate("/mail-verification", { state: { username: account.username } });
                }
              })
            return;
          }
          Swal.fire({
            icon: "error",
            // title:"",
            title: `PLease check your username and password`,
            showConfirmButton: false,
            timer: 1600
          })
        })
      }
    }
    setAccount({ username: "", password: "", email: "", first_name: "", last_name: "" });
    //form validation
  };

  const signUpForm = () => {
    return (
      <form className={classes.form} onSubmit={(e) => handelSubmit(e)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="first_name"
              id="firstName"
              label="First Name"
              // autoFocus
              value={account.first_name}
              onChange={(e) => handelAccount("first_name", e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="last_name"
              value={account.last_name}
              onChange={(e) => handelAccount("last_name", e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              value={account.username}
              // autoComplete="uname"
              onChange={(e) => handelAccount("username", e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={account.email}
              onChange={(e) => handelAccount("email", e)}
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
              value={account.password}
              autoComplete="current-password"
              onChange={(e) => handelAccount("password", e)}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </Grid>
      </form>
    )
  };

  const signInform = () => {
    return (
      <form className={classes.form} onSubmit={(e) => handelSubmit(e)}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="username"
          label="User Name"
          name="username"
          value={account.username}
          // autoComplete="uname"
          onChange={(e) => handelAccount("username", e)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          value={account.password}
          type={showPassword ? 'text' : 'password'}
          id="password"
          onChange={(e) => handelAccount("password", e)}
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

        {/* <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

      </form>)
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/login-user");
    }
  }, [])

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        className={classes.size}
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={1}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <div>
            {isSignUp ? signUpForm() : signInform()}
            <Grid container>
              <Grid item xs>
                {
                  !isSignUp && <Link to={"/forgot-password"} variant="body2">
                    Forgot password?
                  </Link>
                }
              </Grid>
              <Grid item >
                <Typography onClick={() => setIsSignUp(!isSignUp)} variant="body2" className='link-from-switch'>
                  {!isSignUp ? "Don't have an account? Sign Up" : " Already have an account? Sign In"}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
