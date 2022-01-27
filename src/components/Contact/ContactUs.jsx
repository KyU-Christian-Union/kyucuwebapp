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
            contact
        </div>
    )
}
