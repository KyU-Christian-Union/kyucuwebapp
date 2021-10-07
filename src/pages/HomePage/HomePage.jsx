import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Footer from '../../components/Footer/Footer';
import EverydayChurch from '../../components/EverydayChurch/EverydayChurch';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <EverydayChurch />
      <UpcomingEvents />
      <Footer />
    </>
  );
};
export default HomePage;
