import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .book-card ": {
            width: " 280px",
            height:'530px',
            padding: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: " #efefef",
            "& .boxShadow": "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",

            "& .book-card__book": {
                transform: "rotate3d(0, 0, 0, 0deg) translate(0,0)",
            },
            "& .book-card__book-back": {
                boxShadow: "none",
            },
            "& .book-card__book-side": { opacity: 1 },
            " &:hover": {
                "& .book-card__book": {
                    transform: "rotate3d(0, -1, 0, 30deg) translate(-15px, -30px)"
                },
                "& .book-card__book-back": {
                    boxShadow: "5px 10px 15px rgba(0, 0, 0, 0.35)"
                },
                "& .book-card__book-side": { opacity: 1 }
            },
        },

        "& .book-card__cover": {
            position: "relative",
            width: "200px",
            height: "300px",
            margin: " 0 auto 8px auto",
            perspective: "1000px",
        },

        "& .book-card__book": {
            height: "100%",
            transformStyle: "preserve-3d",
            transition: " all 250ms ease",
        },

        "& .book-card__book-front": { position: "absolute", height: "100%" },
        "& .book-card__book-back": {
            position: "absolute",
            top: "0",
            height: "100%",
            width: "100%",
            transform: "translateZ(-40px)"
        },
        "& .book-card__book-side": {
            position: "absolute",
            top: "5px",
            bottom: "2px",
            right: "-29px",
            width: "40px",
            backgroundSize: "5px",
            backgroundColor: "#e1e1e1",
            backgroundImage: "linear-gradient(to right, #ccc 35%, #e1e1e1 35%)",
            opacity: 0,
            transform: "rotate3d(0, 1, 0, 90deg)"
        },
        "& .book-card__img": {
            width: "100%",
            height: "100%",
            backgroundColor: "#e1e1e1"
        },
        "& .book-card__title": { fontSize: "1.3em", marginBottom: "0" },
        "& .book-card__author": { color: "#757575", fontSize: "1em" },
    }
}));

const BookCard = ({ data, tabId }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={"/booksummery/:3232"} state={data}>
                <div className="book-card">
                    <div className="book-card__cover">
                        <div className="book-card__book">
                            <div className="book-card__book-front">
                                <img className="book-card__img" src={data.url} />
                            </div>
                            <div className="book-card__book-back"></div>
                            <div className="book-card__book-side"></div>
                        </div>
                    </div>
                    <div>
                        <div className="book-card__title">
                            {data.title}
                        </div>
                        <div className="book-card__author">
                            {data.author}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BookCard
