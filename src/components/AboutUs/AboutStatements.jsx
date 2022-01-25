import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Paper } from '@mui/material';

const useStyles = makeStyles({
  statement__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'clamp(70%, 70%, 70%)',
    margin: '1rem auto',
    marginBottom: '2rem',
    '&:last-of-type': {
      marginBottom: '4rem'
    }
  }
});
const AboutStatement = ({ title, text }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} sx="12" className={classes.statement__container}>
      <Typography variant="h2" style={{ color: '#000', textTransform: 'capitalize', marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="body2" align="center" style={{ fontSize: '1.3rem' }}>
        {text}
      </Typography>
    </Paper>
  );
};
export default AboutStatement;
