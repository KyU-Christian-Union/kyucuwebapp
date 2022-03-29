import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/Contact/ContactUs';
import BannerImg from '../../assets/images/banner.jpg';
import Banner from '../../components/Banner/Banner';

export default function ContactPage() {
  return (
    <>
      <PublicAppBar />
      <Banner imgSource={BannerImg} heading="Contact Us" subtitle="We would love to hear from you" />
      <ContactUs />
      <Footer />
    </>
  );
}
