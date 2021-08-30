import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Container, Grid } from '@material-ui/core';
import UpcomingEvent from './UpcomingEvent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)' /* not same as theme.palette.background.default */,
    width: '100vw'
  },
  heading: {
    fontWeight: '600',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem'
    }
  },
  button: {
    margin: 20,
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
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <UpcomingEvent />
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center">
        <Button className={classes.button} variant="contained" color="primary">
          All Events
        </Button>
      </Box>
    </div>
  );
};

export default UpcomingEvents;
