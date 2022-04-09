import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  bannerImageParent: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const Banner = ({ heading, subtitle, imgSource }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.bannerImageParent}
      sx={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)),url(${imgSource}), #C4C4C4` }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {heading && (
          <Typography variant="h1" align="center" color="white" gutterBottom sx={{ fontWeight: 700 }}>
            {heading}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="h2" align="center" color="white" sx={{ fontWeight: 400, marginTop: 4 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Banner;
