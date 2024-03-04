import { Container, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Copyright } from '../copy-right/CopyRight';





const useStyles = makeStyles((theme) => ({
    root: {
        "& .footer-container": {
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "rgb(28,35,49)",
            color: '#fff',
            "& .footer-links": {
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            "& .ul-items": {

                "& .footer-logo": {
                    "& img": {
                        width: '160px',
                    }
                },
                "& li": {
                    listStyle: "none",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: "10px",
                    margin: "13px 0",
                    "& a": {
                        textDecoration: 'none',
                        color: "#fff"
                    },
                    "& h3": {
                        marginBottom: "2rem"
                    }
                }
            },
        },
        "& .cpy-right": {
            padding: '1rem',
            textAlign: 'center',
            fontSize: '2.3rem',
            backgroundColor: "#000",
            "& p": {
                color: "#fff",
            }
        }

    },
}));

const Footer = () => {

    const classes = useStyles();


    return (
        <div className={classes.root}>

            <div className="footer-container">
                <Container>
                    <div className='footer-links'>

                        <div className="ul-items">
                            <ul>
                                <div className="footer-logo">
                                    <img src="/src/assets/logo-removebg.png" alt="" />
                                </div>
                                <li>
                                    <LocationOnIcon />
                                    xyz,xyz , india
                                </li>
                                <li>
                                    <EmailIcon />
                                    xyz@email.com
                                </li>
                                <li>
                                    <PhoneIcon />
                                    +91 xxxxxxxxx
                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul>
                                <h3>Quick Links</h3>
                                <li>
                                    <a href="#">xyz</a>
                                </li>
                                <li>
                                    <a href="#">xyz</a>
                                </li>
                                <li>
                                    <a href="#">xyz</a>
                                </li>

                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul>
                                <h3>Quick Links</h3>
                                <li>
                                    <a href="#">xyz</a>
                                </li>
                                <li>
                                    <a href="#">xyz</a>
                                </li>
                                <li>
                                    <a href="#">xyz</a>
                                </li>

                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul>
                                <h3>Legal Stuff</h3>
                                <li>
                                    <a href="#">Disclaimer</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms Of Service</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>

            </div>
            <div className="cpy-right">
                <Typography > Mindze  <Copyright/>  </Typography>
            </div>
        </div>
    )
}

export default Footer
