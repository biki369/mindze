import { makeStyles } from "@material-ui/core";
import { shortExerciseData } from "../../../data/shortExercise";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .short-execs__container": {
      padding: "10px 30px",
      display: "flex",
      gap: "10px",
      flexWrap: 'wrap',
      // justifyContent: "center",
      "& .short-execs__card": {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width:356,
        [theme.breakpoints.down(760)]: {
          width: "100%",
        },
        "&:hover": {
          boxShadow: 'none',
        },
        "& .playIcon": {
          fontSize: "90px",
        },
        // cursor: 'pointer',
        "& > img":{
          width:"100%",
          borderRadius:6,
          // height:"100%"
        }
      }

    }
  },
}));

const ShortExercises = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="short-execs__container">
        {
          shortExerciseData.map((e, i) => (
            <div className="short-execs__card" key={i}>
              <img src={e.image} alt="" loading="lazy"/>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ShortExercises;
