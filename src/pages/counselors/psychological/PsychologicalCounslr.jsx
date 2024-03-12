import React from 'react'
import { Avatar, Button, Grid, Paper, makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { counselorsData } from '../../../data';
import { Link } from 'react-router-dom';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            "& .counselor": {
                padding: "6px 10px",
                width: 400,
                // border: "1px solid #000",
                display: "flex",
                // justifyContent: 'center',
                // alignItems: 'center',
                gap: 16,
                cursor: "pointer",
                "& .counselor-about": {
                    // display: "flex",
                    // justifyContent: 'center',
                    // flexDirection:"column",
                    // alignItems: 'center',
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
                        // justifyContent: 'center',
                        alignItems: 'center',
                    },

                },

            },
            "& .designation-section": {
                padding: '10px 20px',
                "& .designation, & .interest": {
                    fontSize: 13,
                    color: '#000',
                    fontWeight: 500,
                    display: 'flex',
                    // justifyContent:'center',
                    alignItems: 'center',
                    gap: 10,
                    "& svg": {
                        color: '#303f9f',
                    }
                },
            },

            "& .paper-dev":{
                padding: "10px 6px",
            }
        },
    },

    counslrAvatar: {
        width: 90,
        height: 90,
    }
}));

const PsychologicalCounslr = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className='counselor-container'>
                {
                    counselorsData.map((e, i) => (
                        <Paper key={i} className='paper-dev'>
                                <div className="counselor" >
                                    <div className="counselor-img">
                                        <Avatar alt="" src={e.img} className={classes.counslrAvatar} />
                                    </div>
                                    <div className="counselor-about">
                                        <div className="name">{e.name}</div>
                                        <div className="exp">{e.exp}+ years of experience</div>
                                    </div>
                                </div>
                                <div className='designation-section'>
                                    <div className="designation"> <span><StarsIcon /></span>  {e.designation}</div>
                                    <div className='interest'><span><CheckCircleIcon /></span><strong>interest:</strong>{e.interest}</div>
                                    {/* <div className="edu"><span><SchoolIcon /></span> {e.education}</div> */}
                                </div>
                            
                            <Grid container mt={2}
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            >
                                 <Grid item xs={12} sm={2}></Grid>
                                <Grid item xs={12} sm={5}>
                                    <Button variant="outlined" color="primary">
                                        <Link to={`/counselor/${e.id}`}>View Profile</Link>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Button  variant="contained" color="primary">Book session</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))
                }
            </div>
        </div >
    )
}

export default PsychologicalCounslr
