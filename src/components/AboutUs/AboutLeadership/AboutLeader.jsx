import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Paper, Typography, Card } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: '90vw',
    minWidth: '90vw',
    width: '90vw',
    margin: '1rem auto',
    marginBottom: '3rem'
  },
  leader__image__container: {
    maxWidth: '40vw',
    minWidth: '40vw',
    width: '40vw',
    minHeight: '10rem'
  },
  leader__image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover'
  },
  leader__header: {
    backgroundColor: theme.palette.primary.main,
    padding: '.5rem'
  },
  '@media screen and (max-width: 750px)': {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    leader__image__container: {
      width: '100vw',
      minHeight: '100%',
      marginBottom: '.5rem'
    },
    leader__image: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover'
    }
  }
}));
const AboutLeader = ({ leaderName, leaderPosition, leaderMessage, leaderAvartar }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Paper className={classes.leader__image__container}>
        <img src={leaderAvartar} className={classes.leader__image} alt={`${leaderName} phooto`} />
      </Paper>
      <Paper>
        <div className={classes.leader__header}>
          <Typography variant="h2" style={{ textTransform: 'capitalize', color: '#eee', marginBottom: '.5rem' }}>
            {leaderName}
          </Typography>
          <Typography variant="h4" style={{ textTransform: 'uppercase', color: '#eee', letterSpacing: '1px' }}>
            {leaderPosition}
          </Typography>
        </div>
        <Typography variant="body2" style={{ fontSize: '1.2rem', padding: '.5rem' }}>
          {leaderMessage}
        </Typography>
      </Paper>
    </Card>
  );
};
export default AboutLeader;
