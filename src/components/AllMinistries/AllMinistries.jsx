// this is what I will be exporting to the pages
import { Container, Grid } from '@mui/material';
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
  }
}));
const AllMinistries = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <MinistryCard
            subhead="last ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default AllMinistries;
