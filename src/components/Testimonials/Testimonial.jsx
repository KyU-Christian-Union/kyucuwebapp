/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  testimonial_typography: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  testimonial_title: {
    // fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    // margin: theme.spacing(1),
    color: theme.palette.primary.dark
  },

  image_fix: {
    width: '5rem',
    height: '5rem',
    margin: 'auto',
    marginBottom: theme.spacing(1)
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'contain',
    borderRadius: '50%'
  },
  commentor_name: {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2E002E'
  },
  commentor_position: {
    fontSize: '14px',
    textTransform: 'capitalize'
  }
}));
const Testimonial = ({ commentTitle, comment, commentorProfilePicture, commentorName, commentorPosition }) => {
  const classes = useStyles();
  return (
    <Box sx={{ margin: '20px 1rem' }}>
      <Paper className={classes.testimonial_typography}>
        <Typography variant="h4" noWrap gutterBottom className={classes.testimonial_title}>
          {commentTitle}
        </Typography>
        <Typography align="justify" sx={{ fontSize: '15px', lineHeight: '25px', fontWeight: 500, color: 'black' }}>
          {comment}
        </Typography>
      </Paper>
      <div>
        <div className={classes.image_fix}>
          <img src={commentorProfilePicture} alt={commentorName} className={classes.image} />
        </div>
        <Typography className={classes.commentor_name} align="center" gutterBottom>
          {commentorName}
        </Typography>
        <Typography align="center" className={classes.commentor_position}>
          {commentorPosition}
        </Typography>
      </div>
    </Box>
  );
};
export default Testimonial;
