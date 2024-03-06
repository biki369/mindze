import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AppBar, Popper } from '@material-ui/core';
import { quotationsData } from '../../../data';
import YogaMediDetails from '../yoga-details-page/YogaMediDetails';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
    root2: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        // height: 224,
        "& .tab-container": {
            width: '100%',
            // height: "90vh",
            padding: "30px",
        },
        "& .qots-container": {
            display: 'flex',
            gap: '0.5rem',
            // alginItem:'center',
            // justifyContent:'center',
            // gap: '1.3rem',
            flexWrap: 'wrap',
            "& .qouts-img": {
                padding: 10,
                backgroundColor: "#efe",
                "& img": {
                    width: '260px',
                    borderRadius: '13px',
                }
            }
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        // height: '300px',
        width: '300px',
        padding:30,
        // position:'sticky'
    },

}));

const Meditation = () => {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.root2}>
                    <Tabs
                        // position="sticky"
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                         {/* <p>Relaxation and Stress Relief</p> */}
                        <Tab label="Body Scan Meditation" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs>
                

                <TabPanel value={value} index={0}>
                    <div className="tab-container">
                        <div className="qots-container">
                            <YogaMediDetails />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </div>

        </div>
    );
}

export default Meditation
