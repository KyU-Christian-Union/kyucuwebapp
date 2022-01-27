import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Location from './Location';

// prettier-ignore
const useStyles = makeStyles(theme => ({
    contactInfoContainer: {
        margin: 'auto',
        marginTop: theme.spacing(5),
        textAlign: 'center',
        marginBottom: theme.spacing(5),
        width: '80%'
    },
    contactInfo: {
        marginLeft: theme.spacing(5),
        textAlign: 'start'
    },
    contactForm: {
        textAlign: 'start',
        width: '80%',
    },
    fieldContainer: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    submitBtn: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: theme.spacing(2),
        width: '100%'
    },
    fields: {
        width: '100%',
        background: '#ffffff'
    }
}));

// prettier-ignore
export default function ContactUs() {
    const classes = useStyles();

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        // code goes here
    }

    return (
        <div className={classes.contactInfoContainer}>
            <Typography variant='h1'>Contact Information</Typography>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} lg={6} >
                    <div className={classes.contactInfo}>
                        <Typography variant='h3' sx={{
                            marginBottom: '4px'
                        }}>Phone Number</Typography>
                        <Typography variant='body2' sx={{
                            marginBottom: '20px'
                        }}>+ 254791342771</Typography>

                        <Typography variant='h3' sx={{
                            marginBottom: '8px'
                        }}>Email</Typography>
                        <Typography variant='body2' sx={{
                            marginBottom: '20px'
                        }}>info@kyucu.co.ke</Typography>

                        <Typography variant='h3' sx={{
                            marginBottom: '8px'
                        }}>Address</Typography>
                        <Typography variant='body2' sx={{
                            marginBottom: '20px'
                        }}>P.O. Box 183-1030 Kerugoya, Kenya</Typography>
                    </div> 
                </Grid>

                <Grid item xs={12} md={6} lg={6} >
                    <div>
                        <Typography variant='h3'>Leave Us A Message</Typography>
                        <form className={classes.contactForm} onSubmit={handleSubmit}>
                            <div className={classes.fieldContainer}>
                                <Typography gutterBottom> Name *</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField variant='outlined' size='small' label='firstname' 
                                        required className={classes.fields} 
                                        onChange={e => setFirstname(e.target.value)} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField variant='outlined' size='small' label='lastname'
                                         required  className={classes.fields}
                                         onChange={e => setLastname(e.target.value)}/>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.fieldContainer}>
                                <TextField variant='outlined' size='small' label='email' 
                                required className={classes.fields} 
                                onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className={classes.fieldContainer}>
                                <TextField variant='outlined' size='small' label='message'
                                 required multiline rows={4} className={classes.fields}
                                 onChange = {e => setMessage(e.target.value)}
                                 />
                            </div>

                            <div className={classes.submitBtn}>
                                <Button type='submit' variant='contained' color='primary'>Submit</Button>
                            </div>

                        </form>
                    </div>
                </Grid>
            </Grid>
            <Location />
        </div>
    )
}
