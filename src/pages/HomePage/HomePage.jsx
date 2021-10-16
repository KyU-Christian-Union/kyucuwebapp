import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Slider from '../../components/ImageSlider/Slider';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Ministries from '../../components/Ministries/Ministries';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <Slider />
      <UpcomingEvents />
      <Ministries />
      <Footer />
    </>
  );
};
export default HomePage;
