import React from 'react';
import { Grid } from '@mui/material';
import DepartmentalLeader from './DepartmentalLeader';
import clearUser from '../../../assets/images/sermon_image.jpg';

const DepartmentalLeaders = () => {
  return (
    <Grid container spacing={2} justifyContent="space-evenly" alignItems="center" sx={{ marginBottom: 2 }}>
      <DepartmentalLeader leaderImage={clearUser} leaderName="Mercy Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={clearUser} leaderName="jack Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={clearUser} leaderName="ann Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={clearUser} leaderName="elvis Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={clearUser} leaderName="diana Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={clearUser} leaderName="tabitha Doe" leaderPosition="bs lead" />
    </Grid>
  );
};
export default DepartmentalLeaders;
