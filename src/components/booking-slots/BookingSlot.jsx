import { Button, MenuItem, TextField, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiModal from "../modal/MuiModal";
import CheckIcon from '@material-ui/icons/Check';
import { bookingsSlot, get_time_slots } from "../../api";
import Swal from "sweetalert2";;
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles((theme) => ({
    modalContainer: {
        position: 'relative',
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
            // height: '130px',
            cursor: 'pointer',
            background: "#eee",
            // backgroundColor: theme.palette.background.paper,
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

const BookingSlot = (props) => {
    const { consultant, openModal, setOpenModal, item } = props;
    const classes = useStyles()
    const todayDate = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(todayDate)
    const [openModalSlots, setOpenModalSlots] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [slot, setSlot] = useState(null);
    const [fetchSlots, setFetchSlots] = useState(null);
    let navigate = useNavigate();
    const handleCloseModal = () => {
        setOpenModal(false);
        setDate(todayDate)

    };
    // console.log(fetchSlots?.length, "fetchSlots");

    // ====== function fro check====
    const CheckboxComp = ({ options, }) => {

        const handleChange = (event) => {
            const { value } = event.target;
            // if (selectedOptions.includes(value)) {
            //     setSelectedOptions(selectedOptions.filter((option) => option !== value));
            // } else {
            //     setSelectedOptions([...selectedOptions, value]);
            // }
            setSelectedOptions(value);
        };

        return (
            <div>
                {options.map((option) => (
                    <>
                        <input
                            type="radio"
                            // type="checkbox"
                            key={option}
                            value={option}
                            // checked={selectedOptions.includes(option)}
                            checked={selectedOptions === option}
                            onChange={handleChange}
                        />
                        {/* {option} */}
                    </>
                ))}
            </div>
        );
    };

    const BookingSessionModalComp = ({ consultant }) => {

        const handleDateChange = (event) => {
            setDate(event.target.value);
        };

        const bookSession = () => {
            setOpenModal(false);

            const parameters = {
                consultant: item?.id,
                date: date
            }
            get_time_slots("api/get_time_slots", parameters).then((data) => {
                if (data) {
                    // Swal.fire({
                    //     icon: "success",
                    //     title: `Your booking is successful. We will contact you shortly through mail/phone`,
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })
                    setFetchSlots(data);
                    setOpenModalSlots(true)
                }
            }).catch((e) =>
                Swal.fire({
                    icon: "error",
                    title: `Consultant ID and date are required.`,
                    showConfirmButton: false,
                    timer: 1500
                })
            )
        };

        return (
            <div className={classes.modalContainer}>
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
                            <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {consultant?.price?.monthly}</p>
                        </div>
                        <div className="plan">
                            <CheckboxComp options={['webinar']} />
                            <p className="plan-name">Webinar session</p>
                            <p className="discount"><span><CheckIcon /></span>10% - discount </p>
                            <p className="discount"><span><CheckIcon /></span>10 session price: </p>
                            <p className="discount"><span><CheckIcon /></span>5 session price:</p>
                            <p className="validity"><span><CheckIcon /></span>Validity : 4 months </p>
                            <p className="plan-price"><span><LocalOfferIcon /></span> ₹ {consultant?.price?.annual}</p>
                        </div>
                    </div>

                    <div className='booked-session-btn'
                        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: "1rem" }}

                    >
                        {/* <DatePicker selectedDate={selectedDate} onChange={handleDateChange} /> */}
                        <input type="date" value={date} min={todayDate} onChange={(event) => handleDateChange(event)} />
                        <Button variant="contained" onClick={bookSession} color="primary">Fetch Slots</Button>
                    </div>
                </MuiModal>
            </div>
        )
    };

    const AvailableSlotsModal = () => {
        const handleChangeSlot = (event) => {
            setSlot(event.target.value);
        }
        const BookedSlot = () => {
            if (slot === null) {
                Swal.fire({
                    icon: "error",
                    title: `Please select slot.`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            const parameters = {
                consultant: item?.id,
                slot: slot,
            }
            bookingsSlot("api/bookings", parameters, localStorage.getItem("token")).then((data) => {
                if (data) {
                    Swal.fire({
                        icon: "success",
                        title: `Your booking is successful. We will contact you shortly through mail/phone`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/login-user")
                }
            }).catch((err) => {
                if (err) {
                    setOpenModalSlots(false);
                    Swal.fire({
                        icon: "error",
                        title: `Something went wrong. Please try again.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }

        const handleCloseSlotsModal = () => {
            setOpenModalSlots(false);
        }

        return (
            <>
                <MuiModal open={openModalSlots} onClose={handleCloseSlotsModal}>
                    <div className='booked-session-btn'
                        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', margin: "1rem 0", width: '100%' }}
                    >
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Available Slots"
                            value={slot}
                            onChange={handleChangeSlot}
                            style={{ width: '200px' }}
                        // helperText="Please select your currency"
                        >
                            {/* {fetchSlots.length === 0 ? " No slots available" : ""} */}
                            {fetchSlots?.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    Slot: {option.id}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button variant="contained" onClick={BookedSlot} color="primary">Book Slot</Button>
                    </div>

                </MuiModal>

            </>

        )

    }

    return (
        <div>
            <AvailableSlotsModal />
            <BookingSessionModalComp consultant={consultant} />

        </div>
    )
}

export default BookingSlot
