import React from 'react';
import { Container } from '@mui/material';
import Event from './Event';

const EventWrapper = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '8px' }}>
      <Event day="DECEMBER 2021" subtitle="Evangelism Weekend" />
      <Event day="JANUARY 2022" subtitle="Evangelism Weekend" />
      <Event day="FEBRUARY 2022" subtitle="Evangelism Weekend" />
      <Event day="MARCH 2022" subtitle="Evangelism Weekend" />
    </Container>
  );
};

export default EventWrapper;
