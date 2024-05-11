import { useEffect, useState } from 'react'
import { Avatar, Button, Grid,  Paper, makeStyles } from '@material-ui/core';
import { Link,} from 'react-router-dom';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { getConsultant} from '../../../api';
import Loader from '../../../components/loader/Loader';
import Swal from 'sweetalert2';
import BookingSlot from '../../../components/booking-slots/BookingSlot';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
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
                width: '400px',
                [theme.breakpoints.down(500)]: {
                    width: "100%",
                    // padding: "10px 0",
                },
            }
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

    modalContainer: {
        position: 'relative',
    },

    plans: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '1rem',
        flexWrap: 'wrap',
        "& .plan": {
            width: '230px',
            // height: '130px',
            cursor: 'pointer',
            background: "#eee",
            // backgroundColor: theme.palette.background.paper,
            borderRadius: 10,
            padding: 13,

            "& .plan-name": {
                fontSize: "1.3rem",
                fontWeight: 600,
                margin: '13px 0',
                textAlign: 'center',
                textTransform: 'capitalize'
            },
            "& .plan-price": {
                fontSize: 16,
                fontWeight: 600,
                margin: '10px 0',
                textTransform: 'capitalize'
            },
            "& p": {
                display: 'flex',
                alignItems: 'center',
                gap: "6px",
                fontWeight: 600,
                "& svg": {
                    color: '#303f9f',
                }
            }
        }

    },

    counslrAvatar: {
        width: 90,
        height: 90,
    }
}));

const PsychologicalCounslr = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [psychologicalData, setPsychologicalData] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState();

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
    useEffect(() => {
        // psychological
        getConsultant("api/consultant/psychological").then((data) =>
            setPsychologicalData(data),
            setIsLoading(true)
        ).catch((err) => {
            console.log(err)
        })
    }, [isLoading]);

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
                                    <Paper key={i} className='paper-dev'>
                                        <>
                                            <div className="counselor" >
                                                <div className="counselor-img">
                                                    <Avatar alt="counselor-img" src={e?.img} className={classes.counslrAvatar} />
                                                </div>
                                                <div className="counselor-about">
                                                    <p className="name">{e?.name}</p>
                                                    <p className="exp">{e?.exp}+ years of experience</p>
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
                                )
                            }
                            )
                        }
                    </div>
                )
            }
            <BookingSlot  openModal={openModal} setOpenModal={setOpenModal} item={item} />
        </div>
    )
}

export default PsychologicalCounslr
