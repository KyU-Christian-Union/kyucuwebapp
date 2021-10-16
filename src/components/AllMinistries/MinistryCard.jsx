import { Button, Typography, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  card_main: {
    width: '30rem',
    height: '30rem',
    padding: theme.spacing(2),
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)),url(${upcomingeventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.009)'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 'auto'
    }
  },
  card_subhead: {
    color: theme.palette.common.white,
    fontWeight: 500,
    letterSpacing: theme.spacing(0.2),
    marginBottom: theme.spacing(3),
    textTransform: 'capitalize'
  },
  card_text: {
    color: theme.palette.common.white,
    fontSize: theme.typography.h5.fontSize,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    lineHeight: '1.2'
  },
  u_center: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    left: '0'
  }
}));
const MinistryCard = ({ subhead, text }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card_main} p={3}>
      <Typography variant="h2" align="center" className={classes.card_subhead}>
        {subhead}
      </Typography>
      <Typography className={classes.card_text}>{text}</Typography>
      <Box className={classes.u_center} p={2}>
        <Button variant="contained">Learn More &rarr;</Button>
      </Box>
    </Paper>
  );
};
export default MinistryCard;
