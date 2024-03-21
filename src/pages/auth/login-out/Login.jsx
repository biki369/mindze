import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Link, Route, Routes } from "react-router-dom";
import image from "../../../assets/Home_page/1.jpg";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LoginUser from '../login-user/LoginUser';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));




export default function Login(props) {
  //   if(authService.isLoggedIn()){
  //     props.history.push("./home");
  //   }

  const classes = useStyles();
  //   console.log(typeof classes.root);

  const [isSignUp, setIsSignUp] = React.useState(false);
  const [account, setAccount] = React.useState({ username: "", password: "" });

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
  }
  //   const isVarifiedUser=(username, password)=>{
  //     return users.find((user)=> user.username === username && user.password === password);
  //   };

  const handelLogin = () => {
    //   if(isVarifiedUser(account.username,account.password)){
    //     authService.doLogIn(account.username);
    //     setAccount({username:"",password:""});
    //     props.history.push("/home");
    //   }
  };


  const signUpForm = () => {
    return (
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid> */}
        </Grid>
      </form>
    )
  }


  const signInform = () => {

    return (
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {/* <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    /> */}

      </form>)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>

                {
                  !isSignUp &&<Link href="#" variant="body2">
                  Forgot password?
                </Link>
                }
              </Grid>
              <Grid item style={{ course: "pointer" }}>
                <Typography onClick={() => setIsSignUp(!isSignUp)} >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>

        
        <Box>
            <Routes>
                <Route path="/login-user" element={<LoginUser/>} />
            </Routes>
        </Box>

    </Grid>
  );
}
