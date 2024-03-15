// MuiModal

import React from 'react';
import { Modal, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MuiModal = ({ open, onClose, children }) => {

  // const {name} = props.data

  // console.log(name,"lskahdxah");

  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={classes.paper}>
        <Typography variant="h6" id="modal-title" gutterBottom>
          Book an Appointment
        </Typography>
        <Typography variant="body1" id="modal-description" gutterBottom>
          {children}
        </Typography>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default MuiModal;
