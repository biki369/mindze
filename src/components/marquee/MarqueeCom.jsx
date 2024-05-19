import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
       padding:20,
    },
}));

const MarqueeCom = ({title,direction}) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <marquee  direction={direction}>{title}</marquee> 
    </div>
  )
}

export default MarqueeCom
