import { Container, Grid } from '@mui/material';
import React from 'react';
import ResourcesSermon from './ResourcesSermon';

const ResourcesSermons = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <ResourcesSermon />
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <ResourcesSermon />
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <ResourcesSermon />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesSermons;
