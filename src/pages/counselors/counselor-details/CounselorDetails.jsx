import { Avatar, Button, Container, Paper, TextField, makeStyles } from "@material-ui/core"
import { Link, useParams } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
// import SchoolIcon from '@material-ui/icons/School';
import Rating from '@material-ui/lab/Rating';
// import StarsIcon from '@material-ui/icons/Stars';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
// import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useEffect, useState } from "react";
import Loader from "../../../components/loader/Loader";
import { consultantDetails, consultantReview, giveReview } from "../../../api";
import Swal from "sweetalert2";
import BookingSlot from "../../../components/booking-slots/BookingSlot";
// import BackCurrent from "../../../components/back-current/BackCurrent";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 10px",
    [theme.breakpoints.down('xs')]: {
      padding: "30px 0",
    },

    width: "100%",


    "& .top": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "13px 0",
      "& h3": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        fontSize: "1rem",
        "& a": {
          "& svg": {
            // width: 16,
            // height: 16,
            // borderRadius: "50%",
            backgroundColor: "#eee",
            // boxShadow: "0 0 0 2px #00b894",
            color: "#00b894"
          }
        }
      }
    },

    "& .profileInfo-container": {
      padding: "10px 30px 16px 16px",
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    "& .profile-content":
      { display: 'flex', flexDirection: 'column', gap: 10, },
    "& .profile": {
      display: 'flex',
      gap: 20,
      padding: 13,
      flexWrap: 'wrap',
      marginBottom: 10,
      justifyContent: 'space-between',
      "& .p-left": {
        "& .p-left_info": {
          width: 430,
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        },
        display: 'flex',
        gap: 30,
        flexWrap: 'wrap',

      },
      [theme.breakpoints.down(600)]: {
        padding: '1.3rem'
      },
      "& .info": {
        "& p": { textTransform: 'capitalize', margin: '9px 0' },
        "& .name": {
          fontSize: "1.5rem",
          fontWeight: 500,
          marginBottom: 10,
          color: theme.palette.primary.main,
        },
        "& span": {
          color: theme.palette.primary.main
        },
        "& .info_more": {
          marginTop: '10px',
          "& p": {
            margin: 0,
          }
        }
      },

      "& .ed-ppr": {
        width: '33%',
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        borderTop: `10px solid ${theme.palette.primary.main}`,

        padding: 10,
        "& .eduction": {
          // background:'#808080',
          "& .info": {
            padding: 20,
          },
          padding: 20,
          "& .title": {
            fontSize: "1.5rem",
            fontWeight: 500,
            // marginBottom:'1rem',
            color: theme.palette.primary.main,
          },
          "& ul": {
            paddingLeft: 20,
            listStyle: 'square',
            marginLeft: '1rem'
          }

        }
      },
    },

    "& .profile-bottom": {
      "& .profile-bottom_content": {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        padding: "10px 20px",
        "& .info": {
          fontSize: "14px",
          "& p": {
            textTransform: 'capitalize'
          },
          "& .price": {
            color: theme.palette.primary.main
          }
        }
      }
    },
    "& .review-section": {
      display: 'flex',
      [theme.breakpoints.down(700)]: {
        flexWrap: 'wrap',
        // width: "100%",
      },
      gap: 10,
      "& > div": {
        width: '50%',
        padding: 6,
        [theme.breakpoints.down(700)]: {
          padding: 0,
          width: "100%",
        },
      },

      "& .review-ratings": {
        padding: '13px 10px',
        "& .review": {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          padding: '10px 20px',
          flexWrap: 'wrap',
          "& .review-stars": {
            padding: 30,
            [theme.breakpoints.down(600)]: {
              width: '100%',
            },
            "& h5": {
              fontSize: "3rem",
              fontWeight: 400,
              paddingLeft: 10,
            }
          },
          "& .review-bar": {
            width: '60%',
            [theme.breakpoints.down(600)]: {
              width: '100%',
            },
            "& .bar": {
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              margin: "10px 0",
              "& .bar-number": {
                fontSize: 20,
                fontWeight: 500,
              },
              "& .d-bar": {
                width: '100%',
              },
              "& .MuiLinearProgress-root": {
                height: 13,
                borderRadius: 30,
              }
            },

          }
        }
      },

      "& .other-rating": {
        padding: "20px 16px",
        "& h4": {
          fontSize: "1rem",
          fontWeight: 400,
        },
        "& .user-rating": {
          marginTop: 13,
          padding: "10px 16px",
          "& > div": {
            margin: '9px 0'
          },
          "& .user-name": {
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            "& h5": {
              fontSize: "1rem",
              fontWeight: 600,
            },
          }
        }
      },


    },

    "& .write-review": {
      width: '100%',
      "& .write-review-form": {
        width: '100%',
        padding: '10px 16px',
        // "& button":{
        //   float:'right'
        // }
      }
    },
  },
  counslrAvatar: {
    width: 230,
    // height: "100%",
    height: 230,
  },
  bookingPlans: {
    padding: "30px 20px",
    "& .plans_container": {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '2.3rem',
      "& .plans": {
        position: 'relative',
      },
      "& .plan": {
        height: 400,
        width: 300,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
        // width: '33%',
        padding: 30,
        textAlign: 'center',
        borderTop: `3px solid ${theme.palette.primary.main}`,
        "& .plan-icon": {
          "& svg": {
            fontSize: 50,
            color: theme.palette.primary.main
          },
          margin: '10px 0'
        },
        "& .plan_session": {
          fontSize: "1.5rem",
          fontWeight: 500,
          color: theme.palette.primary.main
        },
        "& .plan_price": {
          fontSize: "1.5rem",
          fontWeight: 500,
          // color: theme.palette.primary.main
        },
        "& .plan_per-session": {
          fontSize: "1.03rem",
        },
        "& .plan_duration": {
          fontSize: "1.3rem",
          margin: '6px 0'
        },
        "& .plan_access": {
          fontSize: "1.53rem",
        },
        "& .desc": {
          fontSize: '13px',
          [theme.breakpoints.down('xs')]: {
            fontSize: '9px',
          },
          margin: '10px 0',
          color: "#b55109",
          fontWeight: 500
        }

      },
      "& .bookedPlans_btn": {
        position: 'absolute',
        bottom: -10,
        left: "50%",
        transform: "translate(-50%)",
        "& button": {
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          width: '160px',
          padding: '10px 20px',
          borderRadius: "30px",
          // "& :hover":{
          //   backgroundColor:theme.palette.primary.main  ,
          // }
        }
      }
    }
  }

}))
const CounselorDetails = () => {


  const classes = useStyles()
  // const {pathname} = useLocation()
  let { id } = useParams();
  const [reviewData, setReviewData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [writeReview, setWriteReview] = useState();


  const bookingPlansData = [
    {
      session: "1 session",
      icon: <PersonIcon />,
      price: data?.individual_session_price,
      perSession: data?.individual_session_price,
      duration: "45",
      access: "1 week",
      // discount: 10
    },
    {
      session: "4 sessions",
      price: data?.individual_session_price * 4,
      icon: <PeopleIcon />,
      perSession: Number(data?.individual_session_price) - (Number(data?.individual_session_price) * 10) / 100,
      duration: "45",
      access: "4 weeks",
      discount: "10 % Discount",
      desc: "Fetch you first slot and later discuss with counselor"

    },
    {
      session: "10 sessions",
      price: data?.individual_session_price * 10,
      perSession: Number(data?.individual_session_price) - (Number(data?.individual_session_price) * 15) / 100,
      icon: <GroupAddIcon />,
      duration: "45",
      access: "10 weeks",
      discount: `15 % Discount`,
      desc: "Fetch you first slot and later discuss with counselor"

    },
  ]

  // console.log(bookingPlansData[1]);

  const handleOpenModal = (evn, e) => {
    if (localStorage.getItem("token") !== null) {
      setOpenModal(true);
      // setItem(e);
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
  const submitReview = (e) => {
    e.preventDefault();
    if (writeReview === "") {
      return (
        Swal.fire({
          icon: "error",
          title: `Please write review.`,
          showConfirmButton: false,
          timer: 1500
        })
      )
    }

    if (localStorage.getItem("token") === null) {
      Swal.fire({
        icon: 'warning',
        showCancelButton: true,
        title: `Please login to give Review.`,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to login page',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("/login");
        }
      })
    } else {
      giveReview("api/review",
        {
          consultant: id,
          review: writeReview
        },
        localStorage.getItem("token")
      ).then((data) => {
        if (data) {
          setIsLoading(false)
          reviewDataOnLoad();
        }
      }).catch((err) => {
        setIsLoading(true)
      })
    }
    setWriteReview("")

  };
  useEffect(() => {
    consultantDetails("api/consultant", id).then((data) => {
      setIsLoading(false)
      setData(data)
    }).catch((err) => {
      setIsLoading(false)
      // console.log(err);
    })
  }, [isLoading]);

  const reviewDataOnLoad = () => {
    consultantReview(`api/consultants/${id}/reviews`).then((data) => {
      setIsLoading(false)
      setReviewData(data)
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    reviewDataOnLoad();
  }, [isLoading]);

  // console.log(data?.approach_to_counselling);
  return (
    <div className={classes.root}>
      {data !== null ? <Container>
        <div className="profile-content">
          <div className="top">
            <h3><span><Link to={data.is_spiritual ? "/spiritualHealers" : "/psychologicalCounselors"}>  <HomeIcon /></Link></span>{data?.name}'s profile</h3>
            {/* <BackCurrent  link={data?.is_spiritual?"/spiritualCounselors":"/philosophicalCounselors"} name={data?.is_spiritual?"Spiritual Counselors":"Philosophical Counselors"}  /> */}
          </div>
          <Paper className="profileInfo-container">
            <div className="profile">
              <div className="p-left">
                <div className="profile-img">
                  <Avatar alt="counselor-img" variant="rounded" src={data.img} className={classes.counslrAvatar} />
                  {/* <img src={data?.img || "" } alt="404" /> */}
                </div>
                <div className="info p-left_info">
                  <p className="name">{data?.name}</p>
                  <p>{data?.year_of_experience}+ year of experience</p>
                  <p> <span>Area of expertise:</span> {data?.area_of_expertise}</p>
                  <p><span>Languages:</span> {data?.language}</p>

                  <div className="info_more">
                    {/* <p>Individual sessions taken: {data?.number_of_individual_sessions}</p>
                    <p> Webinar sessions taken: {data?.number_of_webinar_sessions}</p> */}
                    <p> Individual sessions price:<span className="price"> {data?.individual_session_price} ₹</span></p>
                    <p> Webinar sessions price:<span className="price"> {data?.webinar_session_price} ₹</span></p>
                  </div>
                </div>
              </div>

              <Paper className="ed-ppr">
                <div className="eduction">
                  <p className="title">Education</p>
                  <ul>
                    {data?.degree1_name != "" && <li>{data?.degree1_name}, {data?.institute1_name}</li>}
                    {data?.degree2_name != "" && <li>{data?.degree2_name}, {data?.institute2_name}</li>}
                    {data?.degree3_name != "" && <li>{data?.degree3_name} ,{data?.institute3_name}</li>}
                  </ul>
                </div>
                <div className="info ">
                  <p><span> approach to counselling: </span>{data?.approach_to_counselling}</p>
                  {
                    data.licenses_and_certification != "" && <p><span>licenses and certification: </span>{data?.licenses_and_certification}</p>
                  }
                  {/* <p><span>licenses and certification: </span>{data?.licenses_and_certification}</p> */}
                </div>
              </Paper>
            </div>

            {/* <div className="profile-bottom">
              <div className="profile-bottom_content">
                <div className="info">
                  <p>Individual sessions taken: {data?.number_of_individual_sessions}</p>
                  <p> Webinar sessions taken: {data?.number_of_webinar_sessions}</p>
                  <p> Individual sessions price:<span className="price">{data?.individual_session_price} ₹</span></p>
                  <p> Webinar sessions price:<span className="price">{data?.webinar_session_price} ₹</span></p>
                </div>
                <div className="info">
                  <p>approach to counselling: {data?.approach_to_counselling}</p>
                  <p> licenses and certification: {data?.licenses_and_certification}</p>
                </div>
              </div>
            </div> */}

            <div className={classes.bookingPlans}>
              <div className="plans_container">
                {
                  bookingPlansData.map((e, i) => (
                    <>
                      <div key={i} className="plans">
                        <Paper elevation={3}>
                          <div className="plan">
                            <div className="plan-icon">
                              <span>{e.icon}</span>
                            </div>
                            <p className="plan_session">{e.session}</p>
                            <p className="plan_price">₹ {e.price}</p>
                            <p className="plan_per-session">Price per session: ₹ {e.perSession}</p>
                            <p className="plan_duration">{e.duration} minutes</p>
                            <p className="plan_access">{e.access}</p>
                            <p className="plan_discount">{e.discount}</p>
                            <p className="desc">{e?.desc}</p>
                          </div>
                        </Paper>
                        <div className="bookedPlans_btn">
                          <Button variant="contained" color="primary"
                          // onClick={() => handleOpenModal(true)}
                          >
                            <Link to={`https://wa.me/919506126365?text=Hi, I want to book a session with ${data?.name}`} target='_bank'>
                              Book
                            </Link>
                            {/* Book */}
                          </Button>
                        </div>
                      </div>
                    </>
                  ))
                }

              </div>


            </div>

          </Paper>
          <div className="review-section">
            <div>
              <Paper>
                <div className="review-ratings">
                  <h4>Ratings & Reviews</h4>
                  <div className="review">
                    {/* <div className="review-stars">
                      <h5>{data?.rating}.0</h5>
                      <Rating name="read-only" value={data?.rating} readOnly />
                    </div> */}
                    {/* <div className="review-bar">
                      <div className="bar">
                        <div className="bar-number">5</div>
                        <div className="d-bar"><LinearProgress color="primary" variant="determinate" value={86} /></div>
                      </div>
                      <div className="bar">
                        <div className="bar-number">3</div>
                        <div className="d-bar"><LinearProgress color="primary" variant="determinate" value={66} /></div>
                      </div>
                      <div className="bar">
                        <div className="bar-number">2</div>
                        <div className="d-bar"><LinearProgress color="primary" variant="determinate" value={46} /></div>
                      </div>
                      <div className="bar">
                        <div className="bar-number">1</div>
                        <div className="d-bar"><LinearProgress color="secondary" variant="determinate" value={16} /></div>
                      </div>

                    </div> */}
                  </div>
                  <div className="write-review">
                    {/* <h4>Write a review</h4> */}
                    <div className="write-review-form">
                      <form onSubmit={(e) => submitReview(e)} autoComplete="off">
                        <TextField
                          variant="outlined"
                          label="Write your review"
                          type="text"
                          required
                          value={writeReview}
                          style={{ width: '100%', marginBottom: "10px" }}
                          onChange={(e) => setWriteReview(e.target.value)}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >Submit</Button>
                      </form>
                    </div>

                  </div>
                </div>
              </Paper>
            </div>

            <div className="">
              <Paper className="other-rating">
                <h4>User Reviews</h4>
                {
                  reviewData ? <>
                    {
                      reviewData.map((e, i) => (
                        <Paper className="user-rating" key={i} elevation={3} >
                          <div className="user-name"><Avatar src={e?.avatar} /><h5>{e?.username}</h5></div>
                          {/* <div><Rating name="read-only" value={e.rating} readOnly /></div> */}
                          <div><p>{e?.date}</p></div>
                          <div><p>{e?.review}</p></div>
                        </Paper>
                      ))
                    }

                  </> : <>
                    <Loader />
                  </>
                }
              </Paper>
            </div>
          </div>
        </div>
        <BookingSlot openModal={openModal} setOpenModal={setOpenModal} item={data} />
      </Container> : <Loader />}
    </div>
  )
}
export default CounselorDetails
