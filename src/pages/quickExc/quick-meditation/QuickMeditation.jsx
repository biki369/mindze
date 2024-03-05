import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        "& .techniques-container": {
            display: "flex",
            flexWrap: "wrap",
            // width: "100%",
            height: "100%",
            // justifyContent: "center",
            gap: "10px",
            "& .techniques": {
                padding: "30px",
                backgroundColor: "#eeeeee",
                borderRadius: "10px",
                "& .title": {
                    // width:"100px",
                    // height:"100px",
                    transition: "all 0.3s",
                    "& a": {
                        fontSize: '1.6rem',
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    },
                    cursor: 'pointer',
                }
            }
        },
    },
}));


const QuickMeditation = () => {
    const classes = useStyles();
    const demoData = [0, 1, 2, 3, 4, 5];

    return (
        <div className={classes.root}>
            <div className="techniques-container">
                {
                    demoData.map((e, i) => (
                        <div className="techniques" key={i}>
                            <div className="title">
                                <Link to={"/techniques:1212"}>Shikantaza("Just Sitting")</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default QuickMeditation
