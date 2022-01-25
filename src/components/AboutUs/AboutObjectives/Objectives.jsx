// this component is not reusable but I created a seperate file for it for the purposes of scalability

import React from 'react';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Objective from './Objective';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '1rem',
    marginTop: '2rem',
    '&>*:not(:last-child)': {
      marginRight: '.1rem'
    }
  }
});
const Objectives = () => {
  const classes = useStyles();
  return (
    <Grid container gap={5} className={classes.root}>
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
