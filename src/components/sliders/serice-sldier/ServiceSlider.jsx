import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './style.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {

    "& .container": {
      width: '100%',
      // width:'124rem',
      padding: "2rem 1rem",
      margin: "2rem auto"
    },

    "& .heading": {
      padding: " 1rem 0",
      fontSize: " 3rem",
      textAlign: "center",
      [theme.breakpoints.down(600)]: {
        fontSize: " 2rem",
      },
    },

    "& .swiper_container": {
      // height:" 52rem",
      height: '80vh',
      [theme.breakpoints.down(769)]: {
        height: '66vh',
      },
      padding: "2rem 0",
      position: " relative",

    },
    "& .swiper-slide-shadow-left": {
      display: "none",
    },

    "& .swiper-slide": {
      width: " 23rem",
      height: " 23rem",
      [theme.breakpoints.down(769)]: {
        width: " 18rem",
        height: " 18rem",
      },
      position: " relative",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: '2rem'
      }
    },

    "& .review-box": {
      position: 'relative',
      padding: '0.5rem',
      "& .ppl-name": {
        textAlign: 'center',
        fontSize: '1.4rem',
        marginBottom: '0.6rem'
      },
      "& p": {
        lineHeight: 1.06,
        margin: '6px 0',
        padding: '0 0.5rem',
        textAlign: 'center',
        "& span": {
          color: theme.palette.primary.main,
          fontWeight: 500
        }
      }


    }

  }
}));

const ServiceSlider = (props) => {

  const { data, text, trustbyData, linkTo } = props

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className="container">
        <h1 className="heading">{text}</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {/* <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" alt="" />
          </SwiperSlide> */}


          {
            data && data.map((e, i) => (
              // <SwiperSlide key={i}>
              //   <img src={e.img} alt="" />
              // </SwiperSlide>
              <SwiperSlide key={i}>
                <img src={e.img} alt="" />

                <div className="review-box">
                  <h2 className="ppl-name">{e.name}</h2>
                  <p>{e.area_of_expertise.substring(0, 56)}...</p>
                  <p>Exp: <span>{e.year_of_experience}</span></p>
                </div>
              </SwiperSlide>
            ))
          }
          {
            trustbyData && trustbyData.map((e, i) => (
              // <SwiperSlide key={i}>
              //   <img src={e.img} alt="" />

              //    <div className="review-box">
              //       <h3 className="ppl-name">{e.name}</h3>
              //       <p>{e.desc}</p>
              //    </div>
              // </SwiperSlide>
              <SwiperSlide key={i}>
                <img src={e.img} alt="" />
              </SwiperSlide>
            ))
          }
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              {/* <ArrowBackIcon className='icon' /> */}
            </div>
            <div className="swiper-button-next slider-arrow">
              {/* <ArrowForwardIcon className='icon' /> */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        <Grid
          container
          mt={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: '1rem' }}
        >
          <Grid item md={3} sx={12}>
            <Button
              size='small'
              fullWidth
              variant="contained"
              color="primary"
            >
              <Link to={linkTo}>Explore more</Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ServiceSlider
