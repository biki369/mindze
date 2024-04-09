import { makeStyles, Container } from '@material-ui/core';
import BackCurrent from '../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';

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
          margin: "6px 0",
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

    "& .ul-content": {
      "& ul": {
        marginLeft: 20,
        "& li": {
          fontSize: 16,
          color: "#333",
          margin: '10px 0',
          lineHeight: 1.6,
        }
      },
    }

  }
}));
const BookDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = location.state;

  return (
    <div className={classes.root}>
      <Container>
        <BackCurrent link="/books" name="Book Summery" />
        <div className="book-overview">
          <h1 className="title">BOOK OVERVIEW:{data.title}</h1>
          <div className="book-desc">
            <p><strong>Title:</strong>{data.title}</p>
            <p><strong>Author:</strong>{data.author} </p>
            <p><strong>Publication Date:</strong> {data.publication_Date}</p>
            <p><strong>Genre:</strong>{data.genre}</p>
          </div>
        </div>
        <div className="book-summery">
          <h2 className="title">Book Summery:</h2>
          <p className="summery">
            {data.summery}
          </p>

          <h2 className="title">Major Takeaways:</h2>
          {
            data.majorTakeaways.map((e, i) => (
              <div key={i}>
                <strong>Mastering Emotions:{e.title}</strong>
                <p className="summery">
                  <strong>Mastering Emotions:{e.head}</strong>{e.desc}
                  </p>
              </div>
            ))
          }

          <div className='ul-content'>
            <h2 className="title">Notable Quotes:</h2>
            <ul>
              {
                data.quotes.map((e, i) => (
                  <li key={i}>{e.quote}</li>
                ))
              }
            </ul>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default BookDetails
