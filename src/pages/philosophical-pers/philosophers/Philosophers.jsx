import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        "& p": {
            textAlign: 'center',
            marginBottom: '20px',
        },
        "& .philosophers-container": {
            display: "flex",
            flexWrap: "wrap",
            width: '100%',
            gap: '10px',
            alignItems: 'center',
            [theme.breakpoints.down(600)]: {
                justifyContent: 'center',

            },
            "& .philosophers-box": {
                padding: "20px",
                // display:"block",
                width: 283,
                height: 300,
                [theme.breakpoints.down(700)]: {
                    minWidth: "49%",
                },
                [theme.breakpoints.down(500)]: {
                    minWidth: "100%",
                },
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '13px',
                border: '1px solid #333',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'end',
                transition: 'all 0.3s ease-in-out',
                "&:hover": {
                    transform: 'scale(0.930)'
                },
                "& .test-title": {
                    color: "#fff",
                    "& h3": {
                        fontSize: "1rem",
                        cursor: 'pointer',
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

const Philosophers = ({ data }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="philosophers-container">
                {
                    data?.map((e, i) => (
                        <Link state={e} to={`/philosophers/369`} key={i}>
                            <div className="philosophers-box" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${e.image})` }}>
                                <div className="test-title" >
                                    <h3>{e.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Philosophers
