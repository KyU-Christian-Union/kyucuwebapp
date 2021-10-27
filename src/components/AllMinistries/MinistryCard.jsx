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
    alignItems: 'center',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.009)'
    }
  },
  card_subhead: {
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(2)
  },
  card_text: {
    marginBottom: 'auto',
    color: theme.palette.common.white,
    lineHeight: 1.2
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
