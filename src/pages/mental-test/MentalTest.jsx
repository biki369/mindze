import { Typography, makeStyles } from "@material-ui/core";
import { mentalTestData } from "../../data";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        "& p":{
          textAlign:'center',
          marginBottom:'20px',
        },
        "& .mentaltest-container": {
            display: "flex",
            flexWrap: "wrap",
            width: '100%',
            gap: '10px',
            "& .test-box": {
                padding: "20px",
                // display:"block",
                minWidth: 476,
                height: 230,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '13px',
                border: '3px solid #000',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'end',
                "& .test-title": {
                    color: "#fff",
                    "& h3": {
                        fontSize: "1.3rem",
                        "&:hover": {
                            borderBottom: `3px solid ${theme.palette.primary.main}`,
                            cursor: 'pointer',
                            
                        }
                    }
                }
            },
        },
    },
}));


export const MentalTest = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>Mental Health Test</Typography>
            <div className="mentaltest-container">
                {
                    mentalTestData.map((e, i) => (
                        <div className="test-box" key={i} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${e.img})` }}>
                            <div className="test-title" >
                                <Link to={`/mentaltest/:369`}><h3>{e.title}</h3></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
