import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core"
import PropTypes from 'prop-types';
import { menuLits } from '../../data';
import Home from '../../pages/home/Home';
// import { Outlet } from 'react-router-dom'
import QuickExercises from '../../pages/quickExc/QuickExercises';
import BookSummery from '../../pages/bookSummery/BookSummery';
import { MentalTest } from '../../pages/mental-test/MentalTest';
import YogaMeditations from '../../pages/yoga-meditations/YogaMeditations';
import PhilosophicalPerspective from '../../pages/philosophical-pers/PhilosophicalPerspective';
import Blogs from '../../pages/Blogs/BlogsMain';
import BlogsMain from '../../pages/Blogs/BlogsMain';
import SpiritualCounslr from '../../pages/counselors/spiritual/SpiritualCounslr';
import PsychologicalCounslr from '../../pages/counselors/psychological/PsychologicalCounslr';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        "& .navBar": {
            marginTop: '30px',
            "& .MuiPaper-elevation4 ": {
                boxShadow: "none",
            },
        },

        "& .top-nav": {
            "& .MuiTabs-scrollButtonsDesktop": {
                [theme.breakpoints.down(600)]: {
                    display: "inherit"
                },
            },

            // '& .MuiTabs-flexContainer': {
            //     flexWrap: 'wrap',
            // },

            "& .Mui-selected": {
                // backgroundColor:`${theme.palette.primary}`,
                backgroundColor: "#3f51b5",
                color: "#fff"
            },
            "& .MuiTab-root": {
                width: '0'
            }
            // "& .MuiTabs-flexContainer":{
            //     display:"block"
            // },
        },
    },
}));

const Layout = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Box className='navBar'>
                <AppBar position="sticky" color='#000' className='top-nav'>
                    <Tabs value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        TabIndicatorProps={{
                            style: { display: 'none' }
                        }}
                    >
                        {
                            menuLits.map((e, i) =>
                            (
                                <Tab
                                    label={e.label}
                                    {...a11yProps(i)}
                                    key={i}
                                />
                            )
                            )
                        }
                    </Tabs>
                </AppBar>

                <Box className='tab-pnl__container'>
                    <TabPanel value={value} index={0}>
                        <Home />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <QuickExercises />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <MentalTest />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <YogaMeditations />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <BookSummery />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <PhilosophicalPerspective />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <BlogsMain />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        <SpiritualCounslr />
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <PsychologicalCounslr />
                    </TabPanel>
                </Box>
            </Box>
        </div>
    )
}

export default Layout;
