import { Box, makeStyles, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        "& .link-back": {
            color: theme.palette.primary.main,
            fontSize: '1.03rem',
        }
    },
}));
const BackCurrent = ({ link,name }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box>
                <Link to={link} className="link-back">
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    Go {name}
                </Link>
            </Box>
        </div>
    )
}

export default BackCurrent;
