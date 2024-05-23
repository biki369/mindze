
import { useState } from 'react';
import { TextField, Button, Snackbar, makeStyles, Paper } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';
import { forgotPassword } from '../../../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: theme.spacing(2),

    "& .paper-card": {
      padding: theme.spacing(4),
      width: '100%',
      maxWidth: '400px',
      height: '360px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  form: {
    width: '100%',
    maxWidth: '400px',
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
const ForgotPassword = () => {
  const classes = useStyles();
  const [username , setUsername] = useState('');
  // const [open, setOpen] = useState(false);
  // const [message, setMessage] = useState('');
  // const [severity, setSeverity] = useState('success');
  let navigate = useNavigate();
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: username
    };
    forgotPassword("api/forgot_password", payload).then((e) => {
      // console.log(e,"------------------");
      if (e) {
        Swal.fire({
          icon: "success",
          // title: "Check your email",
          title: e.info,
          showConfirmButton: false,
          timer: 1900
        })
        navigate('/reset-password', { state: { username: username } });
      }
    }).catch((e) => {
     Swal.fire({
       icon: "error",
      //  title: e.response.data.info,
       title: 'username not found',
       showConfirmButton: false,
       timer: 1500
     })
    })
  };
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };
  return (
    <div className={classes.root}>
      <Paper className='paper-card'>
        <h3>Forgot Password</h3>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username "
            autoComplete="username "
            autoFocus
            value={username}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ForgotPassword;
