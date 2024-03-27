import React from 'react';
import { Tabs, Tab, Typography, Box, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const VerticalTabs = ({ tabsData }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    // Handle tab change event
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'row' : 'column' }}>
      <Tabs
        orientation={isSmallScreen ? 'horizontal' : 'vertical'}
        value={0} // Set active tab index
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider' }}
      >
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.heading} />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {tabsData.map((tab, index) => (
          <TabPanel key={index} value={0} index={index} isSmallScreen={isSmallScreen} tab={tab} />
        ))}
      </Box>
    </Box>
  );
};

const TabPanel = ({ value, index, isSmallScreen, tab }) => {
  const renderSubLinks = () => {
    return tab.subLinks.map((subLink, idx) => (
      <Typography key={idx} variant="body1" component={Link} to={subLink.path}>
        {subLink.label}
      </Typography>
    ));
  };

  return (
    <Box
      sx={{
        display: value === index ? 'block' : 'none',
        p: isSmallScreen ? 2 : 3,
      }}
    >
      <Typography variant="h5">{tab.heading}</Typography>
      {renderSubLinks()}
    </Box>
  );
};

export default VerticalTabs;
