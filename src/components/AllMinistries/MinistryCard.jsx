import { Button, Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  card_main: {
    width: '30rem',
    height: '30rem',
    boxShadow: '0 0 10px',
    position: 'relative',
    cursor: 'pointer',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)),url(${upcomingeventImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.04)'
    }
  },
  card_subhead: {
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.common.white,
    textTransform: 'capitalize'
  },
  card_text: {
    color: theme.palette.common.white,
    fontSize: theme.typography.h5.fontSize
    // lineHeight: '1'
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
    <Card className={classes.card_main}>
      <CardHeader
        title={
          <Typography className={classes.card_subhead} align="center">
            {subhead}
          </Typography>
        }
      />
      <CardContent className={classes.card_text}>{text}</CardContent>
      <Box className={classes.u_center} p={2}>
        <Button variant="contained">Learn More &rarr;</Button>
      </Box>
    </Card>
  );
};
export default MinistryCard;
