import { Avatar, Box, Button, Container, Paper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    "& .login-user": {
      width: 'max-content',
      padding: '10px',
      boxShadow: '0 0 3px #000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      "& .login-user-icon": {
        width: '150px',
        height: '150px',
      },

      "& .user-content": {
        padding: '0 13px',
        "& .user-name": {
          fontSize: '1.2rem',
          margin: '13px 0',
          fontWeight: 500,
          // textAlign: 'center',
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

    }




  },

}));

const LoginUser = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Box className="login-user">
          <Avatar className="login-user-icon" src="" alt="logo" />
          <Box className="user-content">
            <p className="user-name"> User Name: John</p>
            <p className="name"> Name: John Doe</p>
            <p className="email">Email: xyz@mail.com</p>
            <Button variant="contained" color="secondary">Logout</Button>
          </Box>
        </Box>

        <Box className="booked-consultant"> 
              
        </Box>



      </Container>
    </div>
  )
}

export default LoginUser
