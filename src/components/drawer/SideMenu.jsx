
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        [theme.breakpoints.down(600)]: {},
        "& .side-menu__container": {
            width: "290px",
            padding: '10px',
        }
    },
}));


const SideMenu = ({ isOpen, onClose, children, anchor }) => {
    const classes = useStyles();
    return (
        <Drawer open={isOpen} onClose={onClose} className={classes.root} anchor={anchor}>
            <div className='side-menu__container'>
                {children}
            </div>
        </Drawer>
    );
};
export default SideMenu;
