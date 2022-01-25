import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Paper, Grid } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    minWidth: '15rem',
    width: '15rem',
    maxWidth: '15rem',
    padding: '.5rem',
    margin: 'auto',
    marginBottom: '1rem',
    borderRight: `2px solid ${theme.palette.primary.dark}`,
    // borderLeft: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: '0'
  }
}));
// xs={12} sm={6} md={6} lg={5}
const Objective = ({ objectiveTitle, objectiveDescription }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={2}>
      <Paper sx={12} elevation={0} className={classes.root}>
        <Typography variant="h3" style={{ marginBottom: '1.5rem', textTransform: 'capitalize' }}>
          {objectiveTitle}
        </Typography>
        <Typography variant="body2" style={{ fontSize: '1rem' }}>
          {objectiveDescription}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Objective;
