import { useEffect, useState } from 'react';
import { Button, Container, Typography, makeStyles } from "@material-ui/core";
import BackCurrent from '../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
        [theme.breakpoints.down(600)]: {
            padding: 3,
        },
        "& .test": {
            "& h2": {
                fontSize: "1.8rem",
                fontWeight: "400",
                color: theme.palette.primary.main,
                textAlign: 'center',
                margin: '10px 0',
            },
            "& .test-content": {
                "& p": {
                    fontSize: '1rem',
                    color: "#2c3e50",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    margin: "10px 0",
                    padding: '10px 30px',
                },
                "& ol": {
                    marginTop: "1.3rem",
                    paddingLeft: '2.3rem',
                    "& li": {
                        margin: "2rem 0",
                        fontSize: '1rem',
                        color: "#2c3e50",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        "& .MuiTypography-body1": {
                            color: "#2c3e50",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            lineHeight: 1.5,
                        },
                        "& .test-options": {
                            display: 'flex',
                            flexWrap:'wrap',
                            gap: '0.5rem',
                            "& .test-option": {
                                display: 'flex',
                                gap: '0.6rem',
                            }
                        },
                    },
                    "& p": {
                        padding: '0',
                        width: '100%'
                    },
                }
            },
            "& .test-submit__btn": {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: "13px 0"
            },
        },

        "& .test-result": {
            // width: '360px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: "1rem  auto"
        }
    },

}));

const Test = () => {
    const classes = useStyles();
    const location = useLocation();
    const data = location.state;

    const [checked, setChecked] = useState(null);
    const [total, setTotal] = useState(0)
    const [openSec, setOpenSec] = useState(false)

    const handleChange = (event) => {
        setChecked(event);
        const score = Number(event);
        return score;
    };

    useEffect(() => {
        const TotalScore = () => {
            setTotal(Number(checked) + total)
        };
        TotalScore();
    }, [checked])

    console.log(total)

    return (
        <div className={classes.root}>
            <Container>
                <div className="test">
                    <BackCurrent link="/mentalTest" name="Mental Tests" />

                    <h2>{data?.title}</h2>
                    <div className='test-content'>
                        <p>{data?.desc}</p>
                        <ol>
                            {data.questions?.map((e, i) => (
                                <li key={i}>
                                    <p>{e.text}</p>
                                    <div className='test-options'>
                                        {
                                            e.options?.map((el, indx) => (
                                                <div key={indx} className='test-option'>
                                                    <input type="radio" name={e.text} value={el.value} onChange={()=> handleChange(el.value)} />
                                                    {el.label}
                                                </div>

                                            ))
                                        }
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="test-submit__btn">
                        <Button
                            variant="contained" color="primary"
                            onClick={() => setOpenSec(!openSec)}
                        >Submit</Button>
                    </div>

                    {openSec && <div className='test-result'>
                        {
                            data.classificationCategories?.map((e, i) => {
                                if (e.low <= total && e.high >= total) {
                                    return (
                                        <>
                                            <p key={i}> <strong>Total Score:{total}</strong> {e.label}</p>
                                            <p key={i}> <strong>Suggested action:</strong> {e.action}</p>
                                        </>
                                    )
                                }

                            })
                        }
                    </div>}



                    <Typography>
                        Disclaimer: This test is not a diagnostic tool, and users should consult a healthcare professional for a proper diagnosis and treatment.
                    </Typography>



                </div>
            </Container>
        </div>
    )
}

export default Test
