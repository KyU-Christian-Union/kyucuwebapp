import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import AboutStatement from '../../components/AboutUs/AboutStatements';
import Objectives from '../../components/AboutUs/AboutObjectives/Objectives';
import AboutLeadership from '../../components/AboutUs/AboutLeadership/AboutLeadership';
import DepartmentalLeaders from '../../components/AboutUs/DepartmentalLeaders/DepartMentalLeaders';
import Footer from '../../components/Footer/Footer';
import bgImg from '../../assets/images/post_image.jpg';
import Banner from '../../components/Banner/Banner';

const AboutUsPage = () => {
  return (
    <>
      <PublicAppBar />
      <Banner heading="Who we are" subtitle="Serving god in spirit and in truth" imgSource={bgImg} />
      <Container maxWidth="lg">
        <Box mt={5} mb={8}>
          <AboutStatement
            title="our mission"
            text="To nurture and raise a spiritual army of God ready to change the society, equipped with integrity, honesty, self control by transforming them according to the word of God."
          />
          <AboutStatement
            title="our vision"
            text="To be the source of true shining light in the campus and to the entire globe for God's glory."
          />
        </Box>
      </Container>
      {/* objectives part */}
      <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
        <Typography align="center" variant="h1" gutterBottom sx={{ textTransform: 'capitalize', marginBottom: 5 }}>
          our objectives
        </Typography>
        <Objectives />
      </Container>
      {/* the leadership part */}
      <Container maxWidth="lg">
        <Typography align="center" variant="h1" style={{ textTransform: 'capitalize' }} gutterBottom>
          our leadership
        </Typography>
        <Typography align="center" variant="h6" sx={{ textTransform: 'capitalize', fontWeight: '300' }} gutterBottom>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, alias! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem, doloribus?
        </Typography>
        <AboutLeadership />
      </Container>

      {/* the departmental leaders part */}
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography align="center" variant="h1" sx={{ textTransform: 'capitalize' }} gutterBottom>
          Department leads
        </Typography>
        <Typography
          align="center"
          variant="h6"
          sx={{ textTransform: 'capitalize', fontWeight: '300', marginBottom: 5 }}
          gutterBottom
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, alias! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem, cupiditate. Lorem ipsum dolor
        </Typography>
        <DepartmentalLeaders />
      </Container>
      <Footer />
    </>
  );
};
export default AboutUsPage;
