import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import UpComingEventItem from './UpComingEventItem';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const UpComingEvents = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <UpComingEventItem />
          </Grid>
          <Grid item xs={12} sm={6}>
            <UpComingEventItem />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UpComingEvents;
