import React from 'react';
import { makeStyles } from '@mui/styles';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/Contact/ContactUs';
import ContactHero from '../../components/Contact/ContactHero';
import BannerImg from '../../assets/images/banner.jpg';
import Banner from '../../components/Banner/Banner';

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
        < >
            <PublicAppBar />
            <Banner imgSource={BannerImg} heading="Contact Us" subtitle="We would love to hear from you" />
            {/* <ContactHero /> */}
            <ContactUs />
            <Footer />
        </>
    );
}
