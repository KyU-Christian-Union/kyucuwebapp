import { Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-elastic-carousel';
import Testimonial from './Testimonial';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  testimonials_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Testimonials = () => {
  // these breakpoints determine how many cards(testimonies) we want to show as per each screen size
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 }
  ];
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Carousel breakPoints={breakPoints}>
        <Testimonial dummyText="this is a sample testimonial card we are showing so this is the first" />
        <Testimonial dummyText="this is a sample testimonial card we are showing so this is the second" />
        <Testimonial dummyText="this is a sample testimonial card we are showing  so this is the third" />
      </Carousel>
    </Container>
  );
};
export default Testimonials;
