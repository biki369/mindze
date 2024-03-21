import { makeStyles } from "@material-ui/core";
import BackCurrent from '../../../components/back-current/BackCurrent'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    "& .technique-container": {
      width: '53rem',
      margin: 'auto',
      padding: '1rem 3rem',
      "& .technique-head": {
        fontSize: '3rem',
        color: theme.palette.primary.main,
        margin: '1rem 0',
        textAlign:'center',
      },
      "& .sub-head": {
        color: theme.palette.primary.main,
        fontSize: '2rem',
        margin: '1.5rem 0',
      },

      "& .sub-content": {
        padding: '1rem 0',
        "& p": {
          fontSize: '20px'
        }
      },
      "& .ol-sub-content": {
        "& ol":{
          marginLeft: '30px',
        },
      },
      "& .ul-sub-content": {
        "& ul":{
          marginLeft: '30px',
        },      
        // padding: '1rem 0',
      },
      "& li": {
        fontSize: '20px',
        margin: '1rem 0',
        "& span":{
          fontWeight: 'bold',
          fontSize: '20px',
        }
      }
    }
  },
}));

const Techniques = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
                    <BackCurrent link={"/quickExercises"} name="Quick Exercises"/>

      <div className="technique-container">
        <h1 className="technique-head">So-Hum Meditation</h1>
        <div className="sub-content">
          <h3 className="sub-head">Introduction</h3>
          <p>So-Hum Meditation is a simple yet profound technique rooted in the yogic tradition. It uses the mantra "So-Hum," meaning "I am That," to foster a deep sense of connection with the universe and inner self.</p>
        </div>
        <div className="sub-content">
          <h3 className="sub-head">Understanding So-Hum Meditation</h3>
          <p>This meditation involves silently repeating the mantra "So-Hum" in sync with the breath. It's a practice that cultivates mindfulness and promotes a sense of oneness with all beings.</p>
        </div>
        <div className="ol-sub-content">
          <h3 className="sub-head">How to Practice So-Hum Meditation: A Step-by-Step Guide</h3>
          <ol>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
          </ol>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Tips for Enhancing Practice</h3>
          <ul>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
          </ul>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Tips for Enhancing Practice</h3>
          <ul>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
            <li> <span>Find a Quiet Place:</span> Choose a peaceful spot for meditation.</li>
          </ul>
        </div>

        <div className="sub-content">
          <h3 className="sub-head">Conclusion</h3>
          <p>So-Hum Meditation is a powerful tool in discovering inner tranquility and mindfulness. This simple practice, when done regularly, can lead to profound mental and emotional balance, bringing a sense of calm and centeredness to everyday life.</p>
        </div>
      </div>
    </div>
  )
}

export default Techniques
