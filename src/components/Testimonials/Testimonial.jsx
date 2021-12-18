/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  testimonial_card: {
    width: 'clamp(350px, 350px, 350px)',
    minHeight: '210px',
    margin: '20px 1rem'
  },
  testimonial_typography: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  testimonial_title: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    margin: theme.spacing(1),
    color: theme.palette.primary.dark
  },
  testimonial_comment: {
    fontSize: '14px',
    lineHeight: '25px',
    color: theme.palette.primary.main
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
    objectFit: 'cover',
    borderRadius: '50%'
  },
  commentor_name: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  commentor_position: {
    fontSize: '14px',
    textTransform: 'capitalize'
  }
}));
const Testimonial = ({ commentTitle, comment, commentorProfilePicture, commentorName, commentorPosition }) => {
  const classes = useStyles();
  return (
    <Box className={classes.testimonial_card}>
      <Paper className={classes.testimonial_typography}>
        <Typography align="center" className={classes.testimonial_title}>
          {commentTitle}
        </Typography>
        <Typography variant="body1" align="justify" className={classes.testimonial_comment}>
          {comment}
        </Typography>
      </Paper>
      <div>
        <div className={classes.image_fix}>
          <img src={commentorProfilePicture} alt={commentorName} className={classes.image} />
        </div>
        <Typography className={classes.commentor_name} align="center">
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
