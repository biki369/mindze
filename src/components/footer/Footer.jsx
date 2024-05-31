import { Container, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Copyright } from '../copy-right/CopyRight';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .footer-container": {
            // textAlign: "center",
            padding: "3rem",
            backgroundColor: "rgb(28,35,49)",
            color: '#fff',
            "& .footer-links": {
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                // alignItems: 'center',
            },
            "& .ul-items": {
                "& .footer-logo": {
                    "& img": {
                        width: '160px',
                    },
                },

                "& ul": {
                    "& li": {
                        listStyle: "none",
                        display: 'flex',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        gap: "10px",
                        margin: "13px 0",
                        "& a": {
                            fontFamily: 'Montserrat',
                            fontSize: 14,
                            textDecoration: 'none',
                            color: "#fff"
                        },
                        "& h3": {
                            marginBottom: "2rem"
                        }
                    }
                },

                // "& .quick-links'":{
                //     // marginTop:'1rem',
                //     paddingTop:'1rem'
                // }
            },
            "& .social-links": {
                marginTop: "0.8rem",
            }
        },
        "& .cpy-right": {
            padding: '1rem',
            textAlign: 'center',
            fontSize: '2.3rem',
            backgroundColor: "#000",
            "& p": {
                color: "#fff",
                padding: '10px 13px'
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
                                    Lanka, Varanasi, India
                                </li>
                                <li>
                                    <EmailIcon />
                                    info.mindze@gmail.com
                                </li>
                                <li>
                                    <PhoneIcon />
                                    +91 9085661980
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link to={"https://www.facebook.com/people/Mindze/61556522943859/"}> <FacebookIcon /> </Link>
                                    <Link to="https://www.instagram.com/mindze.official/"><InstagramIcon /></Link>
                                    <Link to={"https://twitter.com/i/flow/login?redirect_after_login=%2FMindzeOfficial"}><TwitterIcon /></Link>
                                    <Link to={"https://www.linkedin.com/company/mindze/"}><LinkedInIcon /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul className='quick-links'>
                                <h3>Quick Links</h3>
                                <li>
                                    <Link to={"/quickExercises"}>Quick Exercises</Link>
                                </li>
                                <li>
                                    <Link to={"/mentalTest"}>Mental Health Tests</Link>
                                </li>
                                <li>
                                    <Link to={"/yogaMeditations"}>Yoga and Meditations</Link>
                                </li>
                                <li>
                                    <Link to={"/books"}>Book Summaries</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul className='quick-links'>
                                <h3>Quick Links</h3>
                                <li>
                                    <Link to={"/philosophers"}>Philosophical Perspectives</Link>
                                </li>
                                <li>
                                    <Link to={"/blogs"}>Blogs</Link>

                                </li>
                                <li>
                                    <Link to={"/spiritualCounselors"}>Spiritual counselors</Link>
                                </li>
                                <li>
                                    <Link to={"/philosophicalCounselors"}>Psychological counselors</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="ul-items">
                            <ul>
                                <h3>Legal Stuff</h3>
                                <li>
                                    <a href="/docs/DISCLAIMERS.pdf" target="_blank">Disclaimer</a>
                                </li>
                                <li>
                                    <a href="/docs/Privacy Policy.pdf" target="_blank">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/docs/TERMS OF SERVICE.pdf" target="_blank">Terms Of Service</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="cpy-right">
                <Typography>"Mindze is not a crisis intervention or emergency service. In case of a crisis, severe symptoms, or a life-threatening situation, seek immediate medical help or contact emergency helplines"</Typography>
                <Copyright title="Mindze" to="/" />
            </div>
        </div>
    )
};

export default Footer
