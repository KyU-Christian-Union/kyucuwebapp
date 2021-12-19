import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    backgroundColor: '#f0f0f0'
  },
  leader_img: {
    width: '15rem',
    height: '15rem',
    borderRadius: '4px'
  },
  u_center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leader_text: {
    lineHeight: '1.5',
    letterSpacing: '1px'
  }
}));

const MinistryLeader = ({ imageLink, title, leaderMessage }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root} p={1}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.u_center}>
        <img src={imageLink} alt="ministry leader" className={classes.leader_img} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography variant="h3" align="center" sx={{ textTransform: 'capitalize', marginBottom: '10px' }}>
          {title}
        </Typography>
        <Typography align="justify" className={classes.leader_text}>
          {leaderMessage}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default MinistryLeader;
