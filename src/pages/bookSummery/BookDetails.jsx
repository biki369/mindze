import { makeStyles, Container } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 23px",
    "& .book-overview": {
      textAlign: "center",
      "& .title": {
        fontSize: "2.5em",
        color: theme.palette.primary.main,
        margin: "1.3rem 0",
      },
      "& .book-desc": {
        padding: "1rem 0",
        width: "max-content",
        margin: "13px auto",
        "& p": {
          fontSize: 16,
          fontFamily: " Arial, sans-serif",
          color: "#333",
          "& strong": {
            marginRight: 6,
          },
          textAlign: 'justify'
          // fontSize:16,
        }
      },
    },
    "& .book-summery": {
      "& .title": {
        color: "#333",
        fontSize: "2em",
        margin: '1.6rem 0',
        padding: '10px 0',
        lineHeight: 1.6,
      }
    },

    "& .ul-content":{
      "& ul":{
        marginLeft:20,
        "& li":{
          fontSize:16,
          color:"#333",
          margin:'10px 0',
          lineHeight:1.6,
        }
      },
    }

  }
}));
const BookDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className="book-overview">
          <h1 className="title">BOOK OVERVIEW: AWAKEN THE GIANT WITHIN</h1>
          <div className="book-desc">
            <p><strong>Title:</strong> Awaken The Giant Within </p>
            <p><strong>Author:</strong>Tony Robbins </p>
            <p><strong>Publication Date:</strong> Awaken The Giant Within </p>
            <p><strong>Genre:</strong>Self-Help, Personal Development</p>
          </div>
        </div>
        <div className="book-summery">
          <h2 className="title">Book Summery:</h2>
          <p className="summery">
            <strong>"Awaken the Giant Within"</strong> is a comprehensive self-help guide by Tony Robbins that aims to empower readers to take control of their emotional, physical, and financial destiny. In this book, Robbins combines strategies from neuro-linguistic programming (NLP), cognitive psychology, and his own techniques to provide a framework for understanding one’s values, beliefs, and goals. Over 200 pages, Robbins dives deep into the psychology of change and how to harness it to create a life of success and fulfillment. He stresses the importance of decision-making in shaping one’s destiny and introduces concepts like the science of Neuro-Associative Conditioning (NAC) to help readers break free from limiting patterns. The book serves as both a philosophical guide and a practical toolkit for personal transformation, encompassing aspects of emotional mastery, relationship building, financial management, and long-term goal setting.
          </p>

          <h2 className="title">Major Takeaways:</h2>
          <p className="summery">
            <strong>Mastering Emotions:</strong>
          </p>
          <p className="summery">
            <strong>Detail:</strong> Robbins discusses the significance of understanding and controlling emotions to achieve a fulfilling life.
          </p>

          <div className='ul-content'>

            <h2 className="title">Notable Quotes:</h2>
              <ul>
                 <li>“Beliefs have the power to create and the power to destroy.”</li>
                 <li>“It is in your moments of decision that your destiny is shaped.”</li>
                 <li>“The only limit to your impact is your imagination and commitment.”</li>
              </ul>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default BookDetails
