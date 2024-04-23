
// QuotationByCat

import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { quotationsData } from "../../../data";

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
        },

        "& .qots-container": {
            padding:'10px',
            display: 'flex',
            gap: '0.5rem',
            alginItem:'center',
            // justifyContent:'center',
            // gap: '1.3rem',
            flexWrap: 'wrap',
            "& .qouts-img": {
                padding: 10,
                // backgroundColor: "#efe",
                "& img": {
                    width: '363px',
                    height:'513px',
                    [theme.breakpoints.down("sm")]: {
                        width: '263px',
                    },
                    borderRadius: '13px',
                    // boxShadow:theme.p
                }
            }
        },
    },
}));

function QuotationByCat({ id }) {

    const [findData, setFindData] = useState("");

    const classes = useStyles();
    if (!id) {
        id = 0;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await quotationsData
            setFindData(response.find(data => data.id === Number(id)))
        }
        fetchData()
    }, [id])



    return (
        <div className={classes.root}>
            <div className="qots-container">
                {

                    findData?.images?.map((e, i) => (
                        <div className="qouts-img" key={i}>
                            <img src={e.url} alt="" />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default QuotationByCat;
