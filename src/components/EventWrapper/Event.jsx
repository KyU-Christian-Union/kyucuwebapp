import { Typography, Box } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useHistory } from 'react-router-dom';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  eventBox: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.between(600, 700)]: {
      flexDirection: 'column'
    }
  },
  eventImage: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.between(600, 700)]: {
      width: '100%'
    }
  }
}));

const Event = ({ day, subtitle }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box mb={1} mt={5}>
      <Typography variant="h4" align="center" color="#2E002E" gutterBottom>
        {day}
      </Typography>
      <Box sx={{ display: 'flex' }} className={classes.eventBox} onClick={() => history.push('/events/id')}>
        <img src={upcomingeventImage} alt="Event" className={classes.eventImage} style={{ objectFit: 'cover' }} />
        <Box sx={{ flexBasis: '50%', backgroundColor: '#FFFFFF' }}>
          <Typography
            variant="h5"
            color="white"
            component="div"
            gutterBottom
            sx={{ backgroundColor: '#800080', width: '100%', padding: 2 }}
          >
            {subtitle}
          </Typography>
          <Typography variant="h6" color="#008000" gutterBottom sx={{ paddingLeft: 2 }}>
            Thu, Dec 20, 10:30 AM{' '}
          </Typography>
          <Typography variant="h6" color="#2E002E" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue commodo neque id varius. Turpis elementum
            dapibus vel tempor vulputate in integer. Ultrices aliquam nisl nisi ullamcorper ut egestas dictum placerat
            elit. Dignissim tristique in sed duis eleifend turpis pellentesque. Suspendisse integer odio consectetur
            ipsum. Sociis lectus quisque nisl, faucibus bibendum senectus placerat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse integer odio consectetur ipsum. Sociis lectus quisque nisl,
            faucibus bibendum senectus placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Event;
