import React from 'react';
import { makeStyles } from '@mui/styles';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/Contact/ContactUs';
import ContactHero from '../../components/Contact/ContactHero';

// prettier-ignore
const useStyles = makeStyles(theme=> ({
    page: {
        background: '#E5E5E5'
    }
}));

// prettier-ignore
export default function ContactPage() {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <PublicAppBar />
            <ContactHero />
            <ContactUs />
            <Footer />
        </div>
    );
}
