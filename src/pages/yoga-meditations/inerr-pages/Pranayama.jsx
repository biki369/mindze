
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import SideMenu from '../../../components/drawer/SideMenu';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PranayamaDetails from '../yoga-details-page/PranayamaDetails';
import { pranayamaData } from '../../../data/yogaMediData';

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

            "& .side-link": {
                width: "100%",
                "& button": {
                    display: 'block',
                    margin: "10px 0",
                    width: "100%",

                }
            }


        },

        "& .sub-content": {

        },
    },


}));

const Pranayama = () => {
    const classes = useStyles();
    const [sendId, setSendId] = useState(null);

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    const getId = (id) => {
        return setSendId(id)
    }

    const [expanded, setExpanded] = React.useState(false);

    const SideMenuBar = () => {
        return (
            <div className='side-menu'>
                {
                    pranayamaData.map((data) => (
                        <div key={data.id} className='side-link'>
                            <Button onClick={() => getId(data.id)}
                                 style={{
                                    color: sendId === data.id ? '#fff' : '#545e6f',
                                    background: sendId === data.id ? '#3f51b5' : '',
                                    width:"100%",
                                    margin:"10px 0"

                                }}
                            >{data.title}</Button>
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
                            <SideMenuBar onClick={toggleDrawer}/>
                        </div>
                    </SideMenu>
                }
                <div className='sub-content'>
                    <PranayamaDetails id={sendId} />
                </div>
            </div>
        </>
    );
}

export default Pranayama
