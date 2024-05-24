import {useState } from "react";
import { useLocation} from "react-router-dom";
import { verifyEmail } from "../../../api";
import Swal from "sweetalert2";
import { Button, Paper, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
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

const VerifyEmail = () => {
    const classes = useStyles()
    const location = useLocation();
    let userName = location.state?.username || "";
    // let userName = "";
    const [verifyData,setVerifyData] = useState({
        username: userName,
        otp:""
    });
    const handelReset = (property, event) => {
        const accountCopy = { ...verifyData };
        accountCopy[property] = event.target.value;
        setVerifyData(accountCopy);
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic for form submission here
        verifyEmail(`api/verify/${verifyData.username}/${verifyData.otp}`).then((data) => {
            if (data) {
                Swal.fire({
                    title: 'Email Verified',
                    text: data.info + ".Ok to continue. You will be redirected to login page",
                    icon: "success",
                    // showConfirmButton: false,
                    // timer: 1900
                }).then((result) => {
                    if (result.isConfirmed) {
                        // window.open("/login");
                        window.location.href = "/login"
                    }
                })
            }
        })
    };
        return (
            <div className={classes.root}>
                <Paper className='paper-card'>
                    <h3>Verify Email</h3>
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
                            value={verifyData.username}
                            onChange={(e)=>handelReset("username",e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="otp"
                            label="OTP"
                            name="otp "
                            autoComplete="otp "
                            autoFocus
                            value={verifyData.otp}
                            onChange={(e)=>handelReset("otp",e)}
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
        )
    }

    export default VerifyEmail
