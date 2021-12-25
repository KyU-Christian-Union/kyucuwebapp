import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
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

function UpcomingEvent() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={upcomingeventImage} alt="UpcomingEventImage" />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" align="justify">
            Evangelism Weekend
          </Typography>
          <Typography gutterBottom variant="h6" align="justify" sx={{ color: 'primary.main' }}>
            Thu, Nov 20, 10:30 AM
          </Typography>
          <Typography gutterBottom variant="h6" align="justify" sx={{ fontWeight: 400 }}>
            LH9, Main Campus
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UpcomingEvent;
