import { Avatar, Button, Container, LinearProgress, Paper, TextField, makeStyles } from "@material-ui/core"
import { Link, useLocation, useParams } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import Rating from '@material-ui/lab/Rating';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckIcon from '@material-ui/icons/Check';
import { useEffect, useState } from "react";
import MuiModal from "../../../components/modal/MuiModal";
import Loader from "../../../components/loader/Loader";
import { consultantDetails, consultantReview, get_time_slots, giveReview } from "../../../api";
// import MessageIcon from '@material-ui/icons/Message';
import BackCurrent from "../../../components/back-current/BackCurrent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 10px",
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
    "& .profile-content":
      { display: 'flex', flexDirection: 'column', gap: 10, },
    "& .profile": {
      display: 'flex',
      gap: 20,
      padding: 13,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down(600)]: {
        padding: '1.3rem'
      },

      "& .profile-img": {
        // width:'80%',
        width: 260,
        // hight:300,
        // borderRadius:'50%',
        "& img": {
          width: '100%',
          borderRadius: '50%',
          height: 260,
          // objectFit:'cover',
        },
      },
      "& .profile-info": {
        width: '60%',
        [theme.breakpoints.down(600)]: {
          width: "100%",
        },
        "& .profile-info-top": {
          "& > p": {
            display: 'flex',
            //  justifyContent:'center',
            alignItems: 'center',
            "& svg": {
              color: theme.palette.primary.main
            }
          }
        },
        "& p": {
          display: "flex",
          gap: 13,
          margin: '10px 0',
          // justifyContent: 'center',
          alignItems: "center"
        },

        "& .info-about": {
          "& h4": {
            textAlign: 'center',
            textTransform: 'capitalize',
            margin: '10px 0',
            fontSize: 16,
          },
          "& p": {
            fontSize: 14,
            lineHeight: 1.5,
            fontWeight: 500,
          }
        },
        "& .profile-btn": {
          // width:'60%',
          display: "flex",
          marginTop: 16,
          marginBottom: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          "& button": {
            // width: 260,
            height: 40,
            borderRadius: 30,
            display: "flex",
            justifyContent: 'space-between',
            padding: "0 30px",
            alignItems: 'center',
            border: "none",
            cursor: 'pointer',
            fontSize: 16,
            textTransform: 'capitalize',
            boxShadow: "0 0 6px #000",
            color: "#00b894",
            "&:hover": {
              backgroundColor: "#00b894",
              color: "#fff",
            }

          }
        },
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
          fontSize: "1.3rem",
          fontWeight: 800,
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
    }

  },

  plans: {
    display: "flex",
    flexWrap: 'wrap',
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '1rem',
    // [theme.breakpoints.down(500)]: {
    //   display: 'block'
    // },
    "& .plan": {
      width: '230px',
      cursor: 'pointer',
      background: "#eee",
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
}))

