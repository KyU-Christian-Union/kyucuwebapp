import { Grid, Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '20rem',
    overflow: 'hidden'
  },
  image_fix: {
    width: 'clamp(100%, 100%, 100%)',
    height: '70%',
    marginBottom: '1.5rem',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  leader__image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  }
});
const DepartmentalLeader = ({ leaderImage, leaderName, leaderPosition }) => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={2} lg={3}>
      <Paper elevation={0} className={classes.root}>
        {/* this div is here to fix the image's aspect ratio */}
        <div className={classes.image_fix}>
          <img src={leaderImage} alt={leaderName} className={classes.leader__image} />
        </div>
        <Typography
          variant="body2"
          align="center"
          style={{ textTransform: 'capitalize', fontSize: '1.3rem', fontWeight: 'bold' }}
        >
          {leaderName}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ textTransform: 'uppercase', fontSize: '1rem', fontWeight: 'bold' }}
        >
          {leaderPosition}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default DepartmentalLeader;
