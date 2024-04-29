import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import YogaMediDetails from '../yoga-details-page/YogaMediDetails';
import { NavLink } from 'react-router-dom';
import SideMenu from '../../../components/drawer/SideMenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MeditationsData } from '../../../data/yogaMediData';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: '100%',
        display: 'flex',

        "& .side-menu": {
            width: '360px',
            height: '100vh',
            overFlowY: 'scroll',
            backgroundColor: '#fff',
            [theme.breakpoints.down('md')]: {
                display: 'none'
            },

            "& .side-menu__links": {
                // display: 'flex',
                // flexDirection: 'column',
                width: '100%',
                "& .side-link": {
                    margin: '6.9px 0',
                    "& button": {
                        display: 'block',
                        // margin: "10px 0",
                        width: "100%",
                    },
                }
            },
            "& .MuiAccordionDetails-root": {
                justifyContent: 'center',
            }

        }
    },


}));
const Meditation = () => {
    const classes = useStyles();

    const [sendId, setSendId] = useState(null);

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (data) => {
        return setSendId(data.id)
    };

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    // const [expanded, setExpanded] = React.useState(false);
    const SideMenuBar = () => {
        return (
            <div className='side-menu'>
                {
                    MeditationsData.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                ria-controls="panel1bh-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.category}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="side-menu__links">
                                    {
                                        item.data.map((data) => (
                                            <div key={data.id} className='side-link'>
                                                <Button onClick={() => handleClick(data)}
                                                    style={{
                                                        color: sendId === data.id ? '#fff' : '#545e6f',
                                                        background: sendId === data.id ? '#3f51b5' : '',
                                                    }}
                                                >{data.title}</Button>
                                            </div>

                                        ))
                                        // console.log(item)
                                    }

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))
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
                        <SideMenuBar />
                    </SideMenu>
                }
                <div className='yoga-meditation'>
                    <YogaMediDetails id={sendId} />
                </div>
            </div>
        </>
    );
}

export default Meditation
