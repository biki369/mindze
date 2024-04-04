import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { quickMeditationTechiquesData } from '../../../data';


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

    return (
        <div className={classes.root}>
            <div className="techniques-container">
                {
                    quickMeditationTechiquesData.map((e, i) => (
                        <div className="techniques" key={i}>
                            <div className="title">
                                <Link to={"/techniques/:1212"} state={e}>{e.title}</Link>
                            </div>
                        </div>
                    ))
                }
                <div className="techniques" >
                    <div className="title">
                        <Link to={"/yogaMeditations"}>Explore More</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QuickMeditation
