import { useEffect, useRef, useState } from 'react'
import { Avatar, Box, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Typography, useMediaQuery } from "@material-ui/core"
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
            zIndex: 999,
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
            position: 'relative',
            // backgroundColor:'#fff',
            // padding:'10px',
            zIndex: 99,
            marginTop: '2rem',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: 'all 0.3s ease',
            // flexDirection:'column',
            gap: "0.5rem",
            "& a": {
                padding: '10px',
                color: '#000',
            },
            [theme.breakpoints.down(600)]: {}
        },
        "& .nav-links-md": {
            display: "flex",
            justifyContent: 'end',

        },
        "& .sticky": {
            position: "fixed",
            // backgroundColor: '#f0f0f0',
            backgroundColor: '#fff',
            top: "0",
            left: 0,
            padding: "10px",
            marginTop: '0%',
            width: "100%",
            zIndex: 99,
            // animationDuration: "0.7s",
            // animationName: "fadeInDown",
            // animationTimingFunction: "ease-out"
        },

        // "@keyframes fadeInDown": {
        //     "0%": { opacity: 0, transform: "translateY(-20px)" },
        //     "100%": { opacity: 1, transform: "translateY(0)" }
        // },



    },
    avatar: {
        margin: theme.spacing(0),
        // backgroundColor: theme.palette.primary.main
        backgroundColor: "#000",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, [scroll]);


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

                <div className={`profile ${scroll ? "sticky" : ""}`}>
                    <div className="p-icon" title='Profile'>
                        <Avatar className={classes.avatar}
                            ef={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >


                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={handleClose}>
                                                        <Link to={"/login"}> Profile </Link>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Avatar>
                    </div>
                </div>
            </Box>

            {
                !mobileDevice && <Box className={`nav-links ${scroll ? "sticky" : ""}`}>
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
                mobileDevice && <Box className={`nav-links-md ${scroll ? "sticky" : ""}`}>
                    <NavigationDrawer isOpen={drawerOpen} onClose={toggleDrawer} items={menuLits} />
                    <IconButton onClick={toggleDrawer} ><MenuIcon /></IconButton >
                </Box>
            }



        </Box>
    )
}

export default Navbar
