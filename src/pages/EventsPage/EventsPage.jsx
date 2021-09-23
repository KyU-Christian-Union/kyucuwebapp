import { Container } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import EventWrapper from '../../components/EventWrapper/EventWrapper';
import Footer from '../../components/Footer/Footer';
import eventsHeader from '../../assets/images/eventspageheader_image.jpg';

const useStyles = makeStyles(theme => ({
  image: {
    objectFit: 'cover',
    padding: theme.spacing(0),
    margin: theme.spacing(0)
  },
  imageContainer: {
    padding: theme.spacing(0),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply,normal'
  }
}));

const EventsPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        maxWidth="lg"
        className={classes.imageContainer}
        style={{
          backgroundImage: `url(${eventsHeader})`,
          height: '515px',
          width: '100%',
          filter: 'blur(3px)'
        }}
      />
      {/** add an 'Upcoming Events' centered typography */}
      <EventWrapper />
      <Footer />
    </>
  );
};

export default EventsPage;
