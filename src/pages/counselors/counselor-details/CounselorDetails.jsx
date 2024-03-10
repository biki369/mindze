import { Avatar, Container, Grid, Paper, Typography, makeStyles } from "@material-ui/core"
import { Link, useParams } from "react-router-dom";
import { counselorsData } from '../../../data/index'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import ForumIcon from '@material-ui/icons/Forum';
import CallIcon from '@material-ui/icons/Call';

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


  }
}))
const CounselorDetails = () => {

  let { id } = useParams();

  let data = counselorsData.find((counslr) => counslr.id === Number(id))
  const { name, desc, img, exp, interest, education } = data;

  // console.log(name,"slkadj",id)

  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Container>
        <div className="profile-content">
          <div className="top"><h3><span><Link to={"/"}>  <HomeIcon /></Link></span>{name}'s profile</h3></div>
          <Paper>
            <div className="profile">
              <div className="profile-img">
                <img src={img} alt="" />
              </div>
              <div className="profile-info">
                <div className="">
                  <h3>{name}</h3>
                  <p><strong>interest:</strong>{interest}</p>
                  <p><strong>Exp:</strong>{exp}+ years</p>
                  <p className="edu"><span><SchoolIcon /></span>{exp}+ years</p>
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
            <Paper>
                
            </Paper>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default CounselorDetails
