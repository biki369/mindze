// NavigationDrawer

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const NavigationDrawer = ({ isOpen, onClose, items }) => {
  console.log(items,"sajdhg")


  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index} onClick={item.onClick}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
// onClick={() => handleTabChange(null, index)}
// onClick={item.onClick}
