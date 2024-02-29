import { makeStyles } from "@material-ui/core";
// import BookCard from "../../../components/cards/book-card/BookCard";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { shortsExe } from "../../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .short-execs__container": {
      padding: "30px",
      display: "flex",
      gap:"23px",
      flexWrap:'wrap',


      "& .short-execs__card": {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: "260px",
        borderRadius: '13px',
        border: '3px solid #000',
        boxShadow: ' 9px 4px 5px 0px rgba(0,0,0,0.75)',
        "&:hover": {
          boxShadow: 'none',
        },
        "& .playIcon": {
          fontSize: "90px",
        },
        cursor: 'pointer',
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
          shortsExe.map((e, i) => (
            <div className="short-execs__card" key={i}>
              <PlayCircleFilledWhiteIcon className="playIcon" color="primary" />
            </div>

          ))
        }

      </div>
    </div>
  )
}

export default ShortExercises;
