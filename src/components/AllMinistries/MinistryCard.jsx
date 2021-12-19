import { Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  card_main: {
    minHeight: '30rem',
    padding: theme.spacing(2),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)),url(${upcomingeventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    marginBottom: 'auto',
    lineHeight: '1.2'
  }
}));
const MinistryCard = ({ subhead, text }) => {
  const classes = useStyles();
  const hist = useHistory();
  const handleNavigation = () => {
    hist.push('/ministryDetails');
  };
  return (
    <Paper className={classes.card_main} p={3}>
      <Typography variant="h2" align="center" className={classes.card_subhead}>
        {subhead}
      </Typography>
      <Typography className={classes.card_text}>{text}</Typography>

      <Button variant="contained" onClick={handleNavigation}>
        Learn More &rarr;
      </Button>
    </Paper>
  );
};
export default MinistryCard;
