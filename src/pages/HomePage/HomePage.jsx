import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Slider from '../../components/Slider/Slider';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Ministries from '../../components/Ministries/Ministries';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import EverydayChurch from '../../components/EverydayChurch/EverydayChurch';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
import DailyFellowship from '../../components/DailyFellowship/DailyFellowship';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <Slider />
      <EverydayChurch />
      <UpcomingEvents />
      <RecentPosts />
      <Ministries />
      <DailyFellowship />
      <Testimonials />
      <Footer />
    </>
  );
};
export default HomePage;
