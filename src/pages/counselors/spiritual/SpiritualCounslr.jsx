// import React from 'react'
import {makeStyles,} from '@material-ui/core';
import { useState } from 'react';
import Loader from '../../../components/loader/Loader';
import Swal from 'sweetalert2';
import BookingSlot from '../../../components/booking-slots/BookingSlot';
import { useOutletContext } from "react-router-dom";
import Counselor from '../counselor/Counselor';
import NoCounselors from '../../../components/NoCounselors/NoCounselors';
import TimerAlert from '../../../components/alerts/TimeAlert';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            alignItems: "center",
            paddingLeft:"1rem",
            [theme.breakpoints.down("md")]: {
                paddingLeft:"0",
            },
            // justifyContent: "center",
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

const SpiritualCounslr = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState();
    const [spiritualData] = useOutletContext();
    const handleOpenModal = (evn, e) => {
        // <TimerAlert/>
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
        <div className={classes.root}>
            {
                spiritualData === null ? (<div className='loader'>
                    <Loader />
                </div>) : (
                    <div className='counselor-container' >
                        {
                            spiritualData?.map((e, i) => {
                                return (
                                    <Counselor e={e} i={i} handleOpenModal={handleOpenModal} key={i}/>
                                )
                            }
                            )
                        }
                    </div>
                )
            }
           
            {/* <NoCounselors s/>  */}
            <BookingSlot  openModal={openModal} setOpenModal={setOpenModal} item={item} />
        </div>
    )
}

export default SpiritualCounslr
