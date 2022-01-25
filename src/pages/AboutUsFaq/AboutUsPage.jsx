import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Container, Paper } from '@mui/material';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import AboutStatement from '../../components/AboutUs/AboutStatements';
import Objectives from '../../components/AboutUs/AboutObjectives/Objectives';
import Footer from '../../components/Footer/Footer';
import bgImg from '../../assets/images/post_image.jpg';

const useStyles = makeStyles({
  about__header: {
    height: 'clamp(15rem, 15rem, 15rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)),url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
});
const AboutUsPage = () => {
  const classes = useStyles();
  return (
    <>
      <PublicAppBar />
      <Paper className={classes.about__header}>
        <Typography variant="h2" style={{ color: '#fff', textTransform: 'capitalize' }}>
          who we are
        </Typography>
        <Typography variant="h4" style={{ color: '#fff', textTransform: 'capitalize', marginTop: '1rem' }}>
          serving god in spirit and in truth
        </Typography>
      </Paper>
      <Container>
        <div>
          <AboutStatement
            title="our mission"
            text="To nurture and raise a spiritual army of God ready to change the society, equipped with integrity, honesty, self control by transforming them according to the word of God."
          />
          <AboutStatement
            title="our vision"
            text="To be the source of true shining light in the campus and to the entire globe for God's glory."
          />
        </div>
      </Container>
      {/* objectives part */}
      <Paper elevation={2} style={{ padding: '.5rem' }}>
        <Typography align="center" variant="h2" style={{ color: '#111', textTransform: 'capitalize' }}>
          our objectives
        </Typography>
        <Objectives />
      </Paper>
      <Footer />
    </>
  );
};
export default AboutUsPage;
