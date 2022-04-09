import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutStatement = ({ title, text }) => {
  return (
    <Box>
      <Typography variant="h1" sx={{ textTransform: 'capitalize' }} align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        color="primary"
        sx={{ fontSize: '1.2rem', marginBottom: 4 }}
        gutterBottom
      >
        {text}
      </Typography>
    </Box>
  );
};
export default AboutStatement;
