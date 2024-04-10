import { makeStyles } from "@material-ui/core";
import { MeditationsData } from '../../../data/yogaMediData'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6px',
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



function YogaMediDetails({id}) {

  const [findData, setFindData] = useState("");

  const classes = useStyles();
  // let { id } = useParams();
  if (!id) {
    id = 0;
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < MeditationsData.length; i++) {
          let catData = await MeditationsData[i].data.find(item => item.id === id);
          if (catData) {
            return await setFindData(catData);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id])


  // console.log(findData, id, "===================== datalscjkj")

  return (
    <div className={classes.root}>
      <div className="technique-container">
        <h1 className="technique-head">{findData?.title}</h1>
        <div className="sub-content">
          <h3 className="sub-head">Introduction</h3>
          <p>{findData?.intro}</p>
        </div>
        <div className="sub-content">
          <h3 className="sub-head">Understanding {findData?.title}</h3>
          <p>{findData?.understandingBodyScan}</p>
        </div>
        <div className="ol-sub-content">
          <h3 className="sub-head">Benefits of Body Scan Meditation</h3>
          <ol>
            {
            findData.benefits && findData.benefits.map((item) => {
                return (
                  <li key={item.head}> <span>{item.head}:</span> {item.content}</li>
                )
              })
            }
          </ol>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">How to Practice Body Scan Meditation: A Step-by-Step Guide</h3>
          <ul>
            {
            findData.guid && findData.guid.map((item) => {
                return (
                  <li key={item.step}> <span>{item.step}:</span> {item.desc}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Tips for Enhancing Practice</h3>
          <ul>
          {
            findData.tips && findData.tips.map((item) => {
                return (
                  <li key={item.head}> <span>{item.head}:</span> {item.content}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="ul-sub-content">
          <h3 className="sub-head">Cautions and Considerations</h3>
          <ul>
          {
            findData.cautions && findData.cautions.map((item) => {
                return (
                  <li key={item.head}> <span>{item.head}:</span> {item.content}</li>
                )
              })
            }
          </ul>
        </div>

        <div className="sub-content">
          <h3 className="sub-head">Conclusion</h3>
          <p>{findData?.conclusion}</p>
        </div>
      </div>
    </div>
  )
}

export default YogaMediDetails;
