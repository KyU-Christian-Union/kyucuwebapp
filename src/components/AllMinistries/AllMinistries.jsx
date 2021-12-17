// this is what I will be exporting to the pages
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import MinistryCard from './MinistryCard';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  heading: {
    width: '100%',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2)
  },
  intro_text: {
    width: '80%',
    margin: 'auto',
    marginBottom: theme.spacing(2),
    lineHeight: '24px'
  }
}));
const AllMinistries = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" align="center" className={classes.heading}>
        Our Ministries
      </Typography>
      <Typography variant="body1" align="center" className={classes.intro_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard subhead="ict ministry" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard subhead="bible study" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard subhead="ushering ministry" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="intercessory ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard subhead="music ministry" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="sunday school ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. I am also adding a lot of text to see how this is going to appear in case the user/client types in a lot of text for this dummy boxes, so don't get alarmed over it."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard subhead="evangelism ministry" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </Grid>
      </Grid>
    </Container>
  );
};
export default AllMinistries;
