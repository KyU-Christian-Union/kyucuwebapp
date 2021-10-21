import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles({
  root: {
    height: '15rem',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .4)),url(${upcomingeventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
});
const MinistryHeader = ({ ministryName, ministryMotto }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} p={2}>
      <Typography
        align="center"
        variant="h2"
        sx={{ color: 'white', letterSpacing: '2px', textTransform: 'capitalize' }}
      >
        {ministryName}
      </Typography>
      <Typography variant="h6" sx={{ color: 'white', letterSpacing: '2px', textTransform: 'capitalize' }}>
        {ministryMotto}
      </Typography>
    </Box>
  );
};
export default MinistryHeader;
