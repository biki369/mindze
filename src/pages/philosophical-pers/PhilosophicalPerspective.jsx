
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Philosophers from './philosophers/Philosophers';


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
                <Box p={3}>
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
        //   flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& .MuiTab-root": {
            padding: 0
        }
    },
}));

const PhilosophicalPerspective = () => {

    const philosophicalTabData = [
        "Modern Spirituality Thinkers",
        "Stoicism",
        "Hindunism",
        "Buddhism",
        "Taoism",
        "Existentialism",
        "Sufism",
        "Christian Mysticism",
    ]


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
                // variant="fullWidth" 
                >
                    {/* <Tab label="Short Exercises/Affirmations" {...a11yProps(0)} />
                    <Tab label="Quotations" {...a11yProps(1)} />
                    <Tab label="Quick Meditation Techniques" {...a11yProps(2)} />
                    <Tab label="Music" {...a11yProps(3)} /> */}
                    {
                        philosophicalTabData.map((e, i) => (
                            <Tab label={e} {...a11yProps(i)} key={i} />
                        ))
                    }
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Philosophers />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Philosophers />

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Philosophers />
            </TabPanel>
        </div>
    );

}

export default PhilosophicalPerspective;
