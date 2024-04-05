import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { quickMeditationTechiquesData } from '../../../data';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        "& .techniques-container": {
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            // justifyContent: "center",
            alginItems: "center",
            gap: "30px",
            "& .techniques": {
                padding: "23px",
                width:'450px',
                backgroundColor: "#eeeeee",
                borderRadius: "10px",
                transition: "all 0.3s",
                "&:hover": {
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                },
                "& .title": {
                    textAlign:'center',
                    transition: "all 0.3s",
                    "& a": {
                        fontSize: '1.6rem',
                        "&:hover": {
                            color: theme.palette.primary.main,
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
