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
const Join = ({ docketsArr }) => {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formCtrl}>
        <InputLabel id="docket">Docket</InputLabel>
        <Select
          sx={{ width: '100%' }}
          labelId="docket"
          label="Docket"
          placeholder="please select a docket you want to serve"
        >
          {docketsArr.map(docket => (
            <MenuItem key={docket.id} value={docket.id}>
              {docket.title}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Please select a docket where you want to help serve.</FormHelperText>
        <Button variant="contained">submit</Button>
      </FormControl>
    </>
  );
};
export default Join;
