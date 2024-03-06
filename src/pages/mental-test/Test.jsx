import React from 'react';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, Typography, makeStyles } from "@material-ui/core";

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
                    color: "#333",
                    fontSize: "1.2rem",
                    // fontWeight: "400",
                    margin: "10px 0",
                    padding: '10px 30px',
                },
                "& ol": {
                    marginTop: "1.3rem",
                    paddingLeft: '2.3rem',
                    "& li": {
                        margin:"2rem 0",
                        fontSize:'1rem',
                        color:"#333",
                    },
                    "& p": {
                        padding: '0',
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

    const testOptions = ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'];
    const testOlData = [
        {
            li: "Feeling nervous, anxious, or on edge"
        },
        {
            li: "Not being able to stop or control worrying"
        },
        {
            li: "Worrying too much about different things"
        },
        {
            li: "Trouble relaxing"
        },
        {
            li: "Being so restless that it's hard to sit still"
        },
        {
            li: "Becoming easily annoyed or irritable"
        },
        {
            li: "Feeling afraid as if something awful might happen"
        },
    ]

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.root}>
            <Container>
                <div className="test">
                    <h2>ANXIETY TEST</h2>
                    <div className='test-content'>
                        <p>It is based on the GAD-7, a standardized tool used for screening generalized anxiety disorder. The frequency of the following symptoms over the past two weeks:</p>

                        <ol >
                            {testOlData.map((e, i) => (
                                <li key={i}>
                                    <p>{e.li}</p>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox checked={checked} onChange={handleChange} name="g"
                                                color="primary"

                                            />}
                                            label="Not at all"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={checked} onChange={handleChange} name="b"
                                                color="primary"

                                            />}
                                            label="Several days"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={checked} onChange={handleChange} name="c"
                                                color="primary"

                                            />}
                                            label="More than half the days"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={checked} onChange={handleChange} name=""
                                                color="primary"

                                            />}
                                            label="Nearly every day"
                                        />
                                    </FormGroup>
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
