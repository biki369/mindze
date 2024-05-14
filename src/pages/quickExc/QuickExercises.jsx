
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShortExercises from './short-exe/ShortExercises';
import Quotations from './quotations/Quotations';
import QuickMeditation from './quick-meditation/QuickMeditation';
import { useMediaQuery } from '@material-ui/core';

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
                <>
                    {children}
                </>
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
        //   flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& .MuiTabs-scrollButtonsDesktop": {
            [theme.breakpoints.down('md')]: {
                display: 'flex',
            },
        },
        "& .MuiTabs-flexContainer": {
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'normal',
            },
        },
    },
}));

const QuickExercises = () => {
    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const storedValue = localStorage.getItem('activeTab');
        if (storedValue) {
            setValue(parseInt(storedValue));
        }else{
            setValue(0)
        }
        localStorage.removeItem('activeTab')
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        localStorage.setItem('activeTab', newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Tabs value={value} onChange={handleChange}
                    // centered
                    variant={mobileDevice ? "scrollable" : ""}
                    scrollButtons="auto"
                // aria-label="scrollable auto tabs example"
                >
                    <Tab label="Short Exercises/Affirmations" {...a11yProps(0)} />
                    <Tab label="Quotations" {...a11yProps(1)} />
                    <Tab label="Quick Meditation Techniques" {...a11yProps(2)} />
                    {/* <Tab label="Music" {...a11yProps(3)} /> */}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ShortExercises />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Quotations />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <QuickMeditation />
            </TabPanel>
        </div>
    );
}

export default QuickExercises;
