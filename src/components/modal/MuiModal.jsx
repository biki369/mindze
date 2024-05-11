// MuiModal

import { Modal, Typography, Button, makeStyles, Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // flexWrap:'wrap'
    // [theme.breakpoints.down(500)]: {
    //   width: "300px",
    // },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "& #modal-title":{
      textAlign:"center",
      margin:'1rem 0'
    }
  },
  closeBtn: {
    // color: "#fff",
    // background:theme.palette.error.main,
    "&:hover": {color:theme.palette.error.main},
  },
}));

const MuiModal = ({ open, onClose, children,title }) => {

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
      <IconButton onClick={onClose} className={classes.closeBtn}>
            <CloseIcon />
        </IconButton>
        <Typography variant="h6" id="modal-title" gutterBottom >
          {title}
        </Typography>
        <Box variant="body1" id="modal-description" gutterBottom mx={3}> 
          {children}
        </Box>
    
        {/* <Button  variant="contained" color="secondary"  onClick={onClose}>Close</Button> */}
      </div>
    </Modal>
  );
  
};

export default MuiModal;
