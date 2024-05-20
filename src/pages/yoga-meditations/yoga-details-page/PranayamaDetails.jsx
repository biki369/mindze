
import { makeStyles } from "@material-ui/core";
import {pranayamaData } from '../../../data/yogaMediData'
import { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '6px',
        [theme.breakpoints.down("sm")]: {
            padding: '10px',
        },
        "& .technique-container": {
            padding: '1rem 3rem',
            [theme.breakpoints.down("md")]: {
                padding: '10px',
            },
            "& > article":{
                "& h1":{
                    // fontFamily:'Poppins',
                    fontSize: '2.3rem',
                    fontWeight:500,
                },
                "& h2":{
                    // fontFamily:'Poppins',
                    fontSize: '2rem',
                    fontWeight:500,
                }
            }
        }
    },
}));

function PranayamaDetails({ id }) {
    const [findData, setFindData] = useState("");

    const classes = useStyles();
    if (!id) {
        id = 0;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await pranayamaData
            //    get the markdown file from the data
            const data = response.find((item) => item.id === id)
            const markown = data.data
            setFindData(markown)
        }
        fetchData()
    }, [id])

    return (
        <div className={classes.root}>
            <div className="technique-container">
                <article className="prose lg:prose-xl prose-headings:text-indigo-500 prose-strong:text-indigo-500  mt-6">
                    <Markdown>
                        {findData}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default PranayamaDetails;
