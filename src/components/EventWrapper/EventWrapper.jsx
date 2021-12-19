import React from 'react';
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
    <div className={classes.eventWrapperContainer}>
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default EventWrapper;
