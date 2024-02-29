import { Paper, makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
  },
}));






const Card = () => {

    const classes = useStyles();


  return (
    <div className={classes.root} >
        <Paper>
          
        </Paper>
    </div>
  )
}

export default Card
