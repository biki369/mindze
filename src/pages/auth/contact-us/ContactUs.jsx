import { useState } from 'react';
import { TextField, Button, Typography, Grid, Container, makeStyles } from '@material-ui/core';
import { contactUs } from '../../../api';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "3rem 0",
        "& .form-container": {
            padding: "1rem 6rem",
            // boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
            [theme.breakpoints.down('md')]: {
                padding: "1rem 1rem",
            },
        }
    },
}));

const ContactUs = () => {
    const classes = useStyles()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',

    });

    const handleChange = (property, event) => {
        const accountCopy = { ...formData };
        accountCopy[property] = event.target.value;
        setFormData(accountCopy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.phone_number.length < 10){
            Swal.fire({
                title: 'Error',
                text: "Please enter a valid phone number",
                icon: "error",
                showConfirmButton: false,
                timer: 1600
            })
            return;
        }
        contactUs( "api/contact_us", formData).then((data) => {
            console.log(data,"================")
            if (data) {
                Swal.fire({
                    title: 'Email Sent',
                    // text: data.info,
                    text: "your message is successful send to us. We will contact you shortly through mail/phone",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1900
                })
                // .then((result) => {
                //     if (result.isConfirmed) {
                //         window.location.reload();
                //     }
                // })
            }
        }).catch((err) => {
            console.log(err);
        });

        setFormData({
            name: '',
            email: '',
            phone_number: '',
            message: '',
        })
        
    };

    return (
        <dv >
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Your Name"
                                    name="name"
                                    id='name'
                                    // value={formData.name}
                                    onChange={(e) => handleChange("name", e)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Phone number"
                                    name="phone_number"
                                    id='phone_number'
                                    // value={formData.phone_number}
                                    onChange={(e) => handleChange("phone_number", e)}
                                    variant="outlined"
                                    type='number'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    type="email"
                                    label="Your Email"
                                    name="email"
                                    id='email'
                                    // value={formData.email}
                                    onChange={(e) => handleChange("email", e)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    label="Message"
                                    name="message"
                                    id='message'
                                    // value={formData.message}
                                    onChange={(e) => handleChange("message", e)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </dv>

    );
}

export default ContactUs
