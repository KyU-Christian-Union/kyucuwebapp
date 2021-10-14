import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Ministries from '../../components/Ministries/Ministries';
import Footer from '../../components/Footer/Footer';
import RecentPosts from '../../components/RecentPosts/RecentPosts';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <UpcomingEvents />
      <RecentPosts />
      <Ministries />
      <Footer />
    </>
  );
};
export default HomePage;
