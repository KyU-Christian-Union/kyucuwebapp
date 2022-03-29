import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#EEEEEE'
  },
  media: {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}));

function UpcomingEvent({ name, date, venue }) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.root} onClick={() => navigate(`/events/${name}`)}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={upcomingeventImage} alt="UpcomingEventImage" />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" align="justify">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" align="justify" sx={{ color: 'primary.main' }}>
            {date}
          </Typography>
          <Typography gutterBottom variant="h6" align="justify" sx={{ fontWeight: 400 }}>
            {venue}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UpcomingEvent;
