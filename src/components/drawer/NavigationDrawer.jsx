// NavigationDrawer

import { Drawer, List, ListItem, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    "& .nav-links": {
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
      // gap: "0.5rem",
      "& a": {
        padding: '10px',
        width: '100%',
      },
      [theme.breakpoints.down(600)]: {}
    }
  },
}));

const NavigationDrawer = ({ isOpen, onClose, items }) => {
  const classes = useStyles();
  return (
    <Drawer open={isOpen} onClose={onClose} className={classes.root} anchor='right'>
      <List className='nav-links'>
        {
          items.map((item, index) => (
            <ListItem key={index}>
              <NavLink to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : '',
                  background: isActive ? '#3f51b5' : '',
                })}
                onClick={onClose}

              >{item.label}</NavLink>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};
export default NavigationDrawer;
// onClick={() => handleTabChange(null, index)}
// onClick={item.onClick}
