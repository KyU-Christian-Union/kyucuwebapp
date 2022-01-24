import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/Contact/ContactUs';
import ContactHero from '../../components/Contact/ContactHero';

// prettier-ignore
export default function ContactPage() {
    return (
        <>
            <PublicAppBar />
            <ContactHero />
            <ContactUs />
            <Footer />
        </>
    );
}
