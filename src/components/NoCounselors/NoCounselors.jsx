import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    noCouncellors: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '2.3rem',
      fontSize: '1.3rem',
      margin: '1.5rem 0',
      // background:'#808080',
  
      "& .head": {
        fontSize: " 3rem",
        margin: '1rem 0',
        textAlign: "center",
        [theme.breakpoints.down(600)]: {
          fontSize: " 2rem",
        },
      },
      "& .stayTuned": {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        margin:'1rem 0',
        fontSize: "1rem",
      "&> p":{
        marginTop: "1rem",
      }
  
    }

}
  }));
const NoCounselors = ({ text, yes,s,p,h }) => {

  const classes = useStyles();
  return (
    <div className={classes.noCouncellors}>
    <h1 className="head">{text}</h1>
    {/* <Chip
      label="Stay tuned !"
      clickable
      color="primary"/> */}
      <div className="stayTuned">Stay Tuned !</div>
    {
      h && <p>We'll keep you posted once we've connected with our latest lineup of   counselors!</p>
    }
    {
        s && <p>We'll keep you posted once we've connected with our latest lineup of spiritual counselors!</p>
    }
    {
        p && <p>We'll keep you posted once we've connected with our latest lineup of philosophical counselors!</p>
    }

    {
      yes && <p>We'll keep you posted once we've connected</p>
    }



  </div>
  )
}

export default NoCounselors
