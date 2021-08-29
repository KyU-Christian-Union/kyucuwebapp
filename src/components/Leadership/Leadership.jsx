import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Leader from './Leader';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  }
}));
const Leadership = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Leadership;
