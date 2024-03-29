import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  docket_photo: {
    width: '15rem',
    height: '15rem',
    borderRadius: '4px'
  },
  u_center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Docket = ({ docketImageLink, docketName, docketText }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} xs={12} sm={12} md={10} lg={10} sx={{ margin: 'auto' }}>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.u_center}>
        <img src={docketImageLink} alt="docket pic" className={classes.docket_photo} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        sx={{
          textAlign: 'left'
        }}
      >
        <Typography variant="h3" sx={{ textTransform: 'capitalize', letterSpacing: '1.5px', marginBottom: '1rem' }}>
          {docketName}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: '1.4', letterSpacing: '1.2px', textAlign: 'justify' }}>
          {docketText}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Docket;
