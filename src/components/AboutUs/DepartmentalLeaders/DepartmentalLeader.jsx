import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const DepartmentalLeader = ({ leaderImage, leaderName, leaderPosition }) => {
  return (
    <Grid item sm={6} md={4} lg={4} xs={12}>
      <Paper sx={{ backgroundColor: 'primary.main' }}>
        {/* this div is here to fix the image's aspect ratio */}
        <div style={{}}>
          <img src={leaderImage} alt={leaderName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: 8 }}>
          <Typography
            variant="body2"
            align="center"
            gutterBottom
            sx={{ textTransform: 'capitalize', fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}
          >
            {leaderName}
          </Typography>
          <Typography variant="body2" align="center" sx={{ textTransform: 'uppercase', color: 'white' }} gutterBottom>
            {leaderPosition}
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};
export default DepartmentalLeader;
