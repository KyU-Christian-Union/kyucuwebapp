import { Container, Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  eventContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  eventImage: {
    objectFit: 'cover'
  },
  eventHeader: {
    fontWeight: 700,
    fontSize: '2rem',
    textDecoration: 'underline',
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase'
  },
  eventsubHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(1)
  },
  eventInfo: {
    marginBottom: theme.spacing(1),
    fontSize: '1.2rem'
  },
  eventButton: {
    padding: theme.spacing(1.5)
  }
}));

const Event = () => {
  const classes = useStyles();
  return (
    <Container className={classes.eventContainer} maxWidth="lg">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/** change image size for sm devices */}
            {/** position the date on top of the image and add a z-index */}
            <img
              src={upcomingeventImage}
              alt=" eventPicture"
              width="100%"
              height="100%"
              className={classes.eventImage}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h3" className={classes.eventHeader}>
              Faith Nature Classes
            </Typography>
            <Typography variant="h4" className={classes.eventsubHeader}>
              Wednesday,August 11,2021 1:00 PM - 7:00 PM
            </Typography>
            <Typography variant="h6" className={classes.eventInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis odio eveniet facere
              consequatur porro nisi ex, molestias culpa dignissimos, libero ipsam, et aliquid! Cum deleniti nemo quo
              consequatur voluptatum.
            </Typography>
            <Button variant="contained" color="primary" className={classes.eventButton}>
              Learn More
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Event;
