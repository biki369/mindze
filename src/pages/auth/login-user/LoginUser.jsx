import { Avatar, Box, Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { bookedByUser, getProfile } from "../../../api";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 3rem',
    [theme.breakpoints.down(560)]: {
      padding: '20px',
    },
    "& .login-user": {
      width: 'max-content',
      [theme.breakpoints.down(560)]: {
        width: '100%',
      },
      padding: '10px',
      boxShadow: '0 0 1px #000',
      borderRadius: '6px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      "& .login-user-icon": {
        width: '130px',
        height: '130px',
        // [theme.breakpoints.down(560)]: {
        //   width: '80px',
        //   height: '80px',
        // },
      },
      "& .user-content": {
        padding: '1rem 13px',
        "& .user-name": {
          fontSize: '1.2rem',
          margin: '13px 0',
          fontWeight: 500,
          "& span": {
            color: theme.palette.primary.main
          }
        },
        "& .name": {
          fontSize: '1rem',
          margin: '13px 0',
          fontWeight: 400,
        },
        "& .email": {
          fontSize: '1rem',
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
        "& h3": {
          marginTop: '10px',
          color: theme.palette.primary.main
        },
        width: '300px',
        padding: '1rem 1.3rem 0 ',
        borderRadius: '6px',
        boxShadow: '0 0 1.3px #000',
        transition: 'all 0.3s ease-in',
        cursor: 'pointer',
        "&:hover": {
          boxShadow: '0 0 3px #000'
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
  let navigate = useNavigate();

  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [bookingUser, setBookingUser] = useState([]);


  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    getProfile("api/profile/", localStorage.getItem("token")).then((data) => {
      if (data) {
        setUserData(data)
      }
    }).catch((err) => {
      console.log(err.response.data,"err")
    })
  }, []);


  useEffect(() => {
    bookedByUser("api/bookings/user", localStorage.getItem("token")).then((data) => {
      if (data) {
        setBookingUser(data)
      }
    }).catch((err) => {
      console.log(err)
    })

  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {
        isLoading && <Loader />
      } */}
      {
        <Box>
          <Box className="login-user">
            <Avatar className="login-user-icon" src="" alt="logo" />
            <Box className="user-content">
              <p className="user-name"> User Name: <span>{userData?.username}</span></p>
              <p className="name"> Name: {userData?.first_name} {userData?.last_name}</p>
              <p className="email">Email:{userData?.email}</p>
              <Button variant="contained" color="secondary" onClick={logoutHandler}>Logout</Button>
            </Box>
          </Box>

          <Box className="booked-consultant">
            <Box className="consulter">
              <h3>{userData?.username} 's Bookings</h3>
              {
                bookingUser?.length === 0 && <p>No Bookings</p>
              }
              {
                bookingUser?.map((e, i) => (
                  <div key={i}>
                    <p className="name">Name: {e?.consultant.name}</p>
                    <p className="date">Date: {e?.slot.date}</p>
                    <p className="start"><span>Start time:</span> {e?.slot.start_time}</p>
                    <p className="end"><span>End time:</span>  {e?.slot.end_time}</p>
                  </div>
                ))
              }

            </Box>
            {/* <Box className="consulter">
              <h3>Upcoming Bookings</h3>
              <p className="name">Name: John Doe</p>
              <p className="date">Date: 2024-03-27</p>
              <p className="start"><span>Start time:</span> 03:44:55</p>
              <p className="end"><span>End time:</span> 03:44:55</p>
            </Box> */}
          </Box>
        </Box>
      }

    </div>
  )
}

export default LoginUser
