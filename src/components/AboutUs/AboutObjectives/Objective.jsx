import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const Objective = ({ objectiveTitle, objectiveDescription }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} sx={{ padding: 2 }}>
      <Paper elevation={0} sx={{ textAlign: 'center', padding: 0.5, paddingTop: 2, border: '1px solid #008000' }}>
        <Typography variant="h3" sx={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
          {objectiveTitle}
        </Typography>
        <Typography variant="body2" gutterBottom color="primary" sx={{ fontSize: '1.3rem' }}>
          {objectiveDescription}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Objective;
