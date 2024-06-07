import {useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Loader from '../../../components/loader/Loader';
import Swal from 'sweetalert2';
import BookingSlot from '../../../components/booking-slots/BookingSlot';
import { useOutletContext } from "react-router-dom";
import Counselor from '../counselor/Counselor';
import NoCounselors from '../../../components/NoCounselors/NoCounselors';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            paddingLeft:"1rem",
            [theme.breakpoints.down("md")]: {
                paddingLeft:"0",
            },
            // justifyContent: "center",
            alignItems: "center",
        },

        "& .loader": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 0',
            flexDirection: 'column',
            "& a": {
                fontSize: '1.6rem',
                color: theme.palette.primary.main,
                "&:hover": {
                    textDecoration: 'underline',
                }
            }
        }

    },

}));
const PsychologicalCounslr = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState();
    const [,psychologicalData] = useOutletContext();

    const handleOpenModal = (evn, e) => {
        if (localStorage.getItem("token") !== null) {
            setOpenModal(true);
            setItem(e);
            // setDate(todayDate)
        } else {
            Swal.fire({
                icon: 'warning',
                showCancelButton: true,
                title: `Please login to booked session.`,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login page',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("/login");
                }
            })

        }
    };
    return (
        <div className={classes.root}
        >
            {
                psychologicalData === null ? (<div className='loader'>
                    <Loader />
                </div>) : (
                    <div className='counselor-container' >
                        {
                            psychologicalData?.map((e, i) => {
                                return (
                                  <Counselor e={e} handleOpenModal={handleOpenModal} key={i} />
                                )
                            }
                            )
                        }
                    </div>
                )
            }
       
            {/* <NoCounselors p/> */}
            <BookingSlot openModal={openModal} setOpenModal={setOpenModal} item={item} />
        </div>
    )
}

export default PsychologicalCounslr
