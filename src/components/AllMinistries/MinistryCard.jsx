import { Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  card_main: {
    minHeight: '400px',
    padding: theme.spacing(2),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)),url(${upcomingeventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '20px'
  },
  card_subhead: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    letterSpacing: theme.spacing(0.2),
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize',
    fontSize: '24px'
  },
  card_text: {
    color: theme.palette.common.white,
    fontSize: '14px',
    lineHeight: '20px'
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(22, 22, 22, 0.8);',
    padding: '10px'
  },
  bottom_typography: {
    flex: '145px',
    marginRight: theme.spacing(5)
  }
}));
const MinistryCard = ({ subhead, text }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/ministryDetails');
  };
  return (
    <Paper className={classes.card_main} p={3}>
      <div className={classes.bottom}>
        <div className={classes.bottom_typography}>
          <Typography variant="h2" align="left" className={classes.card_subhead}>
            {subhead}
          </Typography>
          <Typography align="justify" className={classes.card_text} variant="body1">
            {text}
          </Typography>
        </div>

        <Button variant="contained" onClick={handleNavigation}>
          Learn More &rarr;
        </Button>
      </div>
    </Paper>
  );
};
export default MinistryCard;
