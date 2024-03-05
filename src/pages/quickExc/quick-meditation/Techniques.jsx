import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
    },
}));

const Techniques = () => {
 const classes = useStyles();

  return (
    <div className={classes.root}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit minima aspernatur eum magni itaque nemo ex ducimus totam incidunt nesciunt doloremque quo obcaecati veniam cupiditate odit id, harum nisi officiis!</p>
    </div>
  )
}

export default Techniques
