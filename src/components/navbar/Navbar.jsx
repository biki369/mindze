import React from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';



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
            margin: "10px 0"
        },
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


            </Box>

        </Box>
    )
}

export default Navbar
