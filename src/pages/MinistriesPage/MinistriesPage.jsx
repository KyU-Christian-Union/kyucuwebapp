import React from 'react';
import Footer from '../../components/Footer/Footer';
import AllMinistries from '../../components/AllMinistries/AllMinistries';
import PrivateAppBar from '../../components/AppBars.jsx/PrivateAppBar';

const MinistriesPage = () => {
  return (
    <>
      <PrivateAppBar />
      <AllMinistries />
      <Footer />
    </>
  );
};
export default MinistriesPage;
