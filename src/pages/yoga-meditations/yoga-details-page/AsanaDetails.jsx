
import { makeStyles } from "@material-ui/core";
import { asanaData } from '../../../data/yogaMediData'
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";



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



function AsanaDetails({ id }) {

    const [findData, setFindData] = useState("");

    const classes = useStyles();
    if (!id) {
        id = 0;
    }

    useEffect(() => {
        const data = asanaData.find((item) => item.id === id);

        const markdown = import(`../../../data/${data.markdown}`);
        markdown.then((res) => {
            fetch(res.default)
                .then((res) => res.text())
                .then((res) => {
                    setFindData(res);
                });
        });
    }, [id]);


    return (
        <div className={classes.root}>
            <div className="technique-container">
                <article className="prose lg:prose-xl prose-headings:text-indigo-500 prose-strong:text-indigo-500 prose-h1:text-5xl">
                    <Markdown>
                        {findData}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default AsanaDetails;
