import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Event from './Event';

const useStyles = makeStyles(theme => ({
  eventWrapperContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)'
  }
}));

const EventWrapper = () => {
  const classes = useStyles();
  return (
    /** use box instead */
    <Container maxWidth="lg" className={classes.eventWrapperContainer}>
      <Event />
      <Event />
      <Event />
      <Event />
    </Container>
  );
};

export default EventWrapper;
