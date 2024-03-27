
import { makeStyles } from "@material-ui/core";
import { asanaData } from '../../../data/yogaMediData'
import { useEffect, useState } from "react";



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
        const fetchData = async () => {
            const response = await asanaData
            setFindData(response.find(data => data.id === Number(id)))
        }
        fetchData()
    }, [id])



    return (
        <div className={classes.root}>
            {
                findData && findData.data && (
                    <div className="technique-container">
                        <div className="sub-content">
                            <h3 className="sub-head">{findData.title}</h3>
                        </div>
                        <div className="sub-content">
                            <h3 className="sub-head">{findData.data.head}</h3>
                            <p>{findData.data.desc}</p>
                        </div>
                        <div className="ol-sub-content">
                            <h3 className="sub-head">Steps</h3>
                            <ol>
                                {
                                    findData.data?.steps.map((item, i) => {
                                        return (
                                            <li key={i}> <span>{item.step}:</span> {item.desc}</li>
                                        )
                                    })
                                }

                            </ol>
                        </div>
                        <div className="ul-sub-content">
                            <h3 className="sub-head">Benefits</h3>
                            <ul>
                                {
                                    findData?.data && findData.data.benefits.map((item, i) => {
                                        return (
                                            <li key={i}> {item.benefit}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>


                        <div className="sub-content">
                            <h3 className="sub-head">Conclusion</h3>
                            <ul>
                                {
                                    findData?.data && findData.data.Conclusion.map((item, i) => {
                                        return (
                                            <li key={i}> {item.sub}</li>
                                        )
                                    })
                                }
                            </ul>
                            {/* <p>{findData?.data.Conclusion}</p> */}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default AsanaDetails;
