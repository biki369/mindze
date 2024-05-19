import { Container, makeStyles } from '@material-ui/core';
import BackCurrent from '../../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Markdown from "markdown-to-jsx";
import Loader from '../../../components/loader/Loader';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: '30px 10px',
        "& .article-container": {
            "& > article": {
              "& h1": {
                // fontFamily:'Poppins',
                fontSize: '2.3rem',
                fontWeight: 500,
              },
              "& h2": {
                // fontFamily:'Poppins',
                fontSize: '2rem',
                fontWeight: 500,
              }
            }
          },
    }

}));

const BlogDetails = () => {

    const classes = useStyles();
    const location = useLocation();
    const [findData, setFindData] = useState("");

    const data = location.state;
    // const baseUrl = "http://localhost:5173/blogs";

    const markdown = `${data.markdown}.txt`;

    useEffect(() => {
        fetch(markdown)
            .then((res) => res.text())
            .then((res) => {
                setFindData(res)
            })
    }, [data]);
    // console.log(markdown,"blogs");

    return (
        <div className={classes.root}>
            {
                findData.length === 0 ? (<Loader />) : (
                    <>
                        <BackCurrent link="/blogs" name="Blogs" />
                        <Container className="blog-container">
                            <div className="w-full article-container">
                                <article className="prose lg:prose-xl max-w-full prose-headings:text-indigo-500 prose-strong:text-indigo-500  mt-6">
                                    <Markdown>{findData}</Markdown>
                                </article>
                            </div>
                        </Container>
                    </>
                )
            }

        </div>
    )
}

export default BlogDetails
