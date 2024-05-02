import { makeStyles, Container } from "@material-ui/core";
import BackCurrent from "../../components/back-current/BackCurrent";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

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
          textAlign: "justify",
          // fontSize:16,
        },
      },
    },
    "& .book-summery": {
      "& .title": {
        color: "#333",
        fontSize: "2em",
        margin: "1.6rem 0",
        padding: "10px 0",
        lineHeight: 1.6,
      },
    },

    "& .ul-content": {
      "& ul": {
        marginLeft: 20,
        "& li": {
          fontSize: 16,
          color: "#333",
          margin: "10px 0",
          lineHeight: 1.6,
        },
      },
    },
  },
}));
const BookDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const [findData, setFindData] = useState("");
  const data = location.state;
  // const data = props.location.state;

  const markdown = `${import.meta.env.BASE_URL}/${data.markdown}.txt`;

  useEffect(() => {
    if (!data || !data.markdown) {
      console.error("Markdown data is missing");
      return;
    }
        fetch(markdown)
          .then((res) => res.text())
          .then((res) => {
            setFindData(res);
          })
          .catch((error) => {
            console.error("Failed to fetch markdown content", error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <BackCurrent link="/books" name="Book Summery" />
        <div className="w-full">
          <article className="prose lg:prose-xl max-w-full prose-headings:text-indigo-500 prose-strong:text-indigo-500 prose-h1:text-5xl">
            <Markdown>{findData}</Markdown>
          </article>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
