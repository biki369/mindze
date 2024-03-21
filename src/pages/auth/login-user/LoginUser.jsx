import { Avatar, Box, Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 3rem',
    "& .login-user": {
      width: 'max-content',
      padding: '10px',
      boxShadow: '0 0 3px #000',
      borderRadius:'6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      "& .login-user-icon": {
        width: '150px',
        height: '150px',
      },

      "& .user-content": {
        padding: '1rem 13px',
        "& .user-name": {
          fontSize: '1.2rem',
          margin: '13px 0',
          fontWeight: 500,
          // textAlign: 'center',
          "& span":{
            color:theme.palette.primary.main
          }
        },
        "& .name": {
          fontSize: '1rem',
          margin: '13px 0',
          fontWeight: 400,
        },
        "& .email": {
          fontSize: '1rem',
          // textAlign: 'center',
          margin: '10px 0',
        }
      },

    },


    "& .booked-consultant": {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px 0',
      marginTop: '2rem',
      // justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      "& .consulter": {
        // padding: '0 13px',
        // maxWidth: 'max-content',
        "& h3":{
          marginTop:'10px',
          color:theme.palette.primary.main
        },
        width: '300px',
        padding: '1rem 1.3rem 0 ',
        borderRadius: '6px',
        boxShadow: '0 0 3px #000',
        transition: 'all 0.3s ease-in',
        cursor: 'pointer',
        "&:hover": {
          boxShadow: '0 0 6px #000'
        },
        "& .name": {
          fontSize: '1rem',
          margin: '13px 0',
          fontWeight: 500,
          // textAlign: 'center',
        },
        "& .date": {
          fontSize: '1rem',
          margin: '13px 0',
          fontWeight: 500,
        },
        "& .start": {
          fontSize: '1rem',
          margin: '13px 0',
          "& span": {
            fontWeight: 500,
            color: theme.palette.success.main
          }
        },
        "& .end": {
          fontSize: '1rem',
          margin: '13px 0',
          fontWeight: 400,
          "& span": {
            fontWeight: 500,
            color: theme.palette.secondary.main
          }
        },
      }

    }




  },

}));

const LoginUser = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Box className="login-user">
          <Avatar className="login-user-icon" src="" alt="logo" />
          <Box className="user-content">
            <p className="user-name"> User Name: <span>John@369</span></p>
            <p className="name"> Name: John Doe</p>
            <p className="email">Email: xyz@mail.com</p>
            <Button variant="contained" color="secondary">Logout</Button>
          </Box>
        </Box>

        <Box className="booked-consultant">
          <Box className="consulter">
            <h3>Past Bookings</h3>
            <p className="name">Name: John Doe</p>
            <p className="date">Date: 2024-03-27</p>
            <p className="start"><span>Start time:</span> 03:44:55</p>
            <p className="end"><span>End time:</span> 03:44:55</p>
          </Box>
          <Box className="consulter">
            <h3>Past Bookings</h3>
            <p className="name">Name: John Doe</p>
            <p className="date">Date: 2024-03-27</p>
            <p className="start"><span>Start time:</span> 03:44:55</p>
            <p className="end"><span>End time:</span> 03:44:55</p>
          </Box>
          <Box className="consulter">
            <h3>Upcoming Bookings</h3>
            <p className="name">Name: John Doe</p>
            <p className="date">Date: 2024-03-27</p>
            <p className="start"><span>Start time:</span> 03:44:55</p>
            <p className="end"><span>End time:</span> 03:44:55</p>
          </Box>





        </Box>



      </Box>
    </div>
  )
}

export default LoginUser
