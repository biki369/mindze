import React from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
        "& .logo-img": {
            width: "130px",
        },
        "& .headerTop": {
            display: "flex",
            height: '10vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "10px 0",
        },

        "& .profile": {
            position: 'absolute',
            right: "3.5vw",
            top: "5.5vh",
            cursor: "pointer",
            // padding:'6px',
            // borderRadius:"50%",
            // backgroundColor: "#3f51b5",
            "& .p-icon": {
                "& svg": {
                    fontSize: '36px',
                    // color:"#fff",
                }
            }
        }
    },
}));

const Navbar = () => {
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Box
                className='headerTop'
            >
                <img src="/src/assets/logo.png" alt="logo" className="logo-img" />
                <Typography>Blending Ancient Wisdom with Modern Mindcare</Typography>

                <div className="profile">
                    <div className="p-icon" title='Profile'>
                        <Link to="login">
                            <PermIdentityIcon />
                        </Link>
                    </div>
                </div>

            </Box>

        </Box>
    )
}

export default Navbar
