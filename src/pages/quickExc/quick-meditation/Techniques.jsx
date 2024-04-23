import { makeStyles } from "@material-ui/core";
import BackCurrent from '../../../components/back-current/BackCurrent'
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    "& .technique-container": {
      width: '66rem',
      [theme.breakpoints.down(800)]: {
        width: '100%',
      },
      margin: 'auto',
      padding: '1rem 3rem',
      [theme.breakpoints.down("sm")]: {
        padding: '10px 0',
      },
      "& .technique-head": {
        fontSize: '2rem',
        color: theme.palette.primary.main,
        margin: '1rem 0',
        textAlign: 'center',
      },
      "& .sub-head": {
        color: theme.palette.primary.main,
        fontSize: '1.5rem',
        marginTop: '2.3rem',
        marginBottom: '1.3rem'
      },

      "& .sub-content": {
        padding: '1rem 0',
        "& p": {
          fontSize: '18px'
        }
      },
      "& .ol-sub-content": {
        marginTop: '1rem',
        "& ol": {
          marginLeft: '30px',
        },
      },
      "& .ul-sub-content": {
        marginTop: '1rem',
        "& ul": {
          marginLeft: '30px',
        },
        // padding: '1rem 0',
      },
      "& li": {
        fontSize: '18px',
        margin: '0.6rem 0',
        color: '#333',
        "& span": {
          fontWeight: '500',
          marginRight: '3px',
        }
      }
    }
  },
}));

const Techniques = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = location?.state

  const { title, subTitle, intro, benefits, understanding, steps, practiceTips, cautions, conclusion } = data

  console.log(benefits);
  return (
    <div className={classes.root}>
      <BackCurrent link={"/quickExercises"} name="Quick Exercises" />

      <div className="technique-container">
        <h1 className="technique-head">{subTitle}</h1>
        <div className="sub-content">
          <h3 className="sub-head">Introduction</h3>
          <p>{intro}</p>
        </div>
        <div className="sub-content">
          <h3 className="sub-head">Understanding {title}</h3>
          <p>{understanding}</p>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Benefits of {title}</h3>
          <ul>
            {
              benefits.map((e, i) => (
                <div key={i}>
                  <li><span>{e.head} </span> {e.p}</li>
                </div>
              ))
            }
          </ul>
        </div>
        <div className="ol-sub-content">
          <h3 className="sub-head">How to Practice {title}: A Step-by-Step Guide </h3>
          <ol>
            {
              steps.map((e, i) => (
                <div key={i}>
                  <li ><span>{e.step}</span>{e.desc}</li>
                </div>
              ))
            }
          </ol>
        </div>

        <div className="ul-sub-content">
          <h3 className="sub-head">Tips for Enhancing Practice</h3>
          <ul>
            {
              practiceTips.map((e, i) => (
                <div key={i}>
                  <li><span>{e.head} </span> {e.p}</li>
                </div>
              ))
            }
          </ul>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Cautions and Considerations</h3>
          <ul>
            {
              cautions.map((e, i) => (
                <div key={i}>
                  <li><span>{e.head} </span> {e.p}</li>
                </div>
              ))
            }
          </ul>
        </div>

        <div className="sub-content">
          <h3 className="sub-head">Conclusion</h3>
          <p>{conclusion}</p>
        </div>
      </div>
    </div>
  )
}

export default Techniques;
