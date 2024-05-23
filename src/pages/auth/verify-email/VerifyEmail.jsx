import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../../api";
import Swal from "sweetalert2";

const VerifyEmail = () => {
    let { user, verify_pin } = useParams();

    useEffect(() => {
        verifyEmail(`api/verify/${user}/${verify_pin}`).then((data) => {
            if (data) {
                Swal.fire({
                    title: 'Email Verified',
                    text: data.info,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1900
                });
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }
        })
    }, [])

    return (
        <div>VerifyEmail</div>
    )
}

export default VerifyEmail
