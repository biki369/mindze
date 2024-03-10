import React from 'react'
import { Avatar, Paper, makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { counselorsData } from '../../../data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            "& .counselor": {
                padding: "6px 10px",
                width: 400,
                // border: "1px solid #000",
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                gap: 13,
                cursor: "pointer",
                "& .counselor-about": {
                    // display: "flex",
                    // justifyContent: 'center',
                    // flexDirection:"column",
                    // alignItems: 'center',
                    "& > div": {
                        margin: "6px 0"
                    },
                    "& .name": {
                        fontSize: '1.5rem',
                        fontWeight: 500,
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
                    "& .desc": {
                        fontSize: 13,
                        color: '#333',
                    },
                    "& .edu": {
                        display: "flex",
                        gap: 10,
                        color: "#000",
                        // justifyContent: 'center',
                        alignItems: 'center',
                    }
                },
            }
        }
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
                        <Paper key={i}>
                            <Link to={`/counselor/${e.id}`}>
                                <div className="counselor">
                                    <div className="counselor-img">
                                        <Avatar alt="" src={e.img} className={classes.counslrAvatar} />
                                    </div>
                                    <div className="counselor-about">
                                        <div className="name"> <span className='counslr-online' style={{ backgroundColor: e.online ? "#00b894" : "red" }}></span>{e.name}</div>
                                        <div className="desc">{e.desc}</div>
                                        <div className="exp">{e.exp}+ years of experience</div>
                                        <div className="edu"><span><SchoolIcon /></span> {e.education}</div>
                                    </div>
                                </div>
                            </Link>
                        </Paper>
                    ))
                }
            </div>
        </div >
    )
}

export default PsychologicalCounslr
