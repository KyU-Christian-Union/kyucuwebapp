import { Box, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/images/culogo.png';

const SuspenseFallBack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a3a3a',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={logo}
          alt="KyUCU logo"
          style={{ width: '300px', height: '30%', objectFit: 'contain', marginBottom: 5 }}
        />
        <Typography variant="h5" gutterBottom color="white">
          Relax Tukushughulikie
        </Typography>
        <LinearProgress color="success" sx={{ width: '80%', marginBottom: 2, marginTop: 2 }} />
        <Typography variant="h4" color="#008000">
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};
export default SuspenseFallBack;
