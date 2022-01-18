import { Container } from '@mui/material';
import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../assets/images/banner.jpg';

const GivePage = () => {
  return (
    <>
      <PublicAppBar />
      <Banner imgSource={BannerImg} heading="Give" subtitle="Your Generosity Is Making A Difference" />
      <Container>givegive</Container>
    </>
  );
};

export default GivePage;
