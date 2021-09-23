import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import UpcomingEvent from './UpcomingEvent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  },
  heading: {
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
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
  },
  buttonlink: {
    textDecoration: 'none'
  }
}));

const UpcomingEvents = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h1" className={classes.heading} align="center">
        Upcoming Events
      </Typography>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <UpcomingEvent />
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center">
        <Link to="/events" className={classes.buttonlink}>
          <Button className={classes.button} variant="contained" color="primary">
            All Events
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default UpcomingEvents;
