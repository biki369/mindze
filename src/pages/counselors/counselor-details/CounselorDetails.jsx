import { Avatar, Container, Grid, LinearProgress, Paper, Typography, makeStyles } from "@material-ui/core"
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
            width: 260,
            height: 60,
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
      gap: 10,
      "& > div": {
        width: '50%',
        padding: 6,
        [theme.breakpoints.down(600)]: {
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




  }
}))
const CounselorDetails = () => {

  let { id } = useParams();

  let data = counselorsData.find((counslr) => counslr.id === Number(id))
  const { name, desc, img, exp, interest, education, designation } = data;

  // console.log(name,"slkadj",id)

  const classes = useStyles()

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

                  <div className="profile-btn">
                    <button><span> <ForumIcon /></span>start chart</button>
                    <button><span><CallIcon /> </span>start call</button>
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
      </Container>
    </div>
  )
}
export default CounselorDetails
