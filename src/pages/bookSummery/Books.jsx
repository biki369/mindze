import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { bookSummeryData } from '../../data';
import BookCard from '../../components/cards/book-card/BookCard';
import { TableContainer, useMediaQuery } from '@material-ui/core';
import { PersonalityDev, careerDev, spirituality, psychology } from '../../data/bookSummery';
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

    "& .book-container": {
      marginTop: 20,
      padding: "1rem",
      display: 'flex',
      // justifyContent:'center',
      alginItem: 'center',
      flexWrap: "wrap",
      gap: "10px",
      [theme.breakpoints.down(600)]: {
        justifyContent: 'center',

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

const Books = () => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedValue = localStorage.getItem('activeTab');
    if (storedValue) {
      setActiveTab(parseInt(storedValue));
    }
    localStorage.clear()
   
}, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
      localStorage.setItem('activeTab', newValue);

  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example"
          variant={mobileDevice ? "scrollable" : ""}
        >
          <Tab label="Personality Development" {...a11yProps(0)} />
          <Tab label="Psychology" {...a11yProps(1)} />
          <Tab label="Spirituality" {...a11yProps(2)} />
          <Tab label="Career Development" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      {/* <TabPanel value={activeTab} index={0}> */}

      {
        activeTab === 0 &&
        <TableContainer>
          <div className='book-container'>
            {
              PersonalityDev.map((e, i) => (
                <div className='' key={i}>
                  <BookCard
                    data={e}
                  />
                </div>
              ))
            }
          </div>

        </TableContainer>
      }
      {/* </TabPanel> */}

      {/* <TabPanel value={activeTab} index={1}> */}
      {
        activeTab === 1 && <TableContainer>
          <div className='book-container'>
            {
              psychology.map((e, i) => (
                <div className='' key={i}>
                  <BookCard
                    data={e}
                  />
                </div>
              ))
            }
          </div>
        </TableContainer>
      }
      {/* </TabPanel> */}

      {
        activeTab === 2 &&
        <TableContainer>
          <div className='book-container'>
            {
              spirituality.map((e, i) => (
                <div className='' key={i}>
                  <BookCard
                    data={e}
                  />
                </div>
              ))
            }
          </div>
        </TableContainer>
      }



      {/* <TabPanel value={activeTab} index={2}> */}
      {/* </TabPanel> */}
      {/* <TabPanel value={activeTab} index={3}> </TabPanel> */}
      {

        activeTab === 3 &&
        <TableContainer>
          <div className='book-container'>
            {
              careerDev.map((e, i) => (
                <div className='' key={i}>
                  <BookCard
                    data={e}
                  />
                </div>
              ))
            }
          </div>
        </TableContainer>
      }
    </div>
  )
}

export default Books
