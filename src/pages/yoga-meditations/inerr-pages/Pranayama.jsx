
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import YogaMediDetails from '../yoga-details-page/YogaMediDetails';
import { NavLink } from 'react-router-dom';
import SideMenu from '../../../components/drawer/SideMenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MeditationsData, pranayamaData } from '../../../data/yogaMediData';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PranayamaDetails from '../yoga-details-page/PranayamaDetails';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: '100%',
        display: 'flex',

        "& .side-menu": {
            width: '300px',
            height: '100vh',
            padding: '16px',
            overFlowY: 'scroll',
            backgroundColor: '#fff',
            [theme.breakpoints.down('md')]: {
                display: 'none'
            },

            "& .side-link":{
                width:"100%",
                "& a":{
                    // backgroundColor:"green",
                    display:'block',
                    margin:"10px 0",
                    padding:"10px",
                    fontSize:'1.3rem',
                    width:"100%",
                    
                }
            }

          
        },

        "& .sub-content":{
            
        },
    },


}));
const Pranayama = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [sendId, setSendId] = useState(null);

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getId = (id) => {
        return setSendId(id)
        // console.log(e,id,"jkzchxjcxhjzgcxhkjz")
    }

    const [expanded, setExpanded] = React.useState(false);

    const SideMenuBar = () => {
        return (
            <div className='side-menu'>
                {
                    pranayamaData.map((data) => (
                        <div key={data.id} className='side-link'>
                            {/* <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                    background: isActive ? '#3f51b5' : '',
                                })}

                                to={`/pranayamaAsanasDetails/${data.id}`} >{data.title}</NavLink> */}
                            <Button onClick={() => getId(data.id)}>{data.title}</Button>
                        </div>

                    ))
                    // console.log(item)
                }
            </div>
        )
    }

    return (
        <>
             {
                mobileDevice && <IconButton onClick={toggleDrawer} ><ChevronRightIcon /></IconButton >
            }
            <div className={classes.root}>
                {
                    !mobileDevice && <SideMenuBar />
                }
                {
                    mobileDevice && <SideMenu isOpen={drawerOpen} onClose={toggleDrawer} anchor='left'>
                        <div className='side-menu'>

                            <h1>Hello</h1>

                        </div>
                    </SideMenu>
                }
                <div className='sub-content'>
                 {/* {  sendId && <PranayamaAsanasDetails id={sendId}/>} */}
                 <PranayamaDetails id={sendId}/>
                </div>
            </div>
        </>
    );
}

export default Pranayama
