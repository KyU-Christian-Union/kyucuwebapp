import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from 'react-router-dom';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(() => ({
  eventImage: {
    objectFit: 'cover'
  },
  eventHeader: {
    textDecoration: 'underline',
    textTransform: 'uppercase'
  }
}));

const Event = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Container maxWidth="xl" sx={{ pl: '8px', pr: '8px', pt: 5, pb: 5 }}>
      <Container maxWidth="md" sx={{ p: 0 }}>
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
            <Typography variant="h2" className={classes.eventHeader} gutterBottom>
              Faith Nature Classes
            </Typography>
            <Typography variant="h5" className={classes.eventsubHeader} sx={{ p: 0, mb: 1 }}>
              Wednesday,August 11,2021 1:00 PM - 7:00 PM
            </Typography>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 400 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis odio eveniet facere
              consequatur porro nisi ex, molestias culpa dignissimos, libero ipsam, et aliquid! Cum deleniti nemo quo
              consequatur voluptatum.
            </Typography>
            {/** will change to dynamic id after fetching from the db */}

            <Button variant="contained" onClick={() => history.push('/events/id')}>
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
