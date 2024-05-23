import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../../api";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        padding:"2.3rem",
    }
  }))
  
const VerifyEmail = () => {
    let { user, verify_pin } = useParams();
    const classes = useStyles()
    useEffect(() => {
        verifyEmail(`api/verify/${user}/${verify_pin}`).then((data) => {
            if (data) {
                Swal.fire({
                    title: 'Email Verified',
                    text: data.info,
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
    }, [])

    return (
        <div className={classes.root}>
            <h1>Email Verified</h1>
        </div>
    )
}

export default VerifyEmail
