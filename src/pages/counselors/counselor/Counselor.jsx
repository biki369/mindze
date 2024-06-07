import { Avatar, Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const useStyles = makeStyles((theme) => ({
    root: {

        "& .counselor": {
            padding: "6px 10px",
            display: "flex",
            [theme.breakpoints.down(500)]: {
                width: "100%",
            },
            gap: 16,
            cursor: "pointer",
            "& .counselor-about": {
                "& > div": {
                    margin: "2px 0"
                },
                "& .name": {
                    fontSize: '1rem',
                    fontWeight: 600,
                    display: "flex",
                    // justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    "& .counslr-online": {
                        display: "inline-block",
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        // backgroundColor: "#00b894",
                        // boxShadow: "0 0 0 2px #00b894",
                    }
                },

                "& .edu": {
                    display: "flex",
                    gap: 10,
                    color: "#000",
                    alignItems: 'center',
                },

            },

        },
        "& .designation-section": {
            padding: '10px 20px 0 20px',
            "& .designation, & .interest": {
                "& p": {
                    fontSize: 13,
                    color: '#000',
                    fontWeight: 500,
                    display: 'flex',
                    [theme.breakpoints.down(460)]: {
                        fontSize: 10,
                    },
                    [theme.breakpoints.down(260)]: {
                        flexWrap: 'wrap',
                        fontSize: 10,
                    },
                    alignItems: 'center',
                    gap: 10,
                    "& svg": {
                        color: '#303f9f',
                    }
                }

            },
        },
        "& .price-section": {
            paddingTop: '3px',
            marginBottom: "1rem",
            // "& span": {
            //     transform: "rotate(96deg)",
            // }
        },

        "& .paper-dev": {
            padding: "10px 6px",
            width: '460px',
            [theme.breakpoints.down(500)]: {
                width: "100%",
                // padding: "10px 0",
            },
        }
    }
}));
function Counselor({ e, handleOpenModal }) {
    const classes = useStyles();

    //   const [openModal, setOpenModal] = useState(false);
    //   const [item, setItem] = useState();

    //   const handleOpenModal = (evn, e) => {
    //     if (localStorage.getItem("token") !== null) {
    //         setOpenModal(true);
    //         setItem(e);
    //         // setDate(todayDate)
    //     } else {
    //         Swal.fire({
    //             icon: 'warning',
    //             showCancelButton: true,
    //             title: `Please login to booked session.`,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Go to login page',
    //             cancelButtonText: 'No'
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 window.open("/login");
    //             }
    //         })

    //     }
    // };



    return (
        <div className={classes.root}>
            <Paper className='paper-dev'>
                <>
                    <div className="counselor" >
                        <div className="counselor-img">
                            <Avatar alt="counselor-img" src={e?.img} className={classes.counslrAvatar} />
                        </div>
                        <div className="counselor-about">
                            <p className="name">{e?.name}</p>
                            <p className="exp">{e?.year_of_experience}+ years of experience</p>
                        </div>
                    </div>
                    <div className='designation-section'>
                        <div className="designation">
                            <p><span><StarsIcon /></span> <strong>designation:</strong> {e?.designation}</p>
                        </div>
                        <div className='interest'>

                            <p><span><CheckCircleIcon /></span><strong>interest:</strong>{e?.interest}</p>
                        </div>
                        {/* <div className="edu"><span><SchoolIcon /></span> {e.education}</div> */}
                    </div>
                    <div className='designation-section price-section'>
                        <div className="designation">
                            <p><span><LocalOfferIcon /></span> <strong>Individual session price:</strong>₹ {e.price?.annual}</p>
                        </div>
                        <div className='interest'>
                            <p> <span><LocalOfferIcon /></span><strong>Webinar session</strong>₹  {e.price?.monthly}
                            </p>
                        </div>

                    </div>

                    <Grid
                        container
                        mt={2}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={2}></Grid>
                        <Grid item xs={12} sm={5}>
                            <Button variant="outlined"
                                fullWidth
                                color="primary">
                                <Link to={`/counselor/${e.id}`}>View Profile</Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Button fullWidth
                                onClick={(evn) => handleOpenModal(evn, e)}
                                // onClick={handleOpenModal}
                                variant="contained"
                                color="primary">Book session</Button>
                        </Grid>
                    </Grid>
                </>
            </Paper>
        </div>
    )
}

export default Counselor
