import React from 'react';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, Typography, makeStyles } from "@material-ui/core";
import BackCurrent from '../../components/back-current/BackCurrent';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,

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
                    // color: "#333",
                    fontSize: '1rem',
                    color: "#2c3e50",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    // fontWeight: "400",
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
                        // display:'flex',
                        // flexWrap:'wrap',
                        // fontFamily: 'Montserrat',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        "& .MuiTypography-body1": {
                            color: "#2c3e50",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            lineHeight: 1.5,
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
            }
        },
    },
}));

const Test = () => {
    const classes = useStyles();
    const location = useLocation();
    const data = location.state;

    // console.log(data)

    const [checked, setChecked] = React.useState(null);

    const handleChange = (val) => {
        setChecked(val);
    };
    console.log(checked)

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
                                    {
                                        e.options?.map((el, indx) => (
                                            // console.log(indx+i),
                                            <div key={indx}>
                                                <FormGroup row >
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                // value={el.value}
                                                                checked={checked === el.value}
                                                                onChange={() => handleChange(el.value)}
                                                                color="primary"
                                                                // name={el.label}
                                                            />}
                                                        label={el.label}
                                                    />

                                                </FormGroup>
                                            </div>

                                        ))
                                    }
                                </li>
                            ))}
                        </ol>

                    </div>

                    <div className="test-submit__btn">
                        <Button
                            variant="contained" color="primary"
                        >Submit</Button>
                    </div>



                    <Typography>
                        Disclaimer: This test is not a diagnostic tool, and users should consult a healthcare professional for a proper diagnosis and treatment.
                    </Typography>

                </div>
            </Container>
        </div>
    )
}

export default Test
