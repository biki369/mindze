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
import EmailIcon from '@material-ui/icons/Email';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .counselor": {
            padding: "6px 10px",
            display: "flex",
            gap: 30,
            cursor: "pointer",
            alignItems: 'center',
            // justifyContent: 'center',
            [theme.breakpoints.down(500)]: {
                width: "100%",
            },
            "& .counselor-about": {
                "& > p": {
                    textAlign: 'left',
                    fontWeight: 400,
                    fontSize: "1rem",
                    // margin: "2px 0"
                },
                "& .name": {
                    fontSize: '1rem',
                    fontWeight: 600,
                    "& .exp": {
                        fontWeight: 400,
                        color: '#303f9f',

                    }
                },

                "& .edu": {
                    // display: "flex",
                    // gap: 10,
                    color: "#000",
                    // alignItems: 'center',
                },


            },

        },

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

        "& .designation-section": {
            padding: '10px 20px 0 20px',

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

        "& .show-moreSection": {
            padding: 3,
            margin: '9px 0',
            "& .showMore-items":{
                padding:'0 10px',
                "& p":{
                    textTransform: 'capitalize',
                    fontSize:'13px',
                    "& span":{
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

    const ShowMoreContents = () => {
        return (
            <div className='showMore-items'>
                <p>
                    {e.institute1_name} {e.degree1_name},
                    {e.institute2_name} {e.degree2_name},
                    {e.institute3_name} {e.degree3_name},
                </p>
                <p>area of expertise : {e.area_of_expertise}</p>
                <p><span>number of individual sessions :</span>{e.number_of_individual_sessions}</p>
                <p> <span>number of webinar sessions :</span>{e.number_of_webinar_sessions}</p>
                <p><span>licenses and certification :</span>{e.licenses_and_certification}</p>
                <p><span>approach to counselling:</span>{e.approach_to_counselling}</p>
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
                            <p className="name">{e?.name}, <span className='exp'>{e?.year_of_experience}+ years exp.</span></p>
                            <div className="designation">
                                <p><span><EmailIcon /></span>{e?.email}</p>
                                <p><span><RecordVoiceOverIcon /></span> <strong>language:</strong> {e?.language}</p>
                                <p><span><SchoolIcon /></span> <strong>Degree:</strong> {e?.degree1_name}, {e?.degree3_name}, {e?.degree3_name}</p>
                            </div>
                            {/* <p className="exp">+ years of experience</p> */}
                            {/* <p className="exp">Languages: {e?.language}</p> */}
                        </div>
                    </div>
                    {/* <div className='designation-section'>
                        <div className="designation">
                            <p><span><SchoolIcon /></span> <strong>Degree:</strong> {e?.language}, {e?.degree3_name}, {e?.degree3_name}</p>
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
                                        <ShowMoreContents />
                                    </div>
                                </>
                            }
                        </div>
                        
                    </div> */}
                    <div className='designation-section price-section'>
                        <div className="designation">
                            <p><span><LocalOfferIcon /></span> <strong>Individual session price:</strong>₹ {e?.individual_session_price}</p>
                        </div>
                        <div className='designation'>
                            <p> <span><LocalOfferIcon /></span><strong>Webinar session</strong>₹  {e?.webinar_session_price}
                            </p>
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
