import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <UpcomingEvents />
      <Footer />
    </>
  );
};
export default HomePage;
