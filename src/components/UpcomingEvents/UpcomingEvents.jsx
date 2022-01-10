import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import UpcomingEvent from './UpcomingEvent';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '8px',
      paddingRight: '8px'
    }
  },
  heading: {
    marginTop: theme.spacing(4),
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
      fontWeight: 700
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    }
  },
  buttonlink: {
    textDecoration: 'none'
  }
}));

const UpcomingEvents = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h1" className={classes.heading} align="center" gutterBottom>
          Upcoming Events
        </Typography>
        <Container sx={{ pl: 0, pr: 0, mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UpcomingEvent name="Evangelism Weekend" date="Thu, Nov 20, 10:30 AM" venue="LH9, Main Campus" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UpcomingEvent name="Evangelism Weekend" date="Thu, Nov 20, 10:30 AM" venue="LH9, Main Campus" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UpcomingEvent name="Evangelism Weekend" date="Thu, Nov 20, 10:30 AM" venue="LH9, Main Campus" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <UpcomingEvent name="Evangelism Weekend" date="Thu, Nov 20, 10:30 AM" venue="LH9, Main Campus" />
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => history.push('/events')}>
            VIEW MORE
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
