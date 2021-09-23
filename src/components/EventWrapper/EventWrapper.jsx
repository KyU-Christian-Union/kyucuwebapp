import React from 'react';
import { Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
