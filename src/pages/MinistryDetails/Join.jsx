import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  formCtrl: {
    width: '60%',
    margin: 'auto',
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));
const Join = () => {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formCtrl}>
        <InputLabel id="docket">Docket</InputLabel>
        <Select sx={{ width: '100%' }} labelId="docket" label="Docket">
          <MenuItem value="docket1">docket 1</MenuItem>
          <MenuItem value="docket2">docket 2</MenuItem>
          <MenuItem value="docket3">docket 3</MenuItem>
          <MenuItem value="docket4">docket 4</MenuItem>
          <MenuItem value="docket5">docket 5</MenuItem>
        </Select>
        <FormHelperText>Please select a docket where you want to help serve.</FormHelperText>
        <Button variant="contained">submit</Button>
      </FormControl>
    </>
  );
};
export default Join;
