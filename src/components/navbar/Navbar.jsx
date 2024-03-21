import { useState } from 'react'
import { Avatar, Box, IconButton, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link, NavLink } from 'react-router-dom';
import { menuLits } from '../../data';
import NavigationDrawer from '../drawer/NavigationDrawer';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        //   flexGrow: 1,
        backgroundColor: '#f0f0f0',
        // backgroundColor: '#fff',
        padding: 13,
        "& .headerTop": {
            display: "flex",
            height: '10vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "16px 0",
            "& .logo-img": {
                width: "160px",
            },
            "& .typo-text": {
                fontFamily: "Montserrat",
                marginTop: 13
            },
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
                    fontSize: '26px',
                    // backgroundColor: "#3f51b5",
                }
            }
        },
        "& .nav-links": {
            // width:'100%',
            // padding:'10px',
            position: 'sticky',
            // backgroundColor:'#fff',
            // padding:'10px',
            top: 0,
            zIndex: 99,
            marginTop: '2rem',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection:'column',
            gap: "0.5rem",
            "& a": {
                padding: '10px',
                color:'#000',
            },
            [theme.breakpoints.down(600)]: {}
        },
        "& .nav-links-md":{
            display:"flex",
            justifyContent:'end',
            
        }
    },
    avatar: {
        margin: theme.spacing(0),
        // backgroundColor: theme.palette.primary.main
        backgroundColor: "#000",
    },
}));

const Navbar = () => {
    const classes = useStyles();

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box className={classes.root}>
            <Box
                className='headerTop'
            >
                <img src="/src/assets/logo-removebg.png" alt="logo" className="logo-img" />
                <Typography className='typo-text'>Blending Ancient Wisdom with Modern Mindcare</Typography>

                <div className="profile">
                    <div className="p-icon" title='Profile'>
                        <Avatar className={classes.avatar}>
                            <Link to="login">
                                <PermIdentityIcon />
                            </Link>
                        </Avatar>
                    </div>
                </div>
            </Box>

            {
                !mobileDevice && <Box className='nav-links'>
                    {
                        menuLits.map((item, index) => (
                            <NavLink to={item.path} key={index}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                    background: isActive ? '#3f51b5' : '',
                                })}

                            >{item.label}</NavLink>
                        ))
                    }
                </Box>
            }

            {
                mobileDevice && <Box className='nav-links-md'>
                    <NavigationDrawer isOpen={drawerOpen} onClose={toggleDrawer} items={menuLits} />
                    <IconButton onClick={toggleDrawer} ><MenuIcon /></IconButton >
                </Box>
            }



        </Box>
    )
}

export default Navbar
