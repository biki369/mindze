import { Avatar, Button, Container, Grid, LinearProgress, Paper, Typography, makeStyles } from "@material-ui/core"
import { Link, useParams } from "react-router-dom";
import { counselorsData, userRating } from '../../../data/index'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ForumIcon from '@material-ui/icons/Forum';
import CallIcon from '@material-ui/icons/Call';
import Rating from '@material-ui/lab/Rating';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from "react";
import MuiModal from "../../../components/modal/MuiModal";
import DatePicker from "../../../components/mui-date-picker/DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 10px",
    "& .top": {
      width: "fit-content",
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
      { display: 'flex', flexDirection: 'column', gap: 10 },
    "& .profile": {
      display: 'flex',
      gap: 20,
      padding: 13,
      flexWrap: 'wrap',
      [theme.breakpoints.down(600)]: {
        // width: "100%",
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
          "& .review-stars": {
            padding: 30,
            "& h5": {
              fontSize: "3rem",
              fontWeight: 400,
              paddingLeft: 10,
            }
          },
          "& .review-bar": {
            width: '60%',
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

  },

  plans: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '1rem',
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
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
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
        //   justifyContent:'center',
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

  let { id } = useParams();

  let data = counselorsData.find((counslr) => counslr.id === Number(id))
  const { name, desc, img, exp, interest, education, designation, price } = data;

  // console.log(name,"slkadj",id)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const todayDate = new Date();

  const [date, setDate] = useState(todayDate)

  const [selectedDate, setSelectedDate] = useState();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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




  return (
    <div className={classes.root} >
      <Container>
        <div className="profile-content">
          <div className="top"><h3><span><Link to={"/"}>  <HomeIcon /></Link></span>{name}'s profile</h3></div>
          <Paper >
            <div className="profile">
              <div className="profile-img">
                <img src={img} alt="" />
              </div>
              <div className="profile-info">
                <div className="profile-info-top">
                  <h3>{name}</h3>
                  <p> <span><StarsIcon /></span> <strong>interest:</strong>{interest}</p>
                  <p><span><EmojiEventsIcon /></span> <strong>Exp:</strong>{exp}+ years</p>
                  <p className="edu"><span><SchoolIcon /></span>{education}</p>
                  <p className="designation"><span><CheckCircleIcon /></span><strong>designation:</strong>{designation}</p>
                  <p className="price"> <span><LocalOfferIcon /></span> <strong>Annual price:</strong> {price.annual}</p>
                  <p className='price'><span><LocalOfferIcon /></span><strong>Monthly price</strong>{price.monthly}</p>

                  <div className="profile-btn">
                    <button  onClick={handleOpenModal}>Book now</button>
                    {/* <button><span> <ForumIcon /></span>start chart</button> */}
                    {/* <button><span><CallIcon /> </span>start call</button> */}
                  </div>
                </div>
                <div className="info-about">
                  <h4>About Me</h4>
                  <p>{desc}</p>
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
                      <div className="bar">
                        <div className="bar-number">1</div>
                        <div className="d-bar"><LinearProgress color="secondary" variant="determinate" value={26} /></div>
                      </div>

                    </div>
                  </div>
                </div>
              </Paper>
            </div>

            <div className="">
              <Paper className="other-rating">
                <h4>User Ratings</h4>
                {
                  userRating.map((e, i) => (
                    <Paper className="user-rating" key={i} elevation={3} >
                      <div className="user-name"><Avatar src={e.avatar} /><h5>{e.name}</h5></div>
                      <div><Rating name="read-only" value={e.rating} readOnly /></div>
                      <div><p>{e.comment}</p></div>
                    </Paper>
                  ))
                }
              </Paper>
            </div>
          </div>
        </div>



        <div className={classes.modalContainer}>
          <MuiModal open={openModal} onClose={handleCloseModal} title="Book an Appointment">
            {/* <DatePicker selectedDate={selectedDate} onChange={handleDateChange} /> */}
            <div className={classes.plans}>
              <div className="plan">
                <CheckboxComp options={['monthly']} />
                <p className="plan-name">Monthly</p>
                <p className="discount"><span><CheckIcon /></span>10% discount</p>
                <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {price.monthly}</p>
              </div>
              <div className="plan">
                <CheckboxComp options={['annual']} />
                <p className="plan-name">Annual</p>
                <p className="discount"><span><CheckIcon /></span>20% discount</p>
                <p className="plan-price"> <span><LocalOfferIcon /></span> ₹ {price.annual}</p>
              </div>
            </div>

            <div className='booked-session-btn'
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "1rem" }}

            >
              <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
              <Button onClick={handleCloseModal} variant="contained" color="primary">Book</Button>
            </div>
          </MuiModal>
        </div>






      </Container>
    </div>
  )
}
export default CounselorDetails
