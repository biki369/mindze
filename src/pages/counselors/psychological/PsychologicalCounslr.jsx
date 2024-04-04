import { useState } from 'react'
import { Avatar, Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { counselorsData } from '../../../data';
import { Link } from 'react-router-dom';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MuiModal from '../../../components/modal/MuiModal';
import DatePicker from '../../../components/mui-date-picker/DatePicker';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        "& .counselor-container": {
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            "& .counselor": {
                padding: "6px 10px",
                // width: 400,
                display: "flex",
                gap: 16,
                cursor: "pointer",
                [theme.breakpoints.down(500)]: {
                    width: "100%",
                },
                "& .counselor-about": {
                    "& > div": {
                        margin: "2px 0"
                    },
                    "& .name": {
                        fontSize: '1rem',
                        fontWeight: 600,
                        display: "flex",
                        alignItems: 'center',
                        gap: 10,
                        "& .counslr-online": {
                            display: "inline-block",
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            // backgroundColor: "#00b894",
                            // boxShadow: "0 0 0 2px #00b894",
                        }
                    },
                    "& .edu": {
                        display: "flex",
                        gap: 10,
                        color: "#000",
                        alignItems: 'center',
                    },
                },
            },
            "& .designation-section": {
                padding: '10px 20px 0 20px',
                "& .designation, & .interest": {
                    fontSize: 13,
                    color: '#000',
                    fontWeight: 500,
                    display: 'flex',

                    alignItems: 'center',
                    gap: 10,
                    "& svg": {
                        color: '#303f9f',
                    }
                },
            },

            "& .price-section": {
                paddingTop: '3px',
                marginBottom: "1rem",
            },
            "& .paper-dev": {
                padding: "10px 6px",
            }
        },
    },

    plans: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '1rem',
        flexWrap: 'wrap',
        "& .plan": {
            width: '230px',
            cursor: 'pointer',
            background: "#eee",
            borderRadius: 10,
            padding: 13,

            "& .plan-name": {
                fontSize: "1.3rem",
                fontWeight: 600,
                margin: '13px 0',
                textAlign: 'center',
                textTransform: 'capitalize'
            },
            "& .plan-price": {
                fontSize: 16,
                fontWeight: 600,
                margin: '10px 0',
                textTransform: 'capitalize'
            },
            "& p": {
                display: 'flex',
                alignItems: 'center',
                gap: "6px",
                fontWeight: 600,
                "& svg": {
                    color: '#303f9f',
                }
            }
        }

    },

    counslrAvatar: {
        width: 90,
        height: 90,
    }
}));

const PsychologicalCounslr = () => {

    const todayDate = new Date();

    const classes = useStyles();

    const [date, setDate] = useState(todayDate)

    const [selectedDate, setSelectedDate] = useState();

    // console.log(todayDate, "todayDate");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // ====== function fro check====
    const CheckboxComp = ({ options }) => {
        const [selectedOptions, setSelectedOptions] = useState([]);

        const handleChange = (event) => {
            const { value } = event.target;

            if (selectedOptions.includes(value)) {
                setSelectedOptions(selectedOptions.filter((option) => option !== value));
            } else {
                setSelectedOptions([...selectedOptions, value]);
            }
        };

        return (
            <div>
                {options.map((option) => (
                    <>
                        <input
                            type="checkbox"
                            key={option}
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={handleChange}
                        />
                        {/* {option} */}
                    </>
                ))}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <div className='counselor-container'>
                {
                    counselorsData.map((e, i) => (
                        <Paper key={i} className='paper-dev'>
                            <div className="counselor" >
                                <div className="counselor-img">
                                    <Avatar alt="" src={e.img} className={classes.counslrAvatar} />
                                </div>
                                <div className="counselor-about">
                                    <div className="name">{e.name}</div>
                                    <div className="exp">{e.exp}+ years of experience</div>
                                </div>
                            </div>
                            <div className='designation-section'>
                                <div className="designation">
                                    <span><StarsIcon /></span> <strong>designation:</strong> {e.designation}
                                </div>
                                <div className='interest'>
                                    <span><CheckCircleIcon /></span><strong>interest:</strong>{e.interest}
                                </div>
                                {/* <div className="edu"><span><SchoolIcon /></span> {e.education}</div> */}
                            </div>
                            <div className='designation-section price-section'>
                                <div className="designation">
                                    <span><LocalOfferIcon /></span> <strong>Individual session price:</strong>₹  {e.price.annual}
                                </div>
                                <div className='interest'>
                                    <span><LocalOfferIcon /></span><strong>Webinar session price</strong>₹  {e.price.monthly}
                                </div>

                            </div>

                            <Grid container mt={2}
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={2}></Grid>
                                <Grid item xs={12} sm={5}>
                                    <Button variant="outlined" color="primary">
                                        <Link to={`/counselor/${e.id}`}>View Profile</Link>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Button variant="contained" color="primary"
                                        onClick={handleOpenModal}
                                    >Book session</Button>
                                </Grid>
                            </Grid>

                            <div className='modal-container'>
                                <MuiModal open={openModal} onClose={handleCloseModal} title="Book an Appointment">
                                    {/* <DatePicker selectedDate={selectedDate} onChange={handleDateChange} /> */}
                                    <div className={classes.plans}>
                                        <div className="plan">
                                            <CheckboxComp options={['individual']} />
                                            <p className="plan-name">Individual session</p>
                                            <p className="discount"><span><CheckIcon /></span>10% - discount </p>
                                            <p className="discount"><span><CheckIcon /></span>1 session price: </p>
                                            <p className="discount"><span><CheckIcon /></span>5 session price:</p>
                                            <p className="validity"><span><CheckIcon /></span>Validity : 2 months </p>
                                            <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {e.price.monthly}</p>
                                        </div>
                                        <div className="plan">
                                            <CheckboxComp options={['webinar']} />
                                            <p className="plan-name">Webinar session</p>
                                            <p className="discount"><span><CheckIcon /></span>10% - discount </p>
                                            <p className="discount"><span><CheckIcon /></span>10 session price: </p>
                                            <p className="discount"><span><CheckIcon /></span>5 session price:</p>
                                            <p className="validity"><span><CheckIcon /></span>Validity : 4 months </p>
                                            <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {e.price.annual}</p>
                                        </div>
                                    </div>

                                    <div className='booked-session-btn'
                                        style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "1rem" }}

                                    >
                                        <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
                                        <Button onClick={handleCloseModal} variant="contained" color="primary">Book</Button>
                                    </div>
                                </MuiModal>
                            </div>
                        </Paper>
                    ))
                }
            </div>
        </div >
    )
}

export default PsychologicalCounslr
