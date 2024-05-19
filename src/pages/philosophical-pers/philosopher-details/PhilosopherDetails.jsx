import { Container, makeStyles } from '@material-ui/core';
import BackCurrent from '../../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Loader from '../../../components/loader/Loader';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:30,
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
                    <Container className="mt-[30px] article-container">
                        <article className="prose lg:prose-xl prose-headings:text-indigo-500 prose-strong:text-indigo-500 mt-3">
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
