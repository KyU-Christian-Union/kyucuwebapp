import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Event from './Event';

const useStyles = makeStyles(theme => ({
  eventWrapperContainer: {
    background: '#CFCFCF',
    padding: theme.spacing(0),
    '&>:nth-child(even)': {
      background: 'white'
    }
  }
}));

const EventWrapper = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.eventWrapperContainer}>
      <Event />
      <Event />
      <Event />
      <Event />
    </Container>
  );
};

export default EventWrapper;
