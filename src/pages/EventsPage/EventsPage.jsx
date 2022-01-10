import { Typography } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import EventWrapper from '../../components/EventWrapper/EventWrapper';
import Footer from '../../components/Footer/Footer';
import eventsHeader from '../../assets/images/eventspageheader_image.jpg';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';

const useStyles = makeStyles(() => ({
  eventsImage: {
    width: '100%',
    height: '70vh',
    filter: 'blur(4px)',
    objectFit: 'cover'
  },
  eventsImageParent: {
    position: 'relative'
  }
}));

const EventsPage = () => {
  const classes = useStyles();
  return (
    <>
      <PublicAppBar />
      <div className={classes.eventsImageParent}>
        <img src={eventsHeader} alt="EventsImage" className={classes.eventsImage} />
        <Typography
          variant="h1"
          align="center"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            color: 'white',
            fontWeight: 800,
            width: '100%'
          }}
        >
          Upcoming Events
        </Typography>
      </div>
      <EventWrapper />
      <Footer />
    </>
  );
};

export default EventsPage;
