// this component is not reusable but I created a seperate file for it for the purposes of scalability

import React from 'react';
import { Grid } from '@mui/material';
import Objective from './Objective';

const Objectives = () => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
      <Objective
        objectiveTitle="Discipleship"
        objectiveDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant ."
      />
      <Objective
        objectiveTitle="Evangelism"
        objectiveDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant ."
      />
      <Objective
        objectiveTitle="Mission"
        objectiveDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant ."
      />
      <Objective
        objectiveTitle="responsibility"
        objectiveDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant ."
      />
    </Grid>
  );
};
export default Objectives;
