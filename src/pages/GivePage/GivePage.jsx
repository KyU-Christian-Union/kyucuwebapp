import { Container, Typography } from '@mui/material';
import React from 'react';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../assets/images/banner.jpg';

const GivePage = () => {
  return (
    <>
      <PublicAppBar />
      <Banner imgSource={BannerImg} heading="Give" subtitle="Your Generosity Is Making A Difference" />
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom sx={{ paddingTop: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nunc pretium risus sit scelerisque non viverra.
          Luctus nulla vitae sodales ullamcorper urna. Posuere ut platea etiam molestie vulputate purus, placerat in
          aliquet. Cras lorem sagittis, massa pharetra adipiscing eu, consectetur mattis. Elementum vel nunc tincidunt
          aenean varius. Laoreet elementum eget feugiat aliquam arcu scelerisqueLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Enim nunc pretium risus sit scelerisque non viverra. Luctus nulla vitae sodales ullamcorper
          urna. Posuere ut platea etiam molestie vulputate purus, placerat in aliquet. Cras lorem sagittis, massa
          pharetra adipiscing eu, consectetur mattis. Elementum vel nunc tincidunt aenean varius. Laoreet elementum eget
          feugiat aliquam arcu scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nunc pretium
          risus sit scelerisque non viverra. Luctus nulla vitae sodales ullamcorper urna. Posuere ut platea etiam
          molestie vulputate purus, placerat in aliquet. Cras lorem sagittis, massa pharetra adipiscing eu, consectetur
          mattis. Elementum vel nunc tincidunt aenean varius. Laoreet elementum eget feugiat aliquam arcu
          scelerisqueLorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nunc pretium risus sit scelerisque
          non viverra. Luctus nulla vitae sodales ullamcorper urna. Posuere ut platea etiam molestie vulputate purus,
          placerat in aliquet. Cras lorem sagittis, massa pharetra adipiscing eu, consectetur mattis. Elementum vel nunc
          tincidunt aenean varius. Laoreet elementum eget feugiat aliquam arcu scelerisque.
        </Typography>
      </Container>
    </>
  );
};

export default GivePage;
