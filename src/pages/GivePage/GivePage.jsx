import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShareIcon from '@mui/icons-material/Share';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Banner from '../../components/Banner/Banner';
import BannerImg from '../../assets/images/banner.jpg';
import GiveImage from '../../assets/images/givepage_image.jpg';
import Footer from '../../components/Footer/Footer';
import WaysToGive from '../../components/WaysToGive/WaysToGive';
import MPESA from '../../assets/images/mpesa.png';

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
      <Box
        mt={5}
        mb={5}
        p={2}
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)),url(${GiveImage}), #C4C4C4`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '60vh'
        }}
      >
        {/** logo and icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ bgcolor: 'white', marginRight: 1 }}>
              <YouTubeIcon sx={{ color: 'red' }} />
            </IconButton>
            <Typography color="white" variant="h6">
              KyU CU sermon
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box mr={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AccessTimeFilledIcon sx={{ color: 'white' }} />
              <Typography variant="h6" color="white">
                Watch Later
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ShareIcon sx={{ color: 'white' }} />
              <Typography variant="h6" color="white">
                Share
              </Typography>
            </Box>
          </Box>
        </Box>
        {/** icon */}
        <Box mt={20} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <YouTubeIcon fontSize="large" sx={{ color: 'red' }} />
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ marginBottom: 3 }}>
        <Typography align="center" variant="h1" gutterBottom>
          Ways To Give
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <WaysToGive
              image={MPESA}
              giveWay="IN PERSON"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis."
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <WaysToGive
              image={MPESA}
              giveWay="VIA MPESA"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu urna enim aenean enim cras rutrum mollis convallis."
            />
          </Grid>
        </Grid>
        <Typography align="center" variant="h2" gutterBottom>
          Thankyou for your generosity to this ministry
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default GivePage;
