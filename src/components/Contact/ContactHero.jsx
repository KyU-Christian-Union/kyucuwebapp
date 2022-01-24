import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import eventsHeader from '../../assets/images/eventspageheader_image.jpg';

// prettier-ignore
const useStyles = makeStyles(theme => ({
    heroText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        fontWeight: 800,
        width: '100%',
        color: '#ffffffff',
        background: 'transparent',
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    heroImage: {
        width: '100%',
        maxHeight: 480
    },
    heroContainer: {
        position: 'relative'
    }
}));

// prettier-ignore
export default function ContactHero(){
    const classes = useStyles();
    return (
        <>
            <div className={classes.heroContainer}>
            <img src={eventsHeader} alt="ContactImage" className={classes.heroImage} />
            <Typography className={classes.heroText} variant='h2'>
                Contact Us
                <Typography variant="h3"  component='p'>
                    We Would Love To Hear From You!
                </Typography>
            </Typography>
            </div>
        </>
    );
}
