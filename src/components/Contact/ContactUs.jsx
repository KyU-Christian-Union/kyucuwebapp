import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, IconButton, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Location from './Location';

// prettier-ignore
const useStyles = makeStyles(theme => ({
    contactInfoContainer: {
        margin: 'auto',
        marginTop: theme.spacing(3),
        textAlign: 'center',
        marginBottom: theme.spacing(3),
        width: '100%'
    },
    contactInfo: {
        marginTop: theme.spacing(4)
    },
    card: {
        border: `solid ${theme.palette.secondary.main} 1.5px`,
        padding: theme.spacing(4),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    icons: {
        background: '#dcedc8',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    formContainer: {
        marginTop: theme.spacing(4)
    },
    formField: {
        width: '60%',
        margin: theme.spacing(2),
        backgroundColor: '#ffffff',
    },
    connect: {
        marginTop: theme.spacing(3)
    },
    connectIcons: {
        margin: 'auto',
        width: '60%',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: theme.spacing(3)
    }
}));

// prettier-ignore
export default function ContactUs() {
    const classes = useStyles();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        // code goes here
    }

    return (
        <div className={classes.contactInfoContainer}>
            <div className={classes.getInTouch}>
                <Typography variant="h2" color="primary" gutterBottom>
                    Get In Touch With Us!
                </Typography>
                <div className={classes.contactInfo}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={4}>
                            <Paper className={classes.card}>
                                <IconButton className={classes.icons} color="secondary" size="large">
                                    <PhoneEnabledIcon />
                                </IconButton>
                                <Typography variant="h5" gutterBottom>
                                    Phone
                                </Typography>
                                <Typography variant="body2">
                                    +254791342771
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={4}>
                            <Paper className={classes.card}>
                                <IconButton className={classes.icons} color="secondary" size="large">
                                    <LocationOnIcon />
                                </IconButton>
                                <Typography variant="h5" gutterBottom>
                                    Address
                                </Typography>
                                <Typography variant="body2">
                                    P. O. Box 183-1030 Kerugoya, Kenya
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={4}>
                            <Paper className={classes.card}>
                                <IconButton className={classes.icons} color="secondary" size="large">
                                    <EmailIcon />
                                </IconButton>
                                <Typography variant="h5" gutterBottom>
                                    Email
                                </Typography>
                                <Typography variant="body2">
                                    info@kyucu.co.ke
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.formContainer}>
                <Typography variant="h2" color="primary" gutterBottom>
                    If You Got Any Questions
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                    Please Do Not Hesitate To Send Us A Message
                </Typography>
                <div>
                    <form onSubmit={handleSubmit} >
                        <TextField
                            color='secondary'
                            variant='outlined'
                            label='name'
                            className={classes.formField}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            color='secondary'
                            variant='outlined'
                            label='email'
                            type='email'
                            className={classes.formField}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            color='secondary'
                            variant='outlined'
                            label='your message'
                            multiline
                            rows={3}
                            className={classes.formField}
                            onChange={(event) => setMessage(event.target.value)}
                        /><br/>
                        <Button type='submit' color='secondary' variant='contained'>Send Message</Button>
                    </form>
                </div>
            </div>
            <div className={classes.connect}>
                <Typography variant='h3' gutterBottom>
                    Connect With Us!
                </Typography>
                <div className={classes.connectIcons}>
                    <IconButton className={classes.icons} color="secondary" size="large">
                        <FacebookIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="secondary" size="large">
                        <InstagramIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="secondary" size="large">
                        <TwitterIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="secondary" size="large">
                        <YouTubeIcon />
                    </IconButton>
                </div>
                    
            </div>
            <Location />
        </div>
    )
}
