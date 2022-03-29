import React from 'react';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import DepartmentalLeader from './DepartmentalLeader';
import clearUser from '../../../assets/images/sermon_image.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: '90vw',
    maxWidth: '90vw',
    width: '90vw',
    margin: '2rem auto'
  }
});
const DepartmentalLeaders = () => {
  const classes = useStyles();
  return (
    <Grid container gap={4} className={classes.root} justifyContent="center" alignItems="center">
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
