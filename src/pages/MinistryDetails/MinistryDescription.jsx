import React from 'react';
import { Box, Typography } from '@mui/material';

const MinistryDescription = ({ descriptionTitle, descriptionText }) => {
  return (
    <Box sx={{ textAlign: 'center' }} p={1}>
      <Typography variant="h2" sx={{ textTransform: 'capitalize', marginBottom: '1rem' }}>
        {descriptionTitle}
      </Typography>
      <Typography variant="body2">{descriptionText}</Typography>
    </Box>
  );
};
export default MinistryDescription;
