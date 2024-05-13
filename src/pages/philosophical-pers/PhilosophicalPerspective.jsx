
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Philosophers from './philosophers/Philosophers';
import { useMediaQuery } from '@material-ui/core';
import { stoicismData, modernPhilosophers, hinduismData, buddhismData, taoismData, existentialismData, christianData, sufismData } from '../../data/philosophicalPerspective'
import { useLocation } from 'react-router-dom';
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
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& .MuiTab-root": {
            padding: 0,
            [theme.breakpoints.down(600)]: {
                width: '173px',
            }
        },
        "& .MuiTabs-scrollButtonsDesktop": {
            [theme.breakpoints.down('md')]: {
                display: 'flex',
            },
        },

        "& .MuiTabs-flexContainer": {
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'start',
            },
        },

    },
}));

const PhilosophicalPerspective = () => {

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));
    const { pathname } = useLocation()


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

    useEffect(() => {
        const storedValue = localStorage.getItem('activeTab');
        if (storedValue) {
            setValue(parseInt(storedValue));
        }
        localStorage.removeItem('activeTab')
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        localStorage.setItem('activeTab', newValue);
    };


    return (
        <div className={classes.root}>
            <AppBar
                position="static"
            >
                <Tabs value={value} onChange={handleChange}
                    aria-label="scrollable auto tabs example"
                    variant={mobileDevice ? "scrollable" : ""}
                >
                    {
                        philosophicalTabData.map((e, i) => (
                            <Tab label={e} {...a11yProps(i)} key={i} />
                        ))
                    }
                </Tabs>
            </AppBar>
            <TabPanel value={value || 0} index={0 ||0}>
                <Philosophers data={modernPhilosophers} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Philosophers data={stoicismData} />

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Philosophers data={hinduismData} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Philosophers data={buddhismData} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Philosophers data={taoismData} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Philosophers data={existentialismData} />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Philosophers data={sufismData} />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <Philosophers data={christianData} />
            </TabPanel>
        </div>
    );

}

export default PhilosophicalPerspective;
