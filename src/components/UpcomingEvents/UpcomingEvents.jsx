import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import UpcomingEvent from './UpcomingEvent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)' /* not same as theme.palette.background.default */,
    width: '100vw'
  },
  heading: {
    h1: theme.typography.h1,
    fontWeight: '600'
  },
  wrapper: {
    maxWidth: '100%'
  },
  button: {
    margin: 15,
    fontSize: 22
  }
}));

const UpcomingEvents = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading} align="center">
        Upcoming Events
      </Typography>
      <Box
        className={classes.wrapper}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <UpcomingEvent />
        <UpcomingEvent />
        <UpcomingEvent />
        <UpcomingEvent />
      </Box>
      <Box textAlign="center">
        <Button className={classes.button} variant="contained" color="primary">
          All Events
        </Button>
      </Box>
    </div>
  );
};

export default UpcomingEvents;
