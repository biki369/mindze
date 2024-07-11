import { Box, Button, Grid, Typography, makeStyles, } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { heroSliderImg } from '../../data';
import NoCounselors from '../../components/NoCounselors/NoCounselors';
import ServiceSlider from '../../components/sliders/serice-sldier/ServiceSlider';
import { Link, useOutletContext } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "10px 0",
    "& .heroImgBox": {
      position: "relative",
      width: "100vw",
      height: "96vh",
      [theme.breakpoints.down(760)]: {
        height: "43vh",
      },
      "& img": {
        width: '100%',
        height: "100%",
        // objectFit: "cover",
        filter: "brightness(0.66)",
        zIndex: 1,
        [theme.breakpoints.down(600)]: {
          height: "100%",
        },
      },
      "& .sliderText": {
        position: "absolute",
        zIndex: 99,
        top: '30%',
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontFamily: 'Poppins',
        fontWeight: 200,
        // fontFamily: "Grape Nuts, cursive",
        color: "#fff",
        fontSize: '60px',
        [theme.breakpoints.down("md")]: {
          fontSize: '30px',
          // top: '40%',
          textAlign: "center",
          // left: "10%",
        },
      }
    },
    //==== about us===========
    "& .about-section": {
      display: "flex",
      [theme.breakpoints.down(800)]: {
        width: "100%",
        flexWrap: 'wrap',
      },
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      padding: '2rem 3.3rem',
      // [theme.breakpoints.down(600)]: {
      //   padding: '13px',
      // },
      "& > div": {
        width: '50%',
        [theme.breakpoints.down(800)]: {
          width: "100%",
        },
      },
      "& .about-img": {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        "& img": {
          width: '530px',
          height: '430px',
          marginTop: '1rem',
          // borderRadius: '30px',
          [theme.breakpoints.down('md')]: {
            width: '360px',
          },
          // height:'300px'
        }
      },
      "& .about-us": {
        padding: '0 6rem',
        [theme.breakpoints.down("md")]: {
          padding: '0 10px',
        },
        "& p": {
          fontSize: '1.2rem',
          // [theme.breakpoints.down(800)]: {
          //   fontSize: '1rem',
          // },
        },
        "& h1": {
          display: "inline-block",
          marginBottom: '1rem',
          fontSize: '3rem',
          outlineOffset: "-2px",
          borderBottom: '3px solid #000'
        }
      }
    },

    // ==== Review section style=====
    "& .review-section": {
      "& h1": {
        textAlign: 'center',
        fontSize: "3rem"
      },

      position: 'relative',
      width: "100%",
      overflow: "hidden",
      "& .reviews": {
        display: 'flex',
        maxWidth: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
        gap: "13px",
        "& > div": {
          width: '50%',
          [theme.breakpoints.down(600)]: {
            width: "100%",
          },
          "& .swiper_container": {
            height: "33rem",
          },
          "& .swiper-slide": {
            width: '23rem',
            height: '16rem',
            padding: '0 1rem',
            "& img": {
              borderRadius: 0,
              padding: '0.6rem',
              // objectFit:'contain'
            }
          },
          "& .heading": {
            padding: '0.5rem 0',
            fontSize: '1.3rem',
            [theme.breakpoints.down(769)]: {
              fontSize: '2rem',
            },
          }
        }
      }
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  const [spiritualData, psychologicalData] = useOutletContext();

  const shortExpSpiritualData = spiritualData?.filter((e) => e.year_of_experience >= 8)
  const shortExpPsychologicalData = psychologicalData?.filter((e) => e.year_of_experience >= 8)


  return (
    <div className={classes.root}>
      <div className="hero">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 6360,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          // slidesPerView={1}
          modules={[Pagination, Navigation, Scrollbar, Autoplay]}
          navigation
          pagination={{ clickable: true }}
        >
          {
            heroSliderImg.map((e, i) => (
              <SwiperSlide key={i}>
                <Box className='heroImgBox' >
                  <img src={e.img} alt="slider" className='heroImg' />
                  <Typography className='sliderText'>{e.text}</Typography>
                </Box>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div className="about-section">
        <div className='about-us'>
          <h1>About us</h1>
          <p>Mindze blends psychological insight, philosophical depth, and spiritual wellness to guide you through life's challenges. Our team believes in integrating these dimensions for healing, growth, and transformation.</p>
        </div>
        <div className="about-img">
          <img src="about-us.jpg" alt="" />
        </div>
      </div>


      {/* multi slider  */}
      <div >

        {psychologicalData &&
          <ServiceSlider text={"Spiritual Healers"} data={shortExpSpiritualData}
            linkTo={"/spiritualHealers"}
          />
        }
        {/* <NoCounselors text="Psychological Councellors" h/> */}
      </div>
      <div >
        {spiritualData &&
          <ServiceSlider text={"Psychological Counselors"} data={shortExpPsychologicalData}
            linkTo={"/psychologicalCounselors"}
          />
        }
        {/* <NoCounselors text={"Spiritual Councellors"} h /> */}
      </div>

      {/* <div className="review-section">
        <h1>What People Say About</h1>
        <NoCounselors text={"People Say About"} yes />
        <div className="reviews">
          <div >
            <ServiceSlider text={"Individual Reviews"} data={reviewData} />
          </div>
          <div >
            <ServiceSlider text={"Organisation Reviews"} data={reviewData} />
          </div>
        </div>
      </div> */}

      <div className="trustedBy-section">
        <div >
          {/* <NoCounselors text={"Trusted by"} yes /> */}
          {/* <ServiceSlider text={"Trusted by"} trustbyData={reviewData} /> */}
        </div>
      </div>

    </div>
  )
}

export default Home
