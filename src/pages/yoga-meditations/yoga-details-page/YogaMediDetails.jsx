import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    [theme.breakpoints.down("sm")]: {
      padding: '10px',
    },
    "& .technique-container": {
      [theme.breakpoints.up(900)]: {
        width: '53rem',
      },
      margin: 'auto',
      padding: '1rem 3rem',
      [theme.breakpoints.down("md")]: {
        padding: '0%',

      },
      "& .technique-head": {
        fontSize: '3rem',
        [theme.breakpoints.down("md")]: {
          // padding: '0%',
          fontSize: '2rem',

        },
        color: theme.palette.primary.main,
        margin: '1rem 0',
        textAlign: 'center',
      },
      "& .sub-head": {
        color: theme.palette.primary.main,
        fontSize: '2rem',
        [theme.breakpoints.down("md")]: {
          fontSize: '1.5rem',
        },
        margin: '1.5rem 0',
      },

      "& .sub-content": {
        padding: '1rem 0',
        "& p": {
          fontSize: '20px'
        }
      },
      "& .ol-sub-content": {
        "& ol": {
          marginLeft: '30px',
        },
      },
      "& .ul-sub-content": {
        "& ul": {
          marginLeft: '30px',
        },
        // padding: '1rem 0',
      },
      "& li": {
        fontSize: '20px',
        margin: '1rem 0',
        "& span": {
          fontWeight: 'bold',
          fontSize: '20px',
        }
      }
    }
  },
}));


function YogaMediDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="technique-container">
        <h1 className="technique-head">Body Scan Meditation</h1>
        <div className="sub-content">
          <h3 className="sub-head">Introduction</h3>
          <p>Body Scan Meditation is a mindfulness technique that promotes deep relaxation and self-awareness. This practice involves mentally scanning your body, noticing sensations, and releasing tension.</p>
        </div>
        <div className="sub-content">
          <h3 className="sub-head">Understanding Body Scan Meditation</h3>
          <p>Body Scan Meditation is a form of mindfulness that encourages heightened body awareness. Practitioners focus on each part of their body in turn, observing sensations without judgment. This practice originates from mindfulness traditions and is accessible to al</p>
        </div>
        <div className="ol-sub-content">
          <h3 className="sub-head">Benefits of Body Scan Meditation</h3>
          <ol>
            <li> <span>Stress Reduction:</span> It significantly lowers stress by shifting focus to physical sensations.</li>
            <li> <span>Increased Awareness:</span> Enhances awareness of the body, helping to identify and address discomfort.</li>
            <li> <span>Improved Sleep:</span> Promotes better sleep by relaxing the mind and body..</li>
            <li> <span>Emotional Regulation:</span> Helps in understanding and managing emotions effectively.</li>
          </ol>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">How to Practice Body Scan Meditation: A Step-by-Step Guide</h3>
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

export default YogaMediDetails;
