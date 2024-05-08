import { Container, makeStyles } from '@material-ui/core';
import BackCurrent from '../../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Loader from '../../../components/loader/Loader';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .title": {
            textAlign: 'center',
            fontSize: '2.5em',
            marginTop: 20,
            marginBottom: 40,
            color: theme.palette.primary.main
        },
        "& .sub-title": {
            textAlign: 'center',
            fontSize: '1.2em',
            color: "#454748",
            fontWeight: 700,
            margin: "30px 0"

            // color: theme.palette.primary.main
        },
        "& .philosophers-content": {
            padding: '30px',
            marginTop: 23,
            [theme.breakpoints.down("sm")]: {
                padding: '0px',
            },

            "& .desc-section": {
                padding: '20px 0',
                "& .into-red": {
                    color: "#900",
                    marginBottom: 10
                },
                "& p": {
                    marginBottom: 20,
                    fontFamily: 'Arial, sans-serif',
                    color: "#333",
                    lineHeight: 1.6,
                }
            },

        }
    }

}));

const PhilosopherDetails = () => {
    const classes = useStyles();

    const location = useLocation();
    const [findData, setFindData] = useState("");
    const data = location.state;

    const markdown = `${data.markdown}.txt`;

    useEffect(() => {
        fetch(markdown)
            .then((res) => res.text())
            .then((res) => {
                setFindData(res)
            })
    }, [data]);

    return (
        <div className={classes.root}>
            {
                findData.length === 0 ? (<Loader />) : (<>
                    <BackCurrent link="/philosophers" name="Philosophers" />
                    <Container className="mt-[30px]">
                        <article className="prose lg:prose-xl prose-headings:text-indigo-500 prose-strong:text-indigo-500 prose-h1:text-5xl mt-3">
                            <Markdown>
                                {findData}
                            </Markdown>
                        </article>
                    </Container>

                </>)
            }
        </div>
    )
}

export default PhilosopherDetails;
