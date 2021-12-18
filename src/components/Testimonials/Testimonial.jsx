/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  testimonial_card: {
    width: 'clamp(20rem, 20rem, 20rem)',
    margin: '2rem',
    backgroundColor: 'red'
  }
}));
const Testimonial = ({ dummyText }) => {
  const classes = useStyles();
  return <Paper className={classes.testimonial_card}>{dummyText}</Paper>;
};
export default Testimonial;
