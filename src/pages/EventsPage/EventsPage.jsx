import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      {/** add a centered typography */}
      <EventWrapper />
      <Footer />
    </>
  );
};

export default EventsPage;
