

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import SideMenu from '../../../components/drawer/SideMenu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { quotationsData } from '../../../data';
import QuotationByCat from './QuotationByCat';

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
                    // backgroundColor:"green",
                    display: 'block',
                    margin: "10px 0",
                    // padding:"10px",
                    // fontSize:'1.3rem',
                    width: "100%",

                }
            }


        },
        "& .sub-content": {

        },
    },


}));

const Quotations = () => {
    const classes = useStyles();
    const [sendId, setSendId] = useState(null);

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    
    const getId = (id) => {
        if (!id) {
            id = 0
        }
        return setSendId(id)
    }

    // const [expanded, setExpanded] = React.useState(false);

    const SideMenuBar = () => {
        return (
            <div className='side-menu'>
                {
                    quotationsData.map((data) => (
                        <div key={data.id} className='side-link'>
                            <Button
                                onClick={() => getId(data.id)}
                                style={{
                                    color: sendId === data.id ? '#fff' : '#545e6f',
                                    background: sendId === data.id ? '#3f51b5' : '',
                                    width: "100%",
                                    margin: "10px 0"

                                }}
                            >{data.category}</Button>
                        </div>

                    ))
                }
            </div>
        )
    }

    return (
        <>
            {mobileDevice && <IconButton onClick={toggleDrawer} ><ChevronRightIcon /></IconButton >}
            <div className={classes.root}>
                {!mobileDevice && <SideMenuBar />}
                {
                    mobileDevice && <SideMenu isOpen={drawerOpen} onClose={toggleDrawer} anchor='left'>
                        <div className='side-menu'><SideMenuBar onClick={toggleDrawer} /></div>
                    </SideMenu>
                }
                <div className='sub-content'>
                    <QuotationByCat id={sendId} />
                </div>
            </div>
        </>
    );
}

export default Quotations
