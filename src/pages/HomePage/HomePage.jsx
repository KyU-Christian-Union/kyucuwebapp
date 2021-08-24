import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';

const HomePage = () => {
  return (
    <>
      <PublicAppBar />
      <UpcomingEvents />
    </>
  );
};
export default HomePage;
