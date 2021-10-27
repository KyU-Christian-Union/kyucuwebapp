import React from 'react';
import Footer from '../../components/Footer/Footer';
import AllMinistries from '../../components/AllMinistries/AllMinistries';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';

const MinistriesPage = () => {
  return (
    <>
      <PublicAppBar />
      <AllMinistries />
      <Footer />
    </>
  );
};
export default MinistriesPage;
