import { Avatar, Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { useState, } from 'react';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import StarsIcon from '@material-ui/icons/Stars';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SchoolIcon from '@material-ui/icons/School';
// import EmailIcon from '@material-ui/icons/Email';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .counselor": {
            position: 'relative',
            padding: "6px 10px",
            display: "flex",
            // flexDirection: "column",
            // justifyContent:'space-between',
            height: "100%",
            gap: 30,
            cursor: "pointer",
            alignItems: 'center',
            [theme.breakpoints.down(500)]: {
                width: "100%",
            },
            "& .counselor-about": {
                "& > p": {
                    textAlign: 'left',
                    fontWeight: 400,
                    fontSize: "1rem",
                },
                "& .name": {
                    fontSize: '1rem',
                    fontWeight: 600,
                    "& .exp": {
                        fontWeight: 400,
                        color: '#303f9f',
                        marginLeft: '13px',
                    }
                },

                "& strong": {
                    fontWeight: 600,
                },
                "& .edu": {
                    color: "#000",
                },
            },
        },


        "& .designation, & .interest": {
            position: 'relative',
            "& p": {
                fontSize: 13,
                color: '#000',
                fontWeight: 500,
                display: 'flex',
                "& strong": {
                    fontWeight: 400,
                },
                [theme.breakpoints.down(460)]: {
                    fontSize: 10,
                },
                [theme.breakpoints.down(260)]: {
                    flexWrap: 'wrap',
                    fontSize: 10,
                },
                // alignItems: 'center',
                gap: 6,
                "& svg": {
                    fontSize: 16,
                    color: '#303f9f',
                }
            }
        },

        "& .designation-section": {
            padding: '10px 20px 0 10px',
        },
        "& .price-section": {
            paddingTop: '3px',
            // marginBottom: "1rem",
            marginTop: '6px',
            // "& span": {
            //     transform: "rotate(96deg)",
            // }
        },

        "& .paper-dev": {
            padding: "10px 6px",
            // minHeight:'330px',
            [theme.breakpoints.up('lg')]: {
                width: '460px',
                padding: "10px 6px",
                // width: "100%",
            },
        },

        "& .show-moreSection": {
            padding: 3,
            margin: '3px 0',
            "& .showMore-items": {
                padding: '0 10px',
                "& p": {
                    padding: '10px 20px',
                    textTransform: 'capitalize',
                    fontSize: '13px',
                    "& span": {
                        color: '#303f9f',
                    },

                },
            },
            "& .show-btn": {
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                textTransform: 'capitalize'
                // "& > span":{
                //     display:''
                // }
                // padding:3,
            }
        },
        "& .book-webinar": {
            backgroundColor: '#ADD8E6',
            color: "#000",
            // backgroundColor: '#00b894;',
            // color:"#fff",
        }
    },
    counslrAvatar: {
        width: 100,
        height: 100
    }
}));

function Counselor({ e, handleOpenModal, psychological }) {
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
    const ShowMoreContents = () => {
        return (
            <div className='showMore-items'>
                <p>{e.area_of_expertise}</p>
            </div>
        )
    }


    return (
        <div className={classes.root}>
            <Paper className='paper-dev'>
                <>
                    <div className="counselor" >

                        <div className="counselor-img">
                            <Avatar variant="rounded" alt="counselor-img" src={e?.img} className={classes.counslrAvatar} />
                        </div>
                        <div className="counselor-about">
                            <p className="name">{e?.name},<span className='exp'>{e?.year_of_experience}+ years exp.</span></p>
                            {/* {
                                psychological && <p className="name">{e?.name},<span className='exp'>{e?.year_of_experience}+ 
                                    <br />
                                    years exp.</span></p>
                            } */}
                            <div className="designation">
                                {/* <p><span><EmailIcon /></span>{e?.email}</p> */}
                                <p><span><RecordVoiceOverIcon /></span> <strong>Language:</strong> {e?.language}</p>
                                <p><span><SchoolIcon /></span> <strong>Degree:</strong> {e?.degree1_name}, {e?.degree2_name}{e?.degree3_name && ","} {e?.degree3_name}</p>
                            </div>
                            {/* <p className="exp">+ years of experience</p> */}
                            {/* <p className="exp">Languages: {e?.language}</p> */}
                        </div>
                    </div>
                    <div className='designation-section price-section'>
                        <div className="designation">
                            <p><span><LocalOfferIcon /></span> <strong>Individual session price:</strong>₹ {e?.individual_session_price}</p>
                            <p> <span><LocalOfferIcon /></span><strong>Webinar session</strong>₹  {e?.webinar_session_price}
                            </p>
                            {
                                e.speciality != "" && <div className="ribbon">{e.speciality}</div>
                            }
                        </div>
                    </div>
                    <div className="show-moreSection">
                        <div className="show-items-label">
                            <Button className='show-btn'
                                // variant="outlined"
                                fullWidth
                                color="primary"
                                onClick={showHandler}
                            >
                                <span>area of expertise</span>
                                <span>{showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                            </Button>
                            {
                                showMore && <ShowMoreContents />
                            }
                            {/* <div  className='show-more'>
                                
                            </div> */}
                        </div>
                    </div>

                    <Grid
                        container
                        mt={2}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={1}
                    >
                        {/* <Grid item xs={12} sm={2}></Grid> */}
                        <Grid item xs={12} md={4}>
                            <Button variant="outlined"
                                size='small'

                                fullWidth
                                color="primary">

                                <Link to={`/counselor/${e.id}`}>View Profile</Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button fullWidth
                                size='small'
                                // onClick={(evn) => handleOpenModal(evn, e)}
                                variant="contained"
                                color="primary">
                                <Link to={`https://wa.me/919817670081?text=Hi,I want to book a session with ${e.name}`} target='_bank'>
                                    Book Individual
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                size='small'
                                fullWidth
                                className='book-webinar'
                            // onClick={()=>openWatchApp(e.name)}
                            // onClick={(evn) => handleOpenModal(evn, e)}
                            >
                                <Link to={`https://wa.me/919817670081?text=Hi, I want to book a session with ${e.name}`} target='_bank'>
                                    Book Webinar
                                </Link>

                            </Button>
                        </Grid>
                    </Grid>
                </>
            </Paper>
        </div>
    )
}

export default Counselor
