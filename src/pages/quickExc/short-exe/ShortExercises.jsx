import { makeStyles } from "@material-ui/core";
// import BookCard from "../../../components/cards/book-card/BookCard";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { shortsExe } from "../../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .short-execs__container": {
      padding: "30px",
      display: "flex",
      gap: "23px",
      flexWrap: 'wrap',
      [theme.breakpoints.down(600)]: {
        justifyContent: "center"
      },
      "& .short-execs__card": {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        // width: '330px',
        // height: "260px",
        // borderRadius: '13px',
        // border: '1px solid #000',
        // boxShadow: ' 9px 4px 5px 0px rgba(0,0,0,0.75)',
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
              <iframe src={e.url} frameborder="0"></iframe>
              {/* <video src={e.url}></video> */}
              {/* <PlayCircleFilledWhiteIcon className="playIcon" color="primary" /> */}
              {/* <a href="https://drive.google.com/file/d/1umK1rigOs3KL7sHVqRJfZvNqXjONozLz/view?usp=drive_link"></a> */}
            </div>

          ))
        }

      </div>
    </div>
  )
}

export default ShortExercises;
