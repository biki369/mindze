import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));



const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress />
            {/* <h1>loading.................</h1> */}
        </div>
    )
}

export default Loader
