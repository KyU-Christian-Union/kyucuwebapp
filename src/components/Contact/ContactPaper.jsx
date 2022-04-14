import { IconButton, Paper, Typography } from '@mui/material';
import React from 'react';

const ContactPaper = ({ Icon, Title, Subtitle }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
      }}
    >
      <IconButton color="success" sx={{ backgroundColor: '#dcedc8' }}>
        {Icon}
      </IconButton>
      <Typography variant="h5" gutterBottom align="center">
        {Title}
      </Typography>
      <Typography variant="body2" gutterBottom align="center">
        {Subtitle}
      </Typography>
    </Paper>
  );
};

export default ContactPaper;
