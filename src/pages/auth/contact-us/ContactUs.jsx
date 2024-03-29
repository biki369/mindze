import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"3rem 0"
    },
}));

const ContactUs = () => {
    const classes = useStyles()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNum:'',
        message: '',

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log(formData);
    };

    return (
        <dv >
            <Container maxWidth="md" className={classes.root}>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Phone number"
                                name="phone"
                                value={formData.phoneNum}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                type="email"
                                label="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.message}
                                onChange={handleChange}
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
            </Container>
        </dv>

    );
}

export default ContactUs
