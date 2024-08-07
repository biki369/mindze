import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Meditation from './inerr-pages/Meditation';
import Pranayama from './inerr-pages/Pranayama';
import Asana from './inerr-pages/Asana';

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
        backgroundColor: theme.palette.background.paper,
    },
}));

const YogaMeditations = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"

            >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                    centered
                >
                    <Tab label="Meditation" {...a11yProps(0)} />
                    <Tab label="Pranayama" {...a11yProps(1)} />
                    <Tab label="Asana" {...a11yProps(2)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Meditation />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Pranayama />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Asana />
            </TabPanel>

        </div>
    );
}

export default YogaMeditations
