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
        "& .blog-container": {
            position: 'relative',
            padding: '3rem 10px',
            "& .blog-title": {
                fontSize: "24px",
                textAlign: "center",
                marginTop: 24,
                marginBottom: 30,
                paddingBottom: 20,
                color: "#333",
                fontWeight: 500,
            },
            "& .blog-content": {
                // padding: " 1rem 0",
                // fontSize: " 3.5rem",
                margin: '20px 10px',
                padding: '10px 3.5rem',
                [theme.breakpoints.down("sm")]: {
                    padding: '10px 0',
                },
                "& .b-sub-title": {
                    fontSize: 20,
                    color: "#555",
                    fontWeight: 400,
                    lineHeight: 1.6,
                },
                "& p": {
                    marginTop: '1rem',
                    marginBottom: '1.63rem',
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.6,

                }
            },
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
                            <div className="w-full">
                                <article className="prose lg:prose-xl max-w-full prose-headings:text-indigo-500 prose-strong:text-indigo-500 prose-h1:text-5xl mt-6">
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
