import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// prettier-ignore
const useStyles = makeStyles(theme => ({}));
// prettier-ignore
export default function Location(){
    return (
        <>
            <Typography variant="h3">Our Location</Typography>
            <iframe title="kyucu map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6234752946766!2d37.31807251415771!3d-0.5662490995868746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182629b5a37f6381%3A0x859cebe37dc37639!2sKirinyaga%20University!5e0!3m2!1sen!2ske!4v1643275930996!5m2!1sen!2ske" width="80%" height="450"   loading="lazy"/>
        </>
    )
}