const CounselorDetails = () => {
  const classes = useStyles()

  // const {pathname} = useLocation()

  let { id } = useParams();

  const [reviewData, setReviewData] = useState();
  const todayDate = new Date();
  const [date, setDate] = useState(todayDate)

  const [openModal, setOpenModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const [writeReview, setWriteReview] = useState();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleWriteReview = (e) => {
    e.preventDefault();
    giveReview("api/review",
      {
        consultant: id,
        review: writeReview
      },
      localStorage.getItem("token")
    ).then((data) => {
      // console.log(data, "data")
      setIsLoading(false)
      // setReviewData(data)
    }).catch((err) => {
      console.log(err);
      setIsLoading(true)
    })

  };

  const bookSession = () => {
    setOpenModal(false);
    const parameters = {
      consultant: data?.id,
      date: date
    }
    console.log(parameters)
    get_time_slots("api/get_time_slots", parameters).then((data) => console.log(data)).catch((e) => Swal.fire({
      icon: "error",
      title: `Consultant ID and date are required.`,
      showConfirmButton: false,
      timer: 1500
    }))
  };


  // ====== function fro check====
  const CheckboxComp = ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
      const { value } = event.target;

      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    };

    return (
      <div>
        {options.map((option) => (
          <>
            <input
              type="checkbox"
              key={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleChange}
            />
            {/* {option} */}
          </>
        ))}
      </div>
    );
  };

  const BookingSessionComp = ({ consultant }) => {
    // console.log(uid "consltId");
    return (
      <div className={classes.modalContainer}>
        <MuiModal open={openModal} onClose={handleCloseModal} title="Book an Appointment">
          {/* <DatePicker selectedDate={selectedDate} onChange={handleDateChange} /> */}
          <div className={classes.plans}>
            <div className="plan">
              <CheckboxComp options={['individual']} />
              <p className="plan-name">Individual session</p>
              <p className="discount"><span><CheckIcon /></span>10% - discount </p>
              <p className="discount"><span><CheckIcon /></span>1 session price: </p>
              <p className="discount"><span><CheckIcon /></span>5 session price:</p>
              <p className="validity"><span><CheckIcon /></span>Validity : 2 months </p>
              <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {consultant?.price?.monthly}</p>
            </div>
            <div className="plan">
              <CheckboxComp options={['webinar']} />
              <p className="plan-name">Webinar session</p>
              <p className="discount"><span><CheckIcon /></span>10% - discount </p>
              <p className="discount"><span><CheckIcon /></span>10 session price: </p>
              <p className="discount"><span><CheckIcon /></span>5 session price:</p>
              <p className="validity"><span><CheckIcon /></span>Validity : 4 months </p>
              <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {consultant?.price?.annual}</p>
            </div>
          </div>

          <div className='booked-session-btn'
            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "1rem" }}

          >
            {/* <DatePicker selectedDate={selectedDate} onChange={handleDateChange} /> */}
            <input type="date" value={date} onChange={(event) => handleDateChange(event)} />
            <Button variant="contained" onClick={bookSession} color="primary">Book</Button>
          </div>
        </MuiModal>
      </div>
    )
  };

  useEffect(() => {
    consultantDetails("api/consultant", id).then((data) => {
      setIsLoading(false)
      setData(data)
    }).catch((err) => {
      // setIsLoading(false)
      console.log(err);
    })
    setIsLoading(true)
  }, []);

  useEffect(() => {
    consultantReview(`api/consultants/${id}/reviews`).then((data) =>
      setReviewData(data),
      setIsLoading(true)
    )
    setIsLoading(false)
  }, [isLoading,]);




  return (
    <div className={classes.root}>
      {!isLoading ? <Container>
        <div className="profile-content">
          <div className="top">
            <h3><span><Link to={"/"}>  <HomeIcon /></Link></span>{data?.name}'s profile</h3>
              {/* <BackCurrent link={"/spiritualCounselors"} name={"spiritual Counselors"} /> */}
          </div>
          <Paper >
            <div className="profile">
              <div className="profile-img">
                <img src={data?.img} alt="404" />
              </div>
              <div className="profile-info">
                <div className="profile-info-top">
                  <h3>{data?.name}</h3>
                  <p> <span><StarsIcon /></span> <strong>interest:</strong>{data?.interest}</p>
                  <p><span><EmojiEventsIcon /></span> <strong>Exp:</strong>{data?.exp}+ years</p>
                  <p className="edu"><span><SchoolIcon /></span>{data?.education}</p>
                  <p className="designation"><span><CheckCircleIcon /></span><strong>designation:</strong>{data?.designation}</p>
                  <p className="price"> <span><LocalOfferIcon /></span> <strong>Annual price:</strong> {data?.price?.annual}</p>
                  <p className='price'><span><LocalOfferIcon /></span><strong>Monthly price</strong>{data?.price?.monthly}</p>
                  <div className="profile-btn">
                    <button onClick={handleOpenModal}>Book now</button>
                  </div>
                </div>
                <div className="info-about">
                  <h4>About Me</h4>
                  <p>{data?.full_description}</p>
                </div>
              </div>
            </div>
          </Paper>

          <div className="review-section">
            <div>
              <Paper>
                <div className="review-ratings">
                  <h4>Ratings & Reviews</h4>
                  <div className="review">
                    <div className="review-stars">
                      <h5>4.8</h5>
                      <Rating name="read-only" value={4} readOnly />
                    </div>
                    <div className="review-bar">
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


                    </div>
                  </div>
                  <div className="write-review">
                    {/* <h4>Write a review</h4> */}
                    <div className="write-review-form">
                      <form noValidate autoComplete="off" onSubmit={handleWriteReview}>
                        <TextField
                          variant="outlined"
                          label="Write your review"
                          // variant="filled"
                          // variant="outlined"
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
                <h4>User Ratings</h4>
                {
                  reviewData?.map((e, i) => (
                    <Paper className="user-rating" key={i} elevation={3} >
                      <div className="user-name"><Avatar src={e?.avatar} /><h5>{e?.username}</h5></div>
                      {/* <div><Rating name="read-only" value={e.rating} readOnly /></div> */}
                      <div><p>{e?.date}</p></div>
                      <div><p>{e?.review}</p></div>
                    </Paper>
                  ))
                }
              </Paper>
            </div>
          </div>
        </div>
        <BookingSessionComp consultant={data} />

      </Container> : <Loader />}
    </div>
  )
}
export default CounselorDetails
