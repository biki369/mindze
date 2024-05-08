

import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
// import SideMenu from '../../../components/drawer/SideMenu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { blogPostData } from '../../data';
import SideMenu from '../../components/drawer/SideMenu';
import Blogs from './blogs/Blogs';

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

            // "& .side-link": {
            //     width: "100%",
            //     "& button": {
            //         // backgroundColor:"green",
            //         display: 'block',
            //         margin: "10px 0",
            //         // padding:"10px",
            //         // fontSize:'1.3rem',
            //         width: "100%",

            //     }
            // },
            "& .side-link": {
                width: "100%",
                "& button": {
                    // display: 'block',
                    minWidth: "100%",
                }
            },

            "& .qots-container": {
                display: 'flex',
                gap: '0.5rem',
                // alginItem:'center',
                // justifyContent:'center',
                // gap: '1.3rem',
                flexWrap: 'wrap',
                "& .qouts-img": {
                    padding: 10,
                    backgroundColor: "#efe",
                    "& img": {
                        width: '260px',
                        borderRadius: '13px',
                    }
                }
            },


        },
        "& .sub-content": {
            width:'fit-content',
        },
    },


}));

const BlogsMain = () => {
    const classes = useStyles();
    const [sendId, setSendId] = useState(null);

    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('activeTab');
        if (storedValue) {
            setSendId(parseInt(storedValue));
        }
        localStorage.clear()
    }, []);

    const getId = (id) => {
        if (!id) {
            id = 0
        }
        setSendId(id)
        localStorage.setItem('activeTab', id)
    }

    const SideMenuBar = () => {
        return (
            <div className='side-menu'>
                {
                    blogPostData.map((data) => (
                        <div key={data.id} className='side-link'>
                            <Button
                                onClick={() => getId(data.id,toggleDrawer())}
                                style={{
                                    color: sendId === data.id ? '#fff' : '#545e6f',
                                    background: sendId === data.id ? '#3f51b5' : '',
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
                        <div className='side-menu'><SideMenuBar/></div>
                    </SideMenu>
                }
                <div className='sub-content'>
                    <Blogs  id={sendId}/>
                </div>
            </div>
        </>
    );
}

export default BlogsMain;
