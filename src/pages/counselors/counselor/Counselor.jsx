import { Avatar, Button, Grid, IconButton, Paper, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SchoolIcon from '@material-ui/icons/School';
import { Opacity } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .counselor": {
            padding: "6px 10px",
            display: "flex",
            gap: 30,
            cursor: "pointer",
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down(500)]: {
                width: "100%",
            },
            "& .counselor-about": {
                "& > p": {
                    textAlign: 'center',
                    fontWeight: 400,
                    // margin: "2px 0"
                },
                "& .name": {
                    fontSize: '1rem',
                    // fontWeight: 600,
                },

                "& .edu": {
                    // display: "flex",
                    // gap: 10,
                    color: "#000",
                    // alignItems: 'center',
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
        },
        "& .show-more": {
            cursor: 'pointer',
        }

    },
    counslrAvatar: {
        width: 100,
        height: 100
    }
}));

function Counselor({ e, handleOpenModal }) {
    const classes = useStyles();
    const [showMore, setShowMore] = useState(false)

    const showHandler = () => {
        setShowMore(!showMore)
    }

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
                            <p className="name">Name: {e?.name}</p>
                            <p className="exp">{e?.year_of_experience}+ years of experience</p>
                            <p className="exp">Languages: {e?.language}</p>
                        </div>
                    </div>
                    <div className='designation-section'>
                        <div className="designation">
                            <p><span><SchoolIcon /></span> <strong>Degree:</strong> {e?.degree1_name}, {e?.degree3_name}, {e?.degree3_name}</p>
                        </div>
                        <div className='interest'>
                            <p>
                                <span><StarsIcon /></span><strong>Area of interest:</strong>
                                <span onClick={showHandler} className='show-more'>
                                    {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </span>
                            </p>
                            {
                                showMore && <>
                                    <div>
                                        hi ..........
                                    </div>
                                </>
                            }
                        </div>
                        {/* <div className="edu"><span><SchoolIcon /></span> {e.education}</div> */}
                    </div>
                    <div className='designation-section price-section'>
                        <div className="designation">
                            <p><span><LocalOfferIcon /></span> <strong>Individual session price:</strong>₹ {e?.individual_session_price}</p>
                        </div>
                        <div className='designation'>
                            <p> <span><LocalOfferIcon /></span><strong>Webinar session</strong>₹  {e?.webinar_session_price}
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
