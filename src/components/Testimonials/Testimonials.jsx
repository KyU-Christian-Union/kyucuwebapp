import { Container, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-elastic-carousel';
import Testimonial from './Testimonial';
import image1 from '../../assets/images/user-1.jpg';
import image2 from '../../assets/images/user2.jpg';
import image3 from '../../assets/images/user3.jpg';
import image4 from '../../assets/images/user4.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  testimonials_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
    color: theme.palette.primary.dark
  },
  testimonials_intro_text: {
    textAlign: 'center',
    lineHeight: '30px',
    marginBottom: '10px',
    color: theme.palette.primary.light
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
      <Typography className={classes.title}>Testimonials</Typography>
      <Typography className={classes.testimonials_intro_text}>
        Get to know what the Lord has done and is doing in people&apos;s lives
      </Typography>
      <Carousel breakPoints={breakPoints}>
        <Testimonial
          commentTitle="amazing leadership"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image1}
          commentorName="Kevin Maunga"
          commentorPosition="fourth year student"
        />
        <Testimonial
          commentTitle="supportive community"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image2}
          commentorName="Jack sylvester"
          commentorPosition="medicine graduate, JKUAT"
        />
        <Testimonial
          commentTitle="organized order of service"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image4}
          commentorName="Ann Wangari"
          commentorPosition="fourth year student"
        />
        <Testimonial
          commentTitle="nice ushers"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image3}
          commentorName="claire anita"
          commentorPosition="lecture, University of Nairobi"
        />
        <Testimonial
          commentTitle="nice ushers"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image3}
          commentorName="claire anita"
          commentorPosition="lecture, University of Nairobi"
        />
        <Testimonial
          commentTitle="nice ushers"
          comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
          commentorProfilePicture={image3}
          commentorName="claire anita"
          commentorPosition="lecture, University of Nairobi"
        />
      </Carousel>
    </Container>
  );
};
export default Testimonials;
