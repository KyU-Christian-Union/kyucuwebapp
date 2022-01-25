import React from 'react';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import DepartmentalLeader from './DepartmentalLeader';

import user1 from '../../../assets/images/user1.jpg';
import user2 from '../../../assets/images/user2.jpg';
import user3 from '../../../assets/images/user3.jpg';
import user4 from '../../../assets/images/user4.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: '90vw',
    maxWidth: '90vw',
    width: '90vw',
    margin: '2rem auto'
    // backgroundColor: 'red'
  }
});
const DepartmentalLeaders = () => {
  const classes = useStyles();
  return (
    <Grid container gap={4} className={classes.root} justifyContent="center" placeItems="center">
      <DepartmentalLeader leaderImage={user1} leaderName="Mercy Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={user2} leaderName="annastacia Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={user3} leaderName="ann Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={user4} leaderName="esther Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={user1} leaderName="diana Doe" leaderPosition="bs lead" />
      <DepartmentalLeader leaderImage={user1} leaderName="tabitha Doe" leaderPosition="bs lead" />
    </Grid>
  );
};
export default DepartmentalLeaders;
